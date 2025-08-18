from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional

from ..models.mentor import Mentor
from ..db.mock_data import mentors_db

router = APIRouter(
    tags=["Mentors"]
)


@router.get("/mentors", response_model=List[Mentor])
def get_mentors(
    field: Optional[str] = Query(None, description="Filter by mentor's field of expertise"),
    available: Optional[bool] = Query(None, description="Filter by availability"),
    keyword: Optional[str] = Query(None, description="Search keyword in name, organization, or expertise"),
):
    """
    Get a list of mentors with filtering.
    """
    filtered_mentors = mentors_db

    if field:
        # Check if the field string is a substring of any field in the mentor's list
        filtered_mentors = [m for m in filtered_mentors if any(field.lower() in f.lower() for f in m.field)]
    if available is not None:
        filtered_mentors = [m for m in filtered_mentors if m.available == available]
    if keyword:
        # Case-insensitive search
        keyword_lower = keyword.lower()
        filtered_mentors = [
            m for m in filtered_mentors if
            keyword_lower in m.name.lower() or
            keyword_lower in m.organization.lower() or
            keyword_lower in m.expertise.lower()
        ]

    return filtered_mentors


@router.get("/mentors/{mentor_id}", response_model=Mentor)
def get_mentor(mentor_id: str):
    """
    Get details of a specific mentor by their ID.
    """
    mentor = next((m for m in mentors_db if m.id == mentor_id), None)
    if not mentor:
        raise HTTPException(status_code=404, detail="Mentor not found")
    return mentor
