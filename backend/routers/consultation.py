from fastapi import APIRouter, status
from typing import List
from datetime import datetime

from ..models.consultation import Consultation, ConsultationCreate
from ..db.mock_data import consultations_db

router = APIRouter(
    prefix="/api/consultations",
    tags=["Consultations"],
)

@router.post("", response_model=Consultation, status_code=status.HTTP_201_CREATED)
def submit_consultation(consultation: ConsultationCreate):
    """
    UI-06-01: Submit a new consultation request.
    """
    new_id = len(consultations_db) + 1
    new_consultation = Consultation(
        id=new_id,
        created_at=datetime.now(),
        **consultation.model_dump()
    )
    consultations_db.append(new_consultation)
    return new_consultation

@router.get("", response_model=List[Consultation])
def get_all_consultations():
    """
    Helper endpoint to view all submitted consultations (for testing).
    """
    return consultations_db
