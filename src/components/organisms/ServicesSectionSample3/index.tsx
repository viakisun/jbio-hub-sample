import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string; // Not used, but in the data model
}

const ServicesSectionSample3 = () => {
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

  const sectionStyle: React.CSSProperties = {
    marginBottom: '4rem',
    padding: '0 1rem'
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: '2.5rem'
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid #dee2e6',
    textAlign: 'left',
    height: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2ff', // Light blue background
    marginBottom: '1.5rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={titleStyle}>핵심 서비스</h2>
        <Grid $cols={4} $tabletCols={2} $mobileCols={1}>
          {services.map((item, index) => (
            <div key={index} style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#457b9d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#dee2e6';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={iconContainerStyle}>
                <Icon name={item.icon} size={28} color="#1d3557" />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d3557',
                margin: '0 0 0.75rem 0',
              }}>{item.title}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#495057',
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

export default ServicesSectionSample3;
