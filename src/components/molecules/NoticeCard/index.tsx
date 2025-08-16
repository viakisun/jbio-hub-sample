import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const CardWrapper = styled.div`
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 12px;
  padding: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e7eb; /* gray-200 */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const DaysLeftBadge = styled.span`
  background-color: #fee2e2; /* red-100 */
  color: #991b1b; /* red-800 */
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`;

// --- COMPONENT ---

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
    <CardLink to={notice.applyUrl} target="_blank" rel="noopener noreferrer">
      <CardWrapper>
        <Header>
          <Title>{notice.title}</Title>
          {dDay !== null && dDay >= 0 && <DaysLeftBadge>D-{dDay}</DaysLeftBadge>}
        </Header>
        <Info>{notice.targetCriteria}</Info>
      </CardWrapper>
    </CardLink>
  );
};

export default NoticeCard;
