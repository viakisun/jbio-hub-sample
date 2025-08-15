from pydantic import BaseModel, EmailStr
from typing import Optional

class Company(BaseModel):
    id: int
    name: str
    type: str  # '기업' or '기관'
    description: Optional[str] = None
    address: Optional[str] = None
    contact_person: Optional[str] = None
    contact_email: Optional[EmailStr] = None
    contact_phone: Optional[str] = None
