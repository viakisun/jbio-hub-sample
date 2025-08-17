from fastapi import APIRouter
from typing import List

from ..models.infra import Infra
from ..db.mock_data import infra_db

router = APIRouter(
    prefix="/api/infra",
    tags=["Infrastructure"],
)

@router.get("/map", response_model=List[Infra])
def get_infra_map():
    """
    UI-03-01: Get a list of all infrastructure for the map.
    """
    return infra_db
