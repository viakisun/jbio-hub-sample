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

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Summary = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

// --- COMPONENT ---

export interface OutcomeCardData {
  id: string;
  title: string;
  summary: string;
  orgName: string;
  fields: string[];
  publishedAt: string;
  attachments?: { type: string }[];
}

interface OutcomeCardProps {
  outcome: OutcomeCardData;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ outcome }) => {
  return (
    <CardLink to={`/tech/outcomes/${outcome.id}`}>
      <CardWrapper>
        <Title>{outcome.title}</Title>
        <Summary>{outcome.summary}</Summary>
        <TagContainer>
            {outcome.fields.map(field => <Badge key={field}>{field}</Badge>)}
        </TagContainer>
        <Footer>
          <span>{outcome.orgName}</span>
          <span>{new Date(outcome.publishedAt).toLocaleDateString()}</span>
        </Footer>
      </CardWrapper>
    </CardLink>
  );
};

export default OutcomeCard;
