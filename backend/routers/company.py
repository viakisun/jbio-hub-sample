from fastapi import APIRouter, HTTPException, status, Query
from typing import List, Optional

from ..models.company import Company, SizeCategory, CompanyStats
from ..models.common import PaginatedResponse
from ..db.mock_data import companies_db

router = APIRouter(
    prefix="/companies",
    tags=["companies"],
)

def paginate(items: List, page: int, limit: int) -> dict:
    total_items = len(items)
    if limit == 0:
        total_pages = 1 if total_items > 0 else 0
    else:
        total_pages = (total_items + limit - 1) // limit

    start = (page - 1) * limit
    end = start + limit
    paginated_items = items[start:end]

    return {
        "data": paginated_items,
        "pagination": {
            "page": page,
            "limit": limit,
            "total": total_items,
            "totalPages": total_pages,
            "hasNext": page < total_pages,
            "hasPrev": page > 1,
        }
    }

@router.get("", response_model=PaginatedResponse[Company])
def get_companies(
    page: int = 1,
    limit: int = 20,
    region: Optional[str] = None,
    industry: Optional[str] = None,
    sizeCategory: Optional[SizeCategory] = None,
    hasInvestment: Optional[bool] = None,
    sort: Optional[str] = Query(None, description="Sort order", enum=["latest", "name", "investmentSize"]),
    keyword: Optional[str] = None,
):
    """
    Get a list of companies with filtering, sorting, and pagination.
    """
    results = list(companies_db.values())

    if region:
        results = [c for c in results if c.region == region]
    if industry:
        results = [c for c in results if c.industry == industry]
    if sizeCategory:
        results = [c for c in results if c.sizeCategory == sizeCategory]
    if hasInvestment is not None:
        results = [c for c in results if ("investment" in "".join(c.achievements).lower()) == hasInvestment]
    if keyword:
        keyword = keyword.lower()
        results = [c for c in results if keyword in c.name.lower() or keyword in c.description.lower()]

    if sort:
        if sort == "name":
            results.sort(key=lambda c: c.name)
        elif sort == "latest":
            results.sort(key=lambda c: c.foundedYear, reverse=True)
        # Note: investmentSize sorting is not implemented as mock data lacks this field.

    return paginate(results, page, limit)

@router.get("/stats", response_model=CompanyStats)
def get_company_stats():
    """
    Get statistics for the company dashboard.
    """
    results = list(companies_db.values())
    total_count = len(results)

    region_dist = {}
    for company in results:
        region_dist[company.region] = region_dist.get(company.region, 0) + 1

    size_dist = {
        "startup": len([c for c in results if c.sizeCategory == SizeCategory.STARTUP]),
        "sme": len([c for c in results if c.sizeCategory == SizeCategory.SME]),
        "large": len([c for c in results if c.sizeCategory == SizeCategory.LARGE]),
    }

    return {
        "totalCount": total_count,
        "regionDistribution": region_dist,
        "sizeDistribution": size_dist,
    }

@router.get("/compare", response_model=List[Company])
def compare_companies(ids: str = Query(..., description="Comma-separated list of company IDs to compare")):
    """
    Compare up to 3 companies by their IDs.
    """
    id_list = [i.strip() for i in ids.split(',')]
    if len(id_list) > 3:
        raise HTTPException(status_code=400, detail="Cannot compare more than 3 companies.")

    results = [companies_db.get(id) for id in id_list if companies_db.get(id)]

    if len(results) != len(id_list):
        found_ids = {c.id for c in results}
        missing_ids = [id for id in id_list if id not in found_ids]
        raise HTTPException(status_code=404, detail=f"Company IDs not found: {', '.join(missing_ids)}")

    return results

@router.get("/{id}", response_model=Company)
def get_company(id: str):
    """
    Get details of a single company by its ID.
    """
    company = companies_db.get(id)
    if company is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Company with ID {id} not found",
        )
    return company
