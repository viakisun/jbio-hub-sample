import React from 'react';
import styled from 'styled-components';
import Drawer from '../../molecules/Drawer';
import useOrganizationById from '../../../hooks/useOrganizationById';
import Badge from '../../atoms/Badge';

const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const OrgName = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const OrgMeta = styled.p`
  color: #6b7280;
  margin-top: 0;
`;

const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;


interface EntityDrawerProps {
  organizationId: string | null;
  onClose: () => void;
}

const EntityDrawer: React.FC<EntityDrawerProps> = ({ organizationId, onClose }) => {
  const { data: organization, loading, error } = useOrganizationById(organizationId);

  return (
    <Drawer isOpen={!!organizationId} onClose={onClose}>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러: {error.message}</p>}
      {organization && (
        <div>
          <DetailSection>
            <OrgName>{organization.name}</OrgName>
            <OrgMeta>{organization.type} &middot; {organization.region}</OrgMeta>
          </DetailSection>

          <DetailSection>
            <p>{organization.summary}</p>
          </DetailSection>

          <DetailSection>
            <SectionTitle>분야</SectionTitle>
            <FieldList>
              {organization.fields.map(field => (
                <Badge key={field}>{field}</Badge>
              ))}
            </FieldList>
          </DetailSection>

          <DetailSection>
            <SectionTitle>주요 서비스</SectionTitle>
            <ul>
              {organization.services.map(service => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </DetailSection>
        </div>
      )}
    </Drawer>
  );
};

export default EntityDrawer;
