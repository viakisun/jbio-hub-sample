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
  gap: 1rem;
  height: 100%;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
`;

const PartnerLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: contain;
  background-color: white;
  border: 1px solid #e5e7eb;
`;

const PartnerNames = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
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
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// --- COMPONENT ---

export interface CollaborationCardData {
  id: string;
  title: string;
  summary: string;
  partners: { name: string; logoUrl?: string }[];
  year: number;
  fields: string[];
}

interface CollaborationCardProps {
  collaboration: CollaborationCardData;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ collaboration }) => {
  return (
    <CardLink to={`/tech/collaboration/${collaboration.id}`}>
      <CardWrapper>
        <PartnerLogos>
          {collaboration.partners.map((p, i) => (
            <Logo key={i} src={p.logoUrl || 'https://via.placeholder.com/32'} alt={p.name} />
          ))}
          <PartnerNames>{collaboration.partners.map(p => p.name).join(' + ')}</PartnerNames>
        </PartnerLogos>
        <Title>{collaboration.title}</Title>
        <Summary>{collaboration.summary}</Summary>
        <Footer>
          <div>{collaboration.fields.map(f => `#${f}`).join(' ')}</div>
          <span>{collaboration.year}</span>
        </Footer>
      </CardWrapper>
    </CardLink>
  );
};

export default CollaborationCard;
