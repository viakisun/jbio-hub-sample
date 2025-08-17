from pydantic import BaseModel, Field
from typing import Optional, Literal
from datetime import datetime

class News(BaseModel):
    id: int
    title: str
    summary: Optional[str] = None
    content: str
    category: Literal['news', 'notice']
    created_at: datetime
    sourceName: Optional[str] = None
    thumbnailUrl: Optional[str] = None

class Event(BaseModel):
    id: int
    title: str
    summary: Optional[str] = None
    thumbnailUrl: Optional[str] = None
    category: Literal['event'] = 'event'
    eventStartAt: datetime
    eventEndAt: datetime
    locationType: Literal['online', 'offline', 'hybrid']
    locationName: Optional[str] = None
    host: str
    registerDeadline: Optional[datetime] = None
    status: Literal['예정', '진행중', '마감']

class Tech(BaseModel):
    id: int
    title: str
    field: Optional[str] = None
    description: Optional[str] = None
    presenter: Optional[str] = None
    created_at: datetime
