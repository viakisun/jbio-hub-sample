from pydantic import BaseModel
from typing import Optional


class Location(BaseModel):
    latitude: float
    longitude: float


class IncubationCenter(BaseModel):
    id: str
    name: str
    totalRooms: int
    vacantRooms: int
    occupancyRate: float
    address: str
    contact: Optional[str] = None
    manager: Optional[str] = None
    location: Location
