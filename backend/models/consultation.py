from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class Consultation(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: Optional[str] = None
    organization: Optional[str] = None
    subject: str
    body: str
    status: str = "submitted"
    created_at: datetime

class ConsultationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    organization: Optional[str] = None
    subject: str
    body: str
