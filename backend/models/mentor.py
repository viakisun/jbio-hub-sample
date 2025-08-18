from pydantic import BaseModel, EmailStr
from typing import Optional, List


class Mentor(BaseModel):
    id: str
    name: str
    organization: str
    field: List[str]
    expertise: str
    experience: str
    available: bool
    contactEmail: Optional[EmailStr] = None
    externalUrl: Optional[str] = None
