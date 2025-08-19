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


class PaginatedResponse(BaseModel, Generic[T]):
    data: List[T]
    pagination: Pagination
