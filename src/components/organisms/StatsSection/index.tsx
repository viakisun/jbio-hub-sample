import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StatCard from '../../molecules/StatCard';
import Grid from '../../atoms/Grid';

// --- STYLED COMPONENTS ---

const Section = styled.section`
  margin-bottom: 4rem;
`;

// --- DATA MODELS ---

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

// --- COMPONENT ---

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
    <Section>
      <Grid cols={4} tabletCols={2} mobileCols={2}>
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </Grid>
    </Section>
  );
};

export default StatsSection;
