from pydantic import BaseModel, HttpUrl
from typing import List, Optional
import datetime


class Article(BaseModel):
    id: str
    title: str
    author: str
    publishDate: datetime.date
    tags: List[str] = []
    contentHTML: str
    images: List[HttpUrl] = []
    relatedCompanies: List[str] = []
