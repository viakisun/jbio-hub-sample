from fastapi import APIRouter, HTTPException, status, Query
from typing import List, Optional
import datetime

from ..models.article import Article
from ..models.common import PaginatedResponse
from ..db.mock_data import articles_db

# TODO: This helper should be moved to a common util file to avoid duplication.
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


router = APIRouter(
    prefix="/articles",
    tags=["articles"],
)

@router.get("", response_model=PaginatedResponse[Article])
def get_articles(
    page: int = 1,
    limit: int = 10,
    tag: Optional[str] = None,
    publishDate: Optional[str] = Query(None, description="Filter by publication month in YYYY-MM format"),
    sort: Optional[str] = Query("latest", enum=["latest", "popularity"]),
):
    """
    Get a list of articles with filtering, sorting, and pagination.
    """
    results = list(articles_db.values())

    if tag:
        results = [a for a in results if tag in a.tags]
    if publishDate:
        try:
            year, month = map(int, publishDate.split('-'))
            results = [a for a in results if a.publishDate.year == year and a.publishDate.month == month]
        except (ValueError, AttributeError):
            raise HTTPException(status_code=400, detail="Invalid publishDate format. Use YYYY-MM.")

    if sort == "latest":
        results.sort(key=lambda a: a.publishDate, reverse=True)
    elif sort == "popularity":
        # Popularity is not a real field in the mock data, so we can't sort by it.
        # In a real application, this would be based on view counts or similar metrics.
        pass

    return paginate(results, page, limit)


@router.get("/{id}", response_model=Article)
def get_article(id: str):
    """
    Get details of a single article by its ID.
    """
    article = articles_db.get(id)
    if article is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Article with ID {id} not found",
        )
    return article
