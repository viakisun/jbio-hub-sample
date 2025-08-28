import React from 'react';

interface KPICardProps {
  label: string;
  value: string | number;
}

const KPICard: React.FC<KPICardProps> = ({ label, value }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-card__value">{value}</div>
      <div className="kpi-card__label">{label}</div>
    </div>
  );
};

export default KPICard;
