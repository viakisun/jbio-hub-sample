import React from 'react';
import { Link } from 'react-router-dom';

export interface NoticeCardData {
  id: string;
  title: string;
  targetCriteria: string;
  periodEnd?: string;
  applyUrl: string;
}

interface NoticeCardProps {
  notice: NoticeCardData;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const dDay = notice.periodEnd ? Math.ceil((new Date(notice.periodEnd).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <Link to={notice.applyUrl} target="_blank" rel="noopener noreferrer" className="notice-card">
      <div className="notice-card__wrapper">
        <div className="notice-card__header">
          <h3 className="notice-card__title">{notice.title}</h3>
          {dDay !== null && dDay >= 0 && <span className="notice-card__days-left">D-{dDay}</span>}
        </div>
        <p className="notice-card__info">{notice.targetCriteria}</p>
      </div>
    </Link>
  );
};

export default NoticeCard;
