import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

// --- STYLED COMPONENTS ---

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem; /* 3xl */
  font-weight: 700;
  color: #111827;
  margin: 0 0 2.5rem 0;
  text-align: center;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ServiceCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 180px;
  }
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// --- DATA MODELS ---

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

// --- COMPONENT ---

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/services`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Section>
      <SectionTitle>주요 서비스</SectionTitle>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {services.map((item, index) => (
          <ServiceCard key={index} gradient={item.gradient}>
            <IconContainer>
              <Icon name={item.icon} size={32} color="white" />
            </IconContainer>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </ServiceCard>
        ))}
      </Grid>
    </Section>
  );
};

export default ServicesSection;
