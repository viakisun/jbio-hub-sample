import React, { useState, useEffect } from 'react';
import Grid from '../../atoms/Grid';
import Icon from '../../atoms/Icon'; // Assuming Icon component can be used

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string; // The API provides a color, which we can use
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
    <section style={{ marginBottom: '4rem' }}>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: stat.color,
            color: 'white',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'left',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, opacity: 0.9 }}>{stat.label}</h3>
              <Icon name={stat.icon} size={24} color="white" />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{stat.value}</p>
            <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.9 }}>{stat.change} vs last month</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default StatsSectionSample2;
