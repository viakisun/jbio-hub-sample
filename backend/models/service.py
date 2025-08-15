from pydantic import BaseModel
from typing import Optional

class Service(BaseModel):
    title: str
    description: str
    icon: str
    gradient: str
