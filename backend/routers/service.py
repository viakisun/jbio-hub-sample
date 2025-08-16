from fastapi import APIRouter
from typing import List

from ..models.service import Service
from ..db.mock_data import services_db

router = APIRouter(
    prefix="/api"
)

@router.get("/services", response_model=List[Service], tags=["Services"])
def get_services_list():
    """
    Get a list of all services.
    """
    return services_db
