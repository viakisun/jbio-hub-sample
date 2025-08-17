import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const ServicesSectionSample2 = () => {
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
    <section style={{ marginBottom: '4rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#111827',
        margin: '0 0 3rem 0',
        textAlign: 'center',
        letterSpacing: '-0.025em',
      }}>
        Our Services
      </h2>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
        {services.map((item, index) => (
          <div key={index} style={{
            background: item.gradient,
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            cursor: 'pointer',
            position: 'relative',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
          } as React.CSSProperties}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y / rect.height - 0.5) * -15;
            const rotateY = (x / rect.width - 0.5) * 15;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            e.currentTarget.style.boxShadow = '0 30px 40px -15px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
          }}
          >
            <div style={{
                width: '72px',
                height: '72px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
              <Icon name={item.icon} size={40} color="white" />
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
              opacity: 0.9,
            }}>{item.description}</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesSectionSample2;
