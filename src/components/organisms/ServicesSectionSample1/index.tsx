import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string; // We won't use this, but it's in the data
}

const ServicesSectionSample1 = () => {
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
    <section style={{ marginBottom: '4rem', backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: 'bold',
        color: '#212529',
        margin: '0 0 2.5rem 0',
        textAlign: 'center',
        letterSpacing: '-0.025em'
      }}>
        핵심 서비스
      </h2>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
          {services.map((item, index) => (
            <div key={index} style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid #e9ecef',
              transition: 'border-color 0.2s ease-in-out, transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#adb5bd';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                marginBottom: '1.25rem',
              }}>
                <Icon name={item.icon} size={32} color="#495057" />
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#212529',
                margin: '0 0 0.75rem 0',
              }}>{item.title}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6c757d',
                margin: 0,
                lineHeight: 1.6,
              }}>{item.description}</p>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default ServicesSectionSample1;
