from fastapi import APIRouter, HTTPException, Query
from typing import Optional
import math
from datetime import datetime, timedelta

from ..models.technology import Technology, PaginatedTechnologyResponse
from ..models.support_program import Pagination  # Reuse Pagination model
from ..db.mock_data import technologies_db

router = APIRouter(
    tags=["Tech Summary"]
)


@router.get("/tech-summary/list", response_model=PaginatedTechnologyResponse)
def get_technologies(
    page: int = 1,
    limit: int = 20,
    keyword: Optional[str] = Query(None, description="Search keyword in title or summary"),
    organization: Optional[str] = Query(None, description="Filter by organization name"),
    category: Optional[str] = Query(None, description="Filter by category"),
    subCategory: Optional[str] = Query(None, description="Filter by sub-category"),
    transferable: Optional[bool] = Query(None, description="Filter by transferability"),
    date_range: Optional[str] = Query(None, description="Filter by date range (e.g., 'year', 'month')"),
):
    """
    Get a list of technologies and patents with pagination and filtering.
    """
    filtered_techs = technologies_db

    # Apply filters
    if keyword:
        filtered_techs = [t for t in filtered_techs if keyword.lower() in t.title.lower() or keyword.lower() in t.summary.lower()]
    if organization:
        filtered_techs = [t for t in filtered_techs if organization.lower() in t.organization.lower()]
    if category:
        filtered_techs = [t for t in filtered_techs if category.lower() == t.category.lower()]
    if subCategory:
        filtered_techs = [t for t in filtered_techs if subCategory.lower() == t.subCategory.lower()]
    if transferable is not None:
        filtered_techs = [t for t in filtered_techs if t.transferable == transferable]

    if date_range:
        now = datetime.now()
        if date_range == 'year':
            delta = timedelta(days=365)
        elif date_range == 'month':
            delta = timedelta(days=30)
        else:
            delta = None

        if delta:
            cutoff_date = now - delta
            filtered_techs = [t for t in filtered_techs if t.createdAt >= cutoff_date]

    # Apply pagination
    total_items = len(filtered_techs)
    start_index = (page - 1) * limit
    end_index = start_index + limit
    paginated_data = filtered_techs[start_index:end_index]

    total_pages = math.ceil(total_items / limit) if limit > 0 else 0

    pagination_meta = Pagination(
        page=page,
        limit=limit,
        total=total_items,
        totalPages=total_pages,
        hasNext=page < total_pages,
        hasPrev=page > 1 and total_pages > 0,
    )

    return PaginatedTechnologyResponse(data=paginated_data, pagination=pagination_meta)


@router.get("/tech-summary/detail/{tech_id}", response_model=Technology)
def get_technology(tech_id: str):
    """
    Get details of a specific technology by its ID.
    """
    tech = next((t for t in technologies_db if t.id == tech_id), None)
    if not tech:
        raise HTTPException(status_code=404, detail="Technology not found")
    return tech
