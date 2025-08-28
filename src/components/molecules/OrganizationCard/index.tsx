import React from 'react';
import { Organization } from '../../../hooks/useOrganizations';
import Badge from '../../atoms/Badge';

interface OrganizationCardProps {
  organization: Organization;
  onClick: () => void;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization, onClick }) => {
  return (
    <div className="organization-card" onClick={onClick}>
      <div className="organization-card__header">
        <h3 className="organization-card__name">{organization.name}</h3>
        <p className="organization-card__meta">{organization.type} &middot; {organization.region}</p>
      </div>
      <p className="organization-card__summary">{organization.summary}</p>
      <div className="organization-card__fields">
        {organization.fields.map(field => (
          <Badge key={field}>{field}</Badge>
        ))}
      </div>
      {/* TODO: Add CTA buttons (details, compare, etc) */}
    </div>
  );
};

export default OrganizationCard;
