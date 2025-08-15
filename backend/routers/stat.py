from fastapi import APIRouter
from typing import List

from ..models.stat import Stat
from ..db.mock_data import stats_db

router = APIRouter()

@router.get("/stats", response_model=List[Stat], tags=["Stats"])
def get_stats_list():
    """
    Get a list of all stats.
    """
    return stats_db
