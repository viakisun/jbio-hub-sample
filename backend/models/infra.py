from pydantic import BaseModel
from typing import Optional

class Infra(BaseModel):
    id: int
    name: str
    category: Optional[str] = None
    address: Optional[str] = None
    latitude: float
    longitude: float
    description: Optional[str] = None
