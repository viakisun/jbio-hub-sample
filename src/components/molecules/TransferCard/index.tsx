import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from '../../atoms/Badge';

// --- STYLED COMPONENTS ---

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
`;

const Summary = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
`;

const Footer = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// --- COMPONENT ---

export interface TransferCardData {
  id: string;
  title: string;
  summary: string;
  ownerOrg: string;
  status: 'open' | 'closing-soon' | 'closed';
  deadline?: string;
}

interface TransferCardProps {
  transfer: TransferCardData;
}

const getStatusBadge = (status: TransferCardData['status']) => {
    switch(status) {
        case 'open':
            return <Badge variant="success">모집중</Badge>;
        case 'closing-soon':
            return <Badge variant="warning">마감임박</Badge>;
        case 'closed':
            return <Badge variant="secondary">마감</Badge>;
        default:
            return null;
    }
}

const TransferCard: React.FC<TransferCardProps> = ({ transfer }) => {
  const dDay = transfer.deadline ? Math.ceil((new Date(transfer.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <CardLink to={`/tech/transfer/${transfer.id}`}>
      <CardWrapper>
        <Header>
            <Title>{transfer.title}</Title>
            {getStatusBadge(transfer.status)}
        </Header>
        <Summary>{transfer.summary}</Summary>
        <Footer>
          <span>{transfer.ownerOrg}</span>
          {dDay !== null && dDay >= 0 && <strong>D-{dDay}</strong>}
        </Footer>
      </CardWrapper>
    </CardLink>
  );
};

export default TransferCard;
