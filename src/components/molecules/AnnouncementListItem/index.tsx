import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import { SupportProgram, SupportProgramStatus } from '../../../hooks/useSupportPrograms'; // Import the correct type

// --- DATA MODELS ---
interface AnnouncementListItemProps {
  program: SupportProgram; // Renamed for clarity
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

const StatusBadge = styled.span<{ status: 'active' | 'urgent' | 'upcoming' | 'closed' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: ${props => {
    if (props.status === 'urgent') return '#f59e0b';
    if (props.status === 'active') return '#10b981';
    if (props.status === 'upcoming') return '#3b82f6';
    return '#6b7280';
  }};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const DaysLeft = styled.div<{ days: number }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.days <= 7 && props.days >= 0 ? '#f59e0b' : '#4f46e5'};
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

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Organization = styled.span``;
const TargetCompany = styled.span`
  font-weight: 600;
  color: #111827;
`;


// --- HELPER FUNCTION ---
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


// --- COMPONENT ---

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({ program, style }) => {
  const daysLeft = calculateDaysLeft(program.endDate);
  const statusInfo = getStatusInfo(program);

  return (
    <ItemWrapper style={style}>
      <ItemHeader>
        <StatusBadge status={statusInfo.type}>
          {statusInfo.text}
        </StatusBadge>
        {statusInfo.type !== 'closed' && statusInfo.type !== 'upcoming' &&
            <DaysLeft days={daysLeft}>
                <Icon name="clock" size={14} />
                D-{daysLeft}
            </DaysLeft>
        }
      </ItemHeader>
      <ItemTitle>{program.title}</ItemTitle>
      <ItemFooter>
        <Organization>{program.organization}</Organization>
        <TargetCompany>대상: {program.targetCompany}</TargetCompany>
      </ItemFooter>
    </ItemWrapper>
  );
};

export default AnnouncementListItem;
