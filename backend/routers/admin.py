from fastapi import APIRouter, HTTPException, status, Depends
from typing import List

from ..models.announcement import Announcement, AnnouncementCreate
from ..db.mock_data import announcements_db
from .user import get_current_user, User

router = APIRouter(
    prefix="/api/admin",
    tags=["Admin"],
    dependencies=[Depends(get_current_user)] # Protect all admin routes
)

def check_admin(current_user: User):
    if current_user.role != 'admin':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )

@router.post("/announcements", response_model=Announcement, dependencies=[Depends(check_admin)])
def create_announcement(announcement: AnnouncementCreate):
    """
    UI-99-02: Create a new announcement.
    """
    new_id = max(ann.id for ann in announcements_db) + 1 if announcements_db else 1
    new_announcement = Announcement(id=new_id, **announcement.model_dump())
    announcements_db.append(new_announcement)
    return new_announcement

@router.put("/announcements/{announcement_id}", response_model=Announcement, dependencies=[Depends(check_admin)])
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

@router.delete("/announcements/{announcement_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(check_admin)])
def delete_announcement(announcement_id: int):
    """
    UI-99-02: Delete an announcement.
    """
    index = next((i for i, ann in enumerate(announcements_db) if ann.id == announcement_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Announcement not found")
    announcements_db.pop(index)
    return
