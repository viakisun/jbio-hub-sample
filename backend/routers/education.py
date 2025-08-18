from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional

from ..models.education import EducationProgram, EducationContent, EducationProgramStatus, EducationContentType
from ..db.mock_data import education_programs_db, education_contents_db

router = APIRouter(
    tags=["Education"]
)


@router.get("/programs", response_model=List[EducationProgram])
def get_education_programs(
    category: Optional[str] = Query(None, description="Filter by category"),
    organization: Optional[str] = Query(None, description="Filter by organization"),
    status: Optional[EducationProgramStatus] = Query(None, description="Filter by program status"),
    month: Optional[str] = Query(None, description="Filter by month in YYYY-MM format"),
    keyword: Optional[str] = Query(None, description="Search keyword in title"),
):
    """
    Get a list of education programs with filtering.
    """
    filtered_programs = education_programs_db

    if category:
        filtered_programs = [p for p in filtered_programs if category.lower() in p.category.lower()]
    if organization:
        filtered_programs = [p for p in filtered_programs if organization.lower() in p.organization.lower()]
    if status:
        filtered_programs = [p for p in filtered_programs if p.status == status]
    if month:
        try:
            year, mon = map(int, month.split('-'))
            filtered_programs = [p for p in filtered_programs if p.startDate.year == year and p.startDate.month == mon]
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid month format. Use YYYY-MM.")
    if keyword:
        filtered_programs = [p for p in filtered_programs if keyword.lower() in p.title.lower()]

    return filtered_programs


@router.get("/programs/{program_id}", response_model=EducationProgram)
def get_education_program(program_id: str):
    """
    Get details of a specific education program by its ID.
    """
    program = next((p for p in education_programs_db if p.id == program_id), None)
    if not program:
        raise HTTPException(status_code=404, detail="Education program not found")
    return program


@router.get("/education/contents", response_model=List[EducationContent])
def get_education_contents(
    category: Optional[str] = Query(None, description="Filter by category"),
    type: Optional[EducationContentType] = Query(None, description="Filter by content type"),
    keyword: Optional[str] = Query(None, description="Search keyword in title or description"),
):
    """
    Get a list of education contents with filtering.
    """
    filtered_contents = education_contents_db

    if category:
        filtered_contents = [c for c in filtered_contents if category.lower() in c.category.lower()]
    if type:
        filtered_contents = [c for c in filtered_contents if c.type == type]
    if keyword:
        filtered_contents = [c for c in filtered_contents if keyword.lower() in c.title.lower() or keyword.lower() in c.description.lower()]

    return filtered_contents


@router.get("/education/contents/{content_id}", response_model=EducationContent)
def get_education_content(content_id: str):
    """
    Get details of a specific education content by its ID.
    """
    content = next((c for c in education_contents_db if c.id == content_id), None)
    if not content:
        raise HTTPException(status_code=404, detail="Education content not found")
    return content
