from fastapi import APIRouter, HTTPException, status, Query
from typing import List, Optional

from ..models.company import Company
from ..db.mock_data import companies_db

router = APIRouter(
    prefix="/api/companies",
    tags=["Companies & Institutions"],
)

@router.get("", response_model=List[Company])
def get_companies(type: Optional[str] = Query(None, description="Filter by type: '기업' or '기관'")):
    """
    UI-02-01: Get a list of all companies and institutions.
    Can be filtered by type.
    """
    if type:
        return [company for company in companies_db if company.type == type]
    return companies_db

@router.get("/{company_id}", response_model=Company)
def get_company(company_id: int):
    """
    UI-02-02: Get details of a single company or institution by its ID.
    """
    company = next((comp for comp in companies_db if comp.id == company_id), None)
    if company is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Company or institution with ID {company_id} not found",
        )
    return company
