import React, { useState, useEffect } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import StatCard from '../../molecules/StatCard';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const StatsSection = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/stats`);
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
    <section style={{
      marginBottom: DESIGN_SYSTEM.spacing[16]
    } as React.CSSProperties}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: DESIGN_SYSTEM.spacing[6]
      } as React.CSSProperties}>
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
