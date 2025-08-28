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
    <section className="services-section-sample-2">
      <h2 className="services-section-sample-2__title">
        Our Services
      </h2>
      <Grid cols={4} tabletCols={2} mobileCols={1}>
        {services.map((item, index) => (
          <div
            key={index}
            className="services-section-sample-2__card"
            style={{ background: item.gradient }}
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
            <div className="services-section-sample-2__icon-wrapper">
              <Icon name={item.icon} size={40} color="white" />
            </div>
            <h3 className="services-section-sample-2__card-title">{item.title}</h3>
            <p className="services-section-sample-2__card-description">{item.description}</p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesSectionSample2;
