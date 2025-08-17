import React, { useState, useEffect } from 'react';
import Grid from '../../atoms/Grid';
import Icon from '../../atoms/Icon';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string; // Will be used for glow effect
}

const StatsSectionSample4 = () => {
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

  const cardStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '2rem',
    textAlign: 'center',
    color: 'white',
    transition: 'background 0.3s',
  };

  return (
    <section style={{ marginBottom: '4rem' }}>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {stats.map((stat, index) => (
          <div key={index} style={cardStyle}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
              <Icon name={stat.icon} size={18} color="#ffffff" />
              <h3 style={{ fontSize: '1rem', fontWeight: '500', margin: 0, opacity: 0.8 }}>{stat.label}</h3>
            </div>
            <p style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: '0 0 0.5rem 0',
              textShadow: `0 0 10px ${stat.color}, 0 0 20px ${stat.color}`,
            }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.7 }}>
              {stat.change} vs last month
            </p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default StatsSectionSample4;
