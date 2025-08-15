from pydantic import BaseModel
from typing import Optional

class Stat(BaseModel):
    label: str
    value: str
    change: str
    icon: str
    color: str
