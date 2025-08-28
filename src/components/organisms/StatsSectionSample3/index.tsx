import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const StatsSectionSample3 = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stats`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section-sample-3">
      <h2 className="stats-section-sample-3__title">주요 현황</h2>
      <div className="stats-section-sample-3__wrapper">
        {stats.map((stat, index) => (
          <div key={index} className="stats-section-sample-3__item">
            <p className="stats-section-sample-3__label">{stat.label}</p>
            <p className="stats-section-sample-3__value">{stat.value}</p>
            <div className={`stats-section-sample-3__change ${stat.change.startsWith('+') ? 'stats-section-sample-3__change--positive' : 'stats-section-sample-3__change--negative'}`}>
              <Icon name={stat.change.startsWith('+') ? "arrowUp" : "arrowDown"} size={14} />
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSectionSample3;
