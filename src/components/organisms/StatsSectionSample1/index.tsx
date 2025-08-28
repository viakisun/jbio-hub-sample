import React, { useState, useEffect } from 'react';
import Grid from '../../atoms/Grid';
import { ApiStat } from '../../../types/api';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const StatsSectionSample1 = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stats`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiStat[] = await response.json();
        const simplifiedData = data.map((stat: ApiStat) => ({
          ...stat,
          color: '#495057',
        }));
        setStats(simplifiedData);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section-sample-1">
      <Grid cols={4} tabletCols={2} mobileCols={1}>
        {stats.map((stat, index) => (
          <div key={index} className="stats-section-sample-1__card">
            <h3 className="stats-section-sample-1__label">{stat.label}</h3>
            <p className="stats-section-sample-1__value">{stat.value}</p>
            <p className={`stats-section-sample-1__change ${stat.change.startsWith('+') ? 'stats-section-sample-1__change--positive' : 'stats-section-sample-1__change--negative'}`}>{stat.change}</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default StatsSectionSample1;
