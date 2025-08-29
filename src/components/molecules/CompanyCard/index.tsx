import React from 'react';
import Badge from '../../atoms/Badge';
import { Company } from '../../../types/api';

interface CompanyCardProps {
  company: Company;
  onClick?: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  return (
    <div className="company-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div className="company-card__header">
        <img src={company.logoUrl} alt={`${company.name} logo`} className="company-card__logo" />
        <div className="company-card__name-meta">
          <h3 className="company-card__name">{company.name}</h3>
          <p className="company-card__meta">
            {company.industry} · {company.foundedYear}
          </p>
        </div>
      </div>
      <p className="company-card__description">{company.description}</p>
      <div className="company-card__tags">
        <Badge>{company.sizeCategory}</Badge>
        {(company.products || []).slice(0, 2).map(product => (
          <Badge key={product} variant="secondary">{product}</Badge>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
