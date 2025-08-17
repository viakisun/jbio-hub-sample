import React, { useState, useEffect } from 'react';
import StatCard from '../../molecules/StatCard';
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
        // For the minimalist design, we can simplify the data or presentation
        const simplifiedData = data.map((stat: ApiStat) => ({
          ...stat,
          color: '#495057', // Use a neutral color
        }));
        setStats(simplifiedData);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section style={{ marginBottom: '4rem', padding: '2rem 0' }}>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            padding: '1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#fff',
          }}>
            <h3 style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '0.5rem', fontWeight: 'normal' }}>{stat.label}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#212529', margin: '0' }}>{stat.value}</p>
            <p style={{ fontSize: '0.9rem', color: stat.change.startsWith('+') ? '#28a745' : '#dc3545', margin: '0.25rem 0 0 0' }}>{stat.change}</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default StatsSectionSample1;
