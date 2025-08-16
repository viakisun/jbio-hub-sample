import React from 'react';
import styled from 'styled-components';
import { Organization } from '../../../hooks/useOrganizations';
import Badge from '../../atoms/Badge';

const CardWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const OrgName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const OrgMeta = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
`;

const Summary = styled.p`
  color: #4b5563;
  font-size: 1rem;
  flex-grow: 1;
  margin: 0 0 1.5rem;
`;

const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface OrganizationCardProps {
  organization: Organization;
  onClick: () => void;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization, onClick }) => {
  return (
    <CardWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardHeader>
        <OrgName>{organization.name}</OrgName>
        <OrgMeta>{organization.type} &middot; {organization.region}</OrgMeta>
      </CardHeader>
      <Summary>{organization.summary}</Summary>
      <FieldList>
        {organization.fields.map(field => (
          <Badge key={field}>{field}</Badge>
        ))}
      </FieldList>
      {/* TODO: Add CTA buttons (details, compare, etc) */}
    </CardWrapper>
  );
};

export default OrganizationCard;
