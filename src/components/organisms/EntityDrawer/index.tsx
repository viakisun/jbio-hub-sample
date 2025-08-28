import React from 'react';
import Drawer from '../../molecules/Drawer';
import useOrganizationById from '../../../hooks/useOrganizationById';
import Badge from '../../atoms/Badge';

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
        <div className="entity-drawer">
          <div className="entity-drawer__section">
            <h2 className="entity-drawer__org-name">{organization.name}</h2>
            <p className="entity-drawer__org-meta">{organization.type} &middot; {organization.region}</p>
          </div>

          <div className="entity-drawer__section">
            <p>{organization.summary}</p>
          </div>

          <div className="entity-drawer__section">
            <h4 className="entity-drawer__section-title">분야</h4>
            <div className="entity-drawer__field-list">
              {organization.fields.map(field => (
                <Badge key={field}>{field}</Badge>
              ))}
            </div>
          </div>

          <div className="entity-drawer__section">
            <h4 className="entity-drawer__section-title">주요 서비스</h4>
            <ul>
              {organization.services.map(service => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default EntityDrawer;
