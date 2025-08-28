import React from 'react';
import Button from '../../atoms/Button';

export interface VacancyCardData {
  id: string;
  unitCode: string;
  areaM2: number;
  type: 'office' | 'lab' | 'mixed';
  rentPerMonth: number;
  deposit: number;
  availabilityStatus: 'available' | 'reserved' | 'occupied';
}

interface VacancyCardProps {
  vacancy: VacancyCardData;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const areaPy = (vacancy.areaM2 / 3.305785).toFixed(1);

  return (
    <div className="vacancy-card">
      <div className="vacancy-card__header">
        <h3 className="vacancy-card__title">{vacancy.unitCode}</h3>
        <span className={`vacancy-card__status-badge vacancy-card__status-badge--${vacancy.availabilityStatus}`}>{vacancy.availabilityStatus}</span>
      </div>
      <div className="vacancy-card__info-grid">
        <div className="vacancy-card__info-item">
          <div className="vacancy-card__info-label">면적</div>
          <div className="vacancy-card__info-value">{vacancy.areaM2}㎡ ({areaPy}평)</div>
        </div>
        <div className="vacancy-card__info-item">
          <div className="vacancy-card__info-label">유형</div>
          <div className="vacancy-card__info-value">{vacancy.type}</div>
        </div>
        <div className="vacancy-card__info-item">
          <div className="vacancy-card__info-label">월 임대료</div>
          <div className="vacancy-card__info-value">{vacancy.rentPerMonth.toLocaleString()}원</div>
        </div>
        <div className="vacancy-card__info-item">
          <div className="vacancy-card__info-label">보증금</div>
          <div className="vacancy-card__info-value">{vacancy.deposit.toLocaleString()}원</div>
        </div>
      </div>
      <Button className="vacancy-card__apply-button" fullWidth>신청/문의</Button>
    </div>
  );
};

export default VacancyCard;
