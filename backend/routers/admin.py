from fastapi import APIRouter, HTTPException, status, Depends, Body
from typing import List, Optional
import uuid

from ..models.announcement import Announcement, AnnouncementCreate
from ..models.user import User
from ..models.auth import RegistrationRequest
from ..models.admin import Admin, DashboardSummary
from ..db.mock_data import announcements_db, users_db, registration_requests_db
from .user import get_current_user

router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
    # The dependency below protects all routes in this file
    dependencies=[Depends(get_current_user)]
)


def check_admin_role(current_user: User = Depends(get_current_user)):
    """Dependency to check if the current user is an admin."""
    user_in_db = next((u for u in users_db if u.id == current_user.id), None)
    if not user_in_db or user_in_db.role != 'admin':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )


# Note: The /admin/auth/login is defined in openapi.yml but a generic /auth/login already exists.
# An admin would log in via the same endpoint and receive a token based on their role.
# A separate admin login endpoint is redundant if roles are handled correctly.
# For now, we will implement the other admin endpoints which are protected by role checks.

@router.get("/dashboard/summary", response_model=DashboardSummary, dependencies=[Depends(check_admin_role)])
def get_dashboard_summary():
    """Get a summary of dashboard metrics."""
    active_users = len([u for u in users_db if u.role != 'inactive'])
    pending_approvals = len([r for r in registration_requests_db if r.status == 'pending'])

    return DashboardSummary(
        userCount=len(users_db),
        activeUsers=active_users,
        pendingApprovals=pending_approvals,
        announcementCount=len(announcements_db),
        systemStats={"dailyLogins": 120, "monthlyTraffic": 15000} # Mocked stats
    )

@router.get("/users", response_model=List[User], dependencies=[Depends(check_admin_role)])
def get_all_users(status: Optional[str] = None, search: Optional[str] = None):
    """Get a list of all users, with optional filters."""
    results = [User(**u.model_dump(exclude={'password'})) for u in users_db]
    if status:
        # This is a mock filter. A real app might have a proper status field.
        pass # Not implemented in mock data
    if search:
        results = [u for u in results if search.lower() in u.username.lower() or search.lower() in u.email.lower()]
    return results

@router.patch("/users/{user_id}/status", dependencies=[Depends(check_admin_role)])
def update_user_status(user_id: int, status_update: dict = Body(...)):
    """Update a user's status."""
    user = next((u for u in users_db if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    # In a real app, you'd update a status field. We'll mock this by changing role.
    new_status = status_update.get("status")
    if new_status not in ["active", "inactive"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    # user.status = new_status # Assuming a status field exists on the model
    return {"message": f"User {user_id} status updated to {new_status}"}

@router.patch("/users/{user_id}/role", dependencies=[Depends(check_admin_role)])
def update_user_role(user_id: int, role_update: dict = Body(...)):
    """Update a user's role."""
    user = next((u for u in users_db if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    new_role = role_update.get("role")
    if new_role not in ["user", "admin", "manager"]:
        raise HTTPException(status_code=400, detail="Invalid role")
    user.role = new_role
    return {"message": f"User {user_id} role updated to {new_role}"}

@router.get("/users/registration-requests", response_model=List[RegistrationRequest], dependencies=[Depends(check_admin_role)])
def get_registration_requests():
    """Get the list of pending registration requests."""
    return [r for r in registration_requests_db if r.status == 'pending']

@router.post("/users/registration-requests/approve", dependencies=[Depends(check_admin_role)])
def approve_registration(approval: dict = Body(...)):
    """Approve a registration request."""
    user_id_to_approve = approval.get("userIds", [])[0] # Mock: approve one at a time
    req = next((r for r in registration_requests_db if r.userId == user_id_to_approve), None)
    if not req or req.status != 'pending':
        raise HTTPException(status_code=404, detail="Request not found or not pending")
    req.status = "approved"
    # Create a new user
    new_user_id = max(u.id for u in users_db) + 1 if users_db else 1
    # Note: A real implementation would require a password to be set.
    # We will mock a user with a default password.
    new_user = User(id=new_user_id, username=req.name, email=req.email, full_name=req.name, role='user')
    users_db.append(new_user)
    return {"message": f"User registration for {req.email} approved."}

@router.post("/users/registration-requests/reject", dependencies=[Depends(check_admin_role)])
def reject_registration(rejection: dict = Body(...)):
    """Reject a registration request."""
    user_id_to_reject = rejection.get("userId")
    req = next((r for r in registration_requests_db if r.userId == user_id_to_reject), None)
    if not req or req.status != 'pending':
        raise HTTPException(status_code=404, detail="Request not found or not pending")
    req.status = "rejected"
    return {"message": f"User registration for {req.email} rejected."}


# --- Existing Announcement Management ---

@router.post("/announcements", response_model=Announcement, dependencies=[Depends(check_admin_role)])
def create_announcement(announcement: AnnouncementCreate):
    """
    UI-99-02: Create a new announcement.
    """
    new_id = max(ann.id for ann in announcements_db) + 1 if announcements_db else 1
    new_announcement = Announcement(id=new_id, **announcement.model_dump())
    announcements_db.append(new_announcement)
    return new_announcement

@router.put("/announcements/{announcement_id}", response_model=Announcement, dependencies=[Depends(check_admin_role)])
def update_announcement(announcement_id: int, announcement_update: AnnouncementCreate):
    """
    UI-99-02: Update an existing announcement.
    """
    index = next((i for i, ann in enumerate(announcements_db) if ann.id == announcement_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Announcement not found")

    announcement = announcements_db[index]
    update_data = announcement_update.model_dump(exclude_unset=True)
    updated_announcement = announcement.model_copy(update=update_data)
    announcements_db[index] = updated_announcement
    return updated_announcement

@router.delete("/announcements/{announcement_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(check_admin_role)])
def delete_announcement(announcement_id: int):
    """
    UI-99-02: Delete an announcement.
    """
    index = next((i for i, ann in enumerate(announcements_db) if ann.id == announcement_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Announcement not found")
    announcements_db.pop(index)
    return
