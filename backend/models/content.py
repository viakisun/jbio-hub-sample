from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class News(BaseModel):
    id: int
    title: str
    content: str
    category: str  # 'news' or 'notice'
    created_at: datetime

class Tech(BaseModel):
    id: int
    title: str
    field: Optional[str] = None
    description: Optional[str] = None
    presenter: Optional[str] = None
    created_at: datetime
