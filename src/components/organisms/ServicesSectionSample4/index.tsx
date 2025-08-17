import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const ServicesSectionSample4 = () => {
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

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  const glowIconStyle: React.CSSProperties = {
    filter: 'drop-shadow(0 0 8px rgba(100, 200, 255, 0.7))',
  };

  return (
    <section style={{ marginBottom: '4rem' }}>
       <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        margin: '0 0 3rem 0',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
      }}>
        SERVICES
      </h2>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {services.map((item, index) => (
          <div key={index} style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
          >
            <div style={{...glowIconStyle, marginBottom: '1.5rem'}}>
              <Icon name={item.icon} size={40} color="#90d8ff" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              margin: '0 0 0.75rem 0',
            }}>{item.title}</h3>
            <p style={{
              fontSize: '1rem',
              margin: 0,
              lineHeight: 1.6,
              opacity: 0.8,
            }}>{item.description}</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesSectionSample4;
