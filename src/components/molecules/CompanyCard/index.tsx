import React from 'react';
import styled from 'styled-components';
import { Company } from '../../../types/api';
import Badge from '../../atoms/Badge';

const CardWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  border: 1px solid #f3f4f6;
`;

const NameAndMeta = styled.div``;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #111827;
`;

const CompanyMeta = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  flex-grow: 1;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface CompanyCardProps {
  company: Company;
  onClick: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  return (
    <CardWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardHeader>
        <Logo
          src={company.logoUrl || `https://ui-avatars.com/api/?name=${company.name}&background=random`}
          alt={`${company.name} logo`}
        />
        <NameAndMeta>
          <CompanyName>{company.name}</CompanyName>
          <CompanyMeta>{company.industry} &middot; {company.region}</CompanyMeta>
        </NameAndMeta>
      </CardHeader>
      <Description>{company.description}</Description>
      <TagList>
        <Badge>{company.sizeCategory}</Badge>
        {company.products.slice(0, 2).map(product => (
          <Badge key={product} $variant="secondary">{product}</Badge>
        ))}
      </TagList>
    </CardWrapper>
  );
};

export default CompanyCard;
