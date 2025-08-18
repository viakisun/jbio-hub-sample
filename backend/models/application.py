from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from enum import Enum


class ApplicationStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    COMPLETED = "completed"


class Application(BaseModel):
    id: str
    programId: str
    programTitle: str
    status: ApplicationStatus
    appliedAt: datetime
    reviewedAt: Optional[datetime] = None
    reviewComment: Optional[str] = None
