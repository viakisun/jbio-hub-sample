from fastapi import APIRouter, HTTPException, status
from typing import List

from ..models.content import News, Tech
from ..db.mock_data import news_db, techs_db

router = APIRouter()

from typing import Optional

@router.get("/news", response_model=List[News], tags=["Content"])
def get_news_list(limit: Optional[int] = None):
    """
    UI-04-01: Get a list of all news and notices.
    """
    if limit:
        return news_db[:limit]
    return news_db

@router.get("/news/{news_id}", response_model=News, tags=["Content"])
def get_news_item(news_id: int):
    """
    UI-04-02: Get a single news or notice item by ID.
    """
    item = next((n for n in news_db if n.id == news_id), None)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    return item

@router.get("/techs", response_model=List[Tech], tags=["Content"])
def get_techs_list():
    """
    UI-05-01: Get a list of all technologies and achievements.
    """
    return techs_db

@router.get("/techs/{tech_id}", response_model=Tech, tags=["Content"])
def get_tech_item(tech_id: int):
    """
    UI-05-02: Get a single technology or achievement by ID.
    """
    item = next((t for t in techs_db if t.id == tech_id), None)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    return item
