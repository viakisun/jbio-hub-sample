import React from 'react';
import Icon from '../../atoms/Icon';
import { SupportProgram } from '../../../hooks/useSupportPrograms';

interface AnnouncementListItemProps {
  program: SupportProgram;
  style?: React.CSSProperties;
}

const calculateDaysLeft = (endDateStr: string): number => {
    const end = new Date(endDateStr);
    const now = new Date();
    end.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

const getStatusInfo = (program: SupportProgram): { text: string, type: 'active' | 'urgent' | 'upcoming' | 'closed' } => {
    const daysLeft = calculateDaysLeft(program.endDate);
    if (program.status === 'closed' || daysLeft < 0) {
        return { text: '마감', type: 'closed' };
    }
    if (program.status === 'upcoming') {
        return { text: '예정', type: 'upcoming' };
    }
    if (program.status === 'ongoing') {
        if (daysLeft <= 7) {
            return { text: '마감임박', type: 'urgent' };
        }
        return { text: '진행중', type: 'active' };
    }
    return { text: '정보없음', type: 'closed' };
};

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({ program, style }) => {
  const daysLeft = calculateDaysLeft(program.endDate);
  const statusInfo = getStatusInfo(program);

  const daysLeftClassName = daysLeft <= 7 && daysLeft >= 0 ? 'announcement-list-item__days-left--urgent' : 'announcement-list-item__days-left--normal';

  return (
    <div className="announcement-list-item" style={style}>
      <div className="announcement-list-item__header">
        <span className={`announcement-list-item__status-badge announcement-list-item__status-badge--${statusInfo.type}`}>
          {statusInfo.text}
        </span>
        {statusInfo.type !== 'closed' && statusInfo.type !== 'upcoming' &&
            <div className={`announcement-list-item__days-left ${daysLeftClassName}`}>
                <Icon name="clock" size={14} />
                D-{daysLeft}
            </div>
        }
      </div>
      <h4 className="announcement-list-item__title">{program.title}</h4>
      <div className="announcement-list-item__footer">
        <span className="announcement-list-item__organization">{program.organization}</span>
        <span className="announcement-list-item__target-company">대상: {program.targetCompany}</span>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
