from pydantic import BaseModel
from typing import Optional, List

from .support_program import Pagination  # Re-use existing Pagination model


class SearchResult(BaseModel):
    id: str
    type: str
    title: str
    description: str
    url: str
    relevanceScore: float


class PaginatedSearchResponse(BaseModel):
    results: List[SearchResult]
    pagination: Pagination


class SitemapNode(BaseModel):
    title: str
    url: str
    children: Optional[List['SitemapNode']] = None


# This is needed for Pydantic to handle the forward reference in the recursive model
SitemapNode.model_rebuild()
