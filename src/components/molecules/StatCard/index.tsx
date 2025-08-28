import React from 'react';
import Icon from '../../atoms/Icon';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="stat-card-molecule">
      <div className="stat-card-molecule__background-accent" style={{ backgroundColor: `${stat.color}10` }} />
      <div className="stat-card-molecule__content">
        <div className="stat-card-molecule__top-row">
          <div className="stat-card-molecule__icon-container" style={{ backgroundColor: `${stat.color}15` }}>
            <Icon name={stat.icon} size={24} color={stat.color} />
          </div>
          <div className="stat-card-molecule__change-indicator">
            <Icon name="trendingUp" size={14} />
            {stat.change}
          </div>
        </div>
        <div className="stat-card-molecule__value">{stat.value}</div>
        <div className="stat-card-molecule__label">{stat.label}</div>
      </div>
    </div>
  );
};

export default StatCard;
