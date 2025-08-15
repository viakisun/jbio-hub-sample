import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

// --- DATA MODELS ---
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

// --- STYLED COMPONENTS ---

const ItemWrapper = styled.div`
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const StatusBadge = styled.span<{ status: 'active' | 'urgent' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.status === 'active' ? '#10b981' : '#f59e0b'};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const DaysLeft = styled.div<{ days: number }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.days <= 7 ? '#f59e0b' : '#4f46e5'};
  font-size: 0.875rem;
  font-weight: 700;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Organization = styled.span``;
const Budget = styled.span`
  font-weight: 600;
  color: #111827;
`;


// --- COMPONENT ---

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({ announcement, style }) => {
  return (
    <ItemWrapper style={style}>
      <ItemHeader>
        <StatusBadge status={announcement.status}>
          {announcement.status === 'active' ? '진행중' : '마감임박'}
        </StatusBadge>
        <DaysLeft days={announcement.daysLeft}>
          <Icon name="clock" size={14} />
          D-{announcement.daysLeft}
        </DaysLeft>
      </ItemHeader>
      <ItemTitle>{announcement.title}</ItemTitle>
      <ItemFooter>
        <Organization>{announcement.organization}</Organization>
        <Budget>{announcement.budget}</Budget>
      </ItemFooter>
    </ItemWrapper>
  );
};

export default AnnouncementListItem;
