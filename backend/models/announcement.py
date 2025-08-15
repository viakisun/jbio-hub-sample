from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class FileLink(BaseModel):
    name: str
    url: str

class RelatedLink(BaseModel):
    title: str
    url: str

class Announcement(BaseModel):
    id: int
    title: str
    content: str
    author: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.now)
    files: List[FileLink] = []
    related_links: List[RelatedLink] = []

class AnnouncementCreate(BaseModel):
    title: str
    content: str
    author: Optional[str] = None
