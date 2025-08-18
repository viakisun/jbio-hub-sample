from fastapi import APIRouter, Query
from typing import List, Optional
import math

from ..models.search import SearchResult, PaginatedSearchResponse, SitemapNode
from ..models.support_program import Pagination
from ..db.mock_data import (
    support_programs_db,
    incubation_centers_db,
    technologies_db,
    companies_db,
    announcements_db,
    sitemap_db,
)

router = APIRouter(
    tags=["Search"]
)


@router.get("/search", response_model=PaginatedSearchResponse)
def search_all(
    q: str = Query(..., description="Search query"),
    type: Optional[str] = Query("all", enum=["all", "programs", "centers", "technologies", "companies", "notices"]),
    sort: Optional[str] = Query("relevance", enum=["relevance", "date", "popularity"]),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1),
):
    """
    Perform a unified search across different data types.
    """
    all_results: List[SearchResult] = []
    keyword = q.lower()

    # Search logic for each type
    if type == "all" or type == "programs":
        for item in support_programs_db:
            if keyword in item.title.lower() or keyword in item.description.lower():
                all_results.append(SearchResult(
                    id=item.id, type="program", title=item.title,
                    description=item.description, url=f"/support-programs/{item.id}", relevanceScore=0.9
                ))

    if type == "all" or type == "centers":
        for item in incubation_centers_db:
            if keyword in item.name.lower() or keyword in item.address.lower():
                all_results.append(SearchResult(
                    id=item.id, type="center", title=item.name,
                    description=item.address, url=f"/incubation-centers/{item.id}", relevanceScore=0.8
                ))

    if type == "all" or type == "technologies":
        for item in technologies_db:
            if keyword in item.title.lower() or keyword in item.summary.lower():
                all_results.append(SearchResult(
                    id=item.id, type="technology", title=item.title,
                    description=item.summary, url=f"/tech-summary/detail/{item.id}", relevanceScore=0.85
                ))

    if type == "all" or type == "companies":
        for item in companies_db:
            if keyword in item.name.lower() or keyword in item.description.lower():
                all_results.append(SearchResult(
                    id=item.id, type="company", title=item.name,
                    description=item.description, url=f"/companies/{item.id}", relevanceScore=0.7
                ))

    if type == "all" or type == "notices":
        for item in announcements_db:
            if keyword in item.title.lower() or keyword in item.content.lower():
                all_results.append(SearchResult(
                    id=str(item.id), type="notice", title=item.title,
                    description=item.content, url=f"/notices/{item.id}", relevanceScore=0.75
                ))

    # Mock sorting
    if sort == "relevance":
        all_results.sort(key=lambda x: x.relevanceScore, reverse=True)
    # In a real app, 'date' and 'popularity' would require actual data fields and logic

    # Pagination
    total_items = len(all_results)
    start_index = (page - 1) * limit
    end_index = start_index + limit
    paginated_data = all_results[start_index:end_index]

    total_pages = math.ceil(total_items / limit) if limit > 0 else 0

    pagination_meta = Pagination(
        page=page,
        limit=limit,
        total=total_items,
        totalPages=total_pages,
        hasNext=page < total_pages,
        hasPrev=page > 1 and total_pages > 0,
    )

    return PaginatedSearchResponse(results=paginated_data, pagination=pagination_meta)


@router.get("/sitemap", response_model=List[SitemapNode])
def get_sitemap():
    """
    Get the sitemap structure.
    """
    return sitemap_db
