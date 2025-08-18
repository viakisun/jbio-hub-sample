from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from datetime import date, datetime
from enum import Enum


class SupportProgramStatus(str, Enum):
    UPCOMING = "upcoming"
    ONGOING = "ongoing"
    CLOSED = "closed"


class SupportProgram(BaseModel):
    id: str
    title: str
    organization: str
    description: str
    startDate: date
    endDate: date
    status: SupportProgramStatus
    category: str
    supportType: List[str]
    targetCompany: str
    externalUrl: Optional[str] = None  # Using str for now, can be HttpUrl for validation
    createdAt: datetime


class Pagination(BaseModel):
    page: int
    limit: int
    total: int
    totalPages: int
    hasNext: bool
    hasPrev: bool


class PaginatedSupportProgramResponse(BaseModel):
    data: List[SupportProgram]
    pagination: Pagination
