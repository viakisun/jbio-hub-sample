import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

interface Announcement {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  budget: string;
  status: 'active' | 'urgent';
  daysLeft: number;
}

interface AnnouncementListItemProps {
  announcement: Announcement;
  style?: React.CSSProperties;
}

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({ announcement, style }) => {
  return (
    <div
      style={{
        padding: DESIGN_SYSTEM.spacing[5],
        borderRadius: '12px',
        border: `1px solid ${DESIGN_SYSTEM.colors.gray[200]}`,
        cursor: 'pointer',
        ...style
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: DESIGN_SYSTEM.spacing[3]
      } as React.CSSProperties}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
          backgroundColor: announcement.status === 'active' ? DESIGN_SYSTEM.colors.success[500] : DESIGN_SYSTEM.colors.orange[500],
          color: 'white',
          borderRadius: '20px',
          fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
        } as React.CSSProperties}>
          {announcement.status === 'active' ? '진행중' : '마감임박'}
        </span>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: DESIGN_SYSTEM.spacing[1],
          color: announcement.daysLeft <= 7 ? DESIGN_SYSTEM.colors.orange[500] : DESIGN_SYSTEM.colors.primary[600],
          fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold
        } as React.CSSProperties}>
          <Icon name="clock" size={14} />
          D-{announcement.daysLeft}
        </div>
      </div>

      <h4 style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
        fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
        color: DESIGN_SYSTEM.colors.gray[900],
        margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
        lineHeight: '1.4'
      } as React.CSSProperties}>
        {announcement.title}
      </h4>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
        color: DESIGN_SYSTEM.colors.gray[600]
      } as React.CSSProperties}>
        <span>{announcement.organization}</span>
        <span style={{
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
          color: DESIGN_SYSTEM.colors.gray[900]
        } as React.CSSProperties}>
          {announcement.budget}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
