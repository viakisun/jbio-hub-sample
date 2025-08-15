from fastapi import APIRouter, HTTPException, status
from typing import List

from ..models.announcement import Announcement
from ..db.mock_data import announcements_db

router = APIRouter(
    prefix="/announcements",
    tags=["Announcements"],
)

from typing import Optional

@router.get("", response_model=List[Announcement])
def get_announcements(limit: Optional[int] = None):
    """
    UI-01-02: Get a list of all announcements.
    """
    if limit:
        return announcements_db[:limit]
    return announcements_db

@router.get("/{announcement_id}", response_model=Announcement)
def get_announcement(announcement_id: int):
    """
    UI-01-03: Get details of a single announcement by its ID.
    """
    announcement = next((ann for ann in announcements_db if ann.id == announcement_id), None)
    if announcement is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Announcement with ID {announcement_id} not found",
        )
    return announcement
