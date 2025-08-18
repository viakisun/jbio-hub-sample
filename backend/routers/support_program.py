from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
import math

from ..models.support_program import SupportProgram, PaginatedSupportProgramResponse, Pagination, SupportProgramStatus
from ..db.mock_data import support_programs_db

router = APIRouter(
    tags=["Support Programs"]
)

@router.get("/support-programs", response_model=PaginatedSupportProgramResponse)
def get_support_programs(
    page: int = 1,
    limit: int = 20,
    status: Optional[SupportProgramStatus] = Query(None, description="Filter by program status"),
    organization: Optional[str] = Query(None, description="Filter by organization name"),
    keyword: Optional[str] = Query(None, description="Search keyword in title or description"),
):
    """
    Get a list of support programs with pagination and filtering.
    """
    filtered_programs = support_programs_db

    # Apply filters
    if status:
        filtered_programs = [p for p in filtered_programs if p.status == status]
    if organization:
        # Case-insensitive search
        filtered_programs = [p for p in filtered_programs if organization.lower() in p.organization.lower()]
    if keyword:
        # Case-insensitive search
        filtered_programs = [p for p in filtered_programs if keyword.lower() in p.title.lower() or keyword.lower() in p.description.lower()]

    # Apply pagination
    total_items = len(filtered_programs)
    start_index = (page - 1) * limit
    end_index = start_index + limit
    paginated_data = filtered_programs[start_index:end_index]

    total_pages = math.ceil(total_items / limit) if limit > 0 else 0

    pagination_meta = Pagination(
        page=page,
        limit=limit,
        total=total_items,
        totalPages=total_pages,
        hasNext=page < total_pages,
        hasPrev=page > 1 and total_pages > 0,
    )

    return PaginatedSupportProgramResponse(data=paginated_data, pagination=pagination_meta)


@router.get("/support-programs/{program_id}", response_model=SupportProgram)
def get_support_program(program_id: str):
    """
    Get details of a specific support program by its ID.
    """
    program = next((p for p in support_programs_db if p.id == program_id), None)
    if not program:
        raise HTTPException(status_code=404, detail="Support program not found")
    return program
