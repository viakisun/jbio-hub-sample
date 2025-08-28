import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link to={`/tech/collaboration/${collaboration.id}`} className="collaboration-card">
      <div className="collaboration-card__wrapper">
        <div className="collaboration-card__partners">
          {collaboration.partners.map((p, i) => (
            <img key={i} src={p.logoUrl || 'https://via.placeholder.com/32'} alt={p.name} className="collaboration-card__logo" />
          ))}
          <span className="collaboration-card__partner-names">{collaboration.partners.map(p => p.name).join(' + ')}</span>
        </div>
        <h3 className="collaboration-card__title">{collaboration.title}</h3>
        <p className="collaboration-card__summary">{collaboration.summary}</p>
        <div className="collaboration-card__footer">
          <div>{collaboration.fields.map(f => `#${f}`).join(' ')}</div>
          <span>{collaboration.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default CollaborationCard;
