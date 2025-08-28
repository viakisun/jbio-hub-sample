import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../atoms/Badge';

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
    <Link to={`/tech/outcomes/${outcome.id}`} className="outcome-card">
      <div className="outcome-card__wrapper">
        <h3 className="outcome-card__title">{outcome.title}</h3>
        <p className="outcome-card__summary">{outcome.summary}</p>
        <div className="outcome-card__tags">
            {outcome.fields.map(field => <Badge key={field}>{field}</Badge>)}
        </div>
        <div className="outcome-card__footer">
          <span>{outcome.orgName}</span>
          <span>{new Date(outcome.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default OutcomeCard;
