from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

from .support_program import Pagination


class Technology(BaseModel):
    id: str
    title: str
    summary: str
    organization: str
    patentNumber: Optional[str] = None
    applicationDate: Optional[date] = None
    category: str
    transferable: bool
    thumbnail: Optional[str] = None
    createdAt: datetime


class PaginatedTechnologyResponse(BaseModel):
    data: List[Technology]
    pagination: Pagination
