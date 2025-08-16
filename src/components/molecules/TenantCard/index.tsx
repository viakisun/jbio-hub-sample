import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #f3f4f6;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const Info = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const Tag = styled.span`
  background-color: #eef2ff;
  color: #4338ca;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

// --- COMPONENT ---

export interface TenantCardData {
  id: string;
  name: string;
  logoUrl?: string;
  centerName: string;
  fieldTags: string[];
}

interface TenantCardProps {
  tenant: TenantCardData;
}

const TenantCard: React.FC<TenantCardProps> = ({ tenant }) => {
  return (
    <CardLink to={`/incubation/tenants/${tenant.id}`}>
      <CardWrapper>
        <Header>
          <Logo src={tenant.logoUrl || 'https://via.placeholder.com/48'} alt={`${tenant.name} Logo`} />
          <div>
            <Title>{tenant.name}</Title>
            <Info>{tenant.centerName}</Info>
          </div>
        </Header>
        <TagContainer>
          {tenant.fieldTags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </TagContainer>
      </CardWrapper>
    </CardLink>
  );
};

export default TenantCard;
