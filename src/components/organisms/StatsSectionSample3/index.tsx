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

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '3rem 2rem',
    borderRadius: '16px',
    marginBottom: '4rem',
    border: '1px solid #dee2e6'
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: '2.5rem'
  };

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '0 1rem',
    borderRight: '1px solid #dee2e6',
  };

  const lastStatItemStyle = {...statItemStyle, borderRight: 'none'};

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>주요 현황</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {stats.map((stat, index) => (
          <div key={index} style={index === stats.length - 1 ? lastStatItemStyle : statItemStyle}>
            <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{stat.label}</p>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1d3557', margin: '0 0 0.5rem 0' }}>{stat.value}</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem', color: stat.change.startsWith('+') ? '#2a9d8f' : '#e76f51' }}>
              <Icon name={stat.change.startsWith('+') ? "arrowUp" : "arrowDown"} size={14} />
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSectionSample3;
