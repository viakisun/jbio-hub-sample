from fastapi import APIRouter, Depends, HTTPException, status, Body
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated, List

from ..models.user import User
from ..models.application import Application
from ..db.mock_data import users_db, applications_db

router = APIRouter(
    tags=["Users"]
)

# The tokenUrl should point to the new login endpoint, which is in the auth router
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")


# This is a mock dependency. In a real app, this would decode a JWT.
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    """
    Dependency to get the current user from a token.
    For mocking, we assume the token is the user's ID.
    e.g., "fake-jwt-token-for-user-1"
    """
    if not token.startswith("fake-jwt-token-for-user-"):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token format")

    try:
        # Extract user ID from the fake token
        user_id_str = token.replace("fake-jwt-token-for-user-", "")
        user_id = int(user_id_str)
    except (ValueError, TypeError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid user ID in token")

    user_in_db = next((u for u in users_db if u.id == user_id), None)
    if user_in_db is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")

    # Return the public User model, not UserInDB with password
    return User(**user_in_db.model_dump(exclude={'password'}))


@router.get("/users/me", response_model=User)
def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    """
    Get the profile of the current authenticated user.
    """
    return current_user


@router.patch("/users/me", response_model=User)
def update_user_me(
    updates: dict = Body(...),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    """
    Update the current user's profile (name, phone, organization).
    """
    user_in_db = next((u for u in users_db if u.id == current_user.id), None)
    if not user_in_db:
        # This case should ideally not be reached if get_current_user works correctly
        raise HTTPException(status_code=404, detail="User not found in DB")

    # Update only the allowed fields
    allowed_fields = ["name", "phone", "organization"]
    for field, value in updates.items():
        if field in allowed_fields:
            setattr(user_in_db, field, value)

    return User(**user_in_db.model_dump(exclude={'password'}))


@router.patch("/users/me/password")
def update_user_password(
    passwords: dict = Body(...),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    """
    Update the current user's password.
    """
    user_in_db = next((u for u in users_db if u.id == current_user.id), None)
    if not user_in_db:
        raise HTTPException(status_code=404, detail="User not found in DB")

    current_password = passwords.get("currentPassword")
    new_password = passwords.get("newPassword")

    if not current_password or not new_password:
        raise HTTPException(status_code=400, detail="Both current and new passwords are required")

    if user_in_db.password != current_password:
        raise HTTPException(status_code=400, detail="Incorrect current password")

    user_in_db.password = new_password
    return {"message": "Password updated successfully"}


@router.get("/users/me/applications", response_model=List[Application])
def get_my_applications(current_user: Annotated[User, Depends(get_current_user)]):
    """
    Get the current user's application history.
    This is a mock implementation. In a real app, you would query based on user_id.
    """
    # Mock logic: associate users to applications.
    # In a real system, the application would have a user_id.
    # For now, let's assume user 1 applied to app 1, user 2 to app 2.
    if current_user.id == 1:
        return [app for app in applications_db if app.id == "app_001"]
    elif current_user.id == 2:
        return [app for app in applications_db if app.id == "app_002"]

    return []
