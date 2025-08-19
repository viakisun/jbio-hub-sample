from pydantic import BaseModel
from typing import List, TypeVar, Generic


T = TypeVar('T')


class Pagination(BaseModel):
    page: int
    limit: int
    total: int
    totalPages: int
    hasNext: bool
    hasPrev: bool


class PaginatedResponse(Generic[T], BaseModel):
    data: List[T]
    pagination: Pagination
