import React, { useState, useEffect } from 'react';
import Grid from '../../atoms/Grid';
import Icon from '../../atoms/Icon';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const StatsSectionSample2 = () => {
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
    <section className="stats-section-sample-2">
      <Grid cols={4} tabletCols={2} mobileCols={1}>
        {stats.map((stat, index) => (
          <div key={index} className="stats-section-sample-2__card" style={{ background: stat.color }}>
            <div className="stats-section-sample-2__header">
              <h3 className="stats-section-sample-2__label">{stat.label}</h3>
              <Icon name={stat.icon} size={24} color="white" />
            </div>
            <p className="stats-section-sample-2__value">{stat.value}</p>
            <p className="stats-section-sample-2__change">{stat.change} vs last month</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default StatsSectionSample2;
