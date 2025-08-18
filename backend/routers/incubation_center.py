from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional

from ..models.incubation_center import IncubationCenter
from ..db.mock_data import incubation_centers_db

router = APIRouter(
    tags=["Incubation Centers"]
)

@router.get("/incubation-centers", response_model=List[IncubationCenter])
def get_incubation_centers(
    hasVacancy: Optional[bool] = Query(None, description="Filter by centers that have vacant rooms"),
    region: Optional[str] = Query(None, description="Filter by region (e.g., 전주시)"),
    keyword: Optional[str] = Query(None, description="Search keyword in name or address"),
):
    """
    Get a list of incubation centers with filtering.
    """
    filtered_centers = incubation_centers_db

    if hasVacancy is not None:
        if hasVacancy:
            filtered_centers = [c for c in filtered_centers if c.vacantRooms > 0]
        else:
            filtered_centers = [c for c in filtered_centers if c.vacantRooms == 0]

    if region:
        # Case-insensitive search for region in address
        filtered_centers = [c for c in filtered_centers if region.lower() in c.address.lower()]

    if keyword:
        # Case-insensitive search for keyword in name or address
        filtered_centers = [c for c in filtered_centers if keyword.lower() in c.name.lower() or keyword.lower() in c.address.lower()]

    return filtered_centers


@router.get("/incubation-centers/{center_id}", response_model=IncubationCenter)
def get_incubation_center(center_id: str):
    """
    Get details of a specific incubation center by its ID.
    """
    center = next((c for c in incubation_centers_db if c.id == center_id), None)
    if not center:
        raise HTTPException(status_code=404, detail="Incubation center not found")
    return center
