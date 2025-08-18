from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime
from enum import Enum


class EducationProgramStatus(str, Enum):
    UPCOMING = "upcoming"
    ONGOING = "ongoing"
    CLOSED = "closed"


class EducationProgram(BaseModel):
    id: str
    title: str
    organization: str
    category: str
    startDate: date
    endDate: date
    location: str
    cost: float
    status: EducationProgramStatus
    targetAudience: str
    applicationUrl: Optional[str] = None


class EducationContentType(str, Enum):
    VIDEO = "video"
    PDF = "pdf"
    DOCUMENT = "document"


class EducationContent(BaseModel):
    id: str
    title: str
    description: str
    category: str
    type: EducationContentType
    url: str
    thumbnail: Optional[str] = None
    viewCount: int
    createdAt: datetime
