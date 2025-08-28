import React from 'react';
import { Link } from 'react-router-dom';
import { IncubationCenter } from '../../../hooks/useIncubationCenters';

interface IncubationCenterCardProps {
  center: IncubationCenter;
}

const IncubationCenterCard: React.FC<IncubationCenterCardProps> = ({ center }) => {
  return (
    <Link to={`/incubation-centers/${center.id}`} className="incubation-center-card">
      <div className="incubation-center-card__wrapper">
        <div className="incubation-center-card__header">
          <img src={`https://picsum.photos/seed/${center.id}/48`} alt={`${center.name} Logo`} className="incubation-center-card__logo" />
          <div>
            <h3 className="incubation-center-card__title">{center.name}</h3>
            <p className="incubation-center-card__info">{center.address}</p>
          </div>
        </div>
        <div className="incubation-center-card__tags">
          <span className="incubation-center-card__tag">공실: {center.vacantRooms}개</span>
          <span className="incubation-center-card__tag">입주율: {Math.round(center.occupancyRate * 100)}%</span>
        </div>
      </div>
    </Link>
  );
};

export default IncubationCenterCard;
