import React, { useState, useEffect } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/services');
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
    <section style={{
      marginBottom: DESIGN_SYSTEM.spacing[16]
    } as React.CSSProperties}>
      <h2 style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize['3xl'][0],
        fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
        color: DESIGN_SYSTEM.colors.gray[900],
        margin: `0 0 ${DESIGN_SYSTEM.spacing[10]} 0`,
        textAlign: 'center',
        letterSpacing: '-0.025em'
      } as React.CSSProperties}>
        주요 서비스
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: DESIGN_SYSTEM.spacing[6]
      } as React.CSSProperties}>
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.gradient,
              borderRadius: '20px',
              padding: DESIGN_SYSTEM.spacing[8],
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            } as React.CSSProperties}
          >
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: DESIGN_SYSTEM.spacing[5],
              backdropFilter: 'blur(10px)'
            } as React.CSSProperties}>
              <Icon name={item.icon} size={32} color="white" />
            </div>

            <h3 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
              color: 'white',
              margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
              lineHeight: '1.3'
            } as React.CSSProperties}>
              {item.title}
            </h3>

            <p style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
              color: 'rgba(255,255,255,0.9)',
              margin: 0,
              lineHeight: '1.5'
            } as React.CSSProperties}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
