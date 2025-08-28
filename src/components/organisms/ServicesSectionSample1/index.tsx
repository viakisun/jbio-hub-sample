import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
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
    <section className="services-section-sample-1">
      <h2 className="services-section-sample-1__title">
        핵심 서비스
      </h2>
      <div className="services-section-sample-1__wrapper">
        <Grid cols={4} tabletCols={2} mobileCols={1}>
          {services.map((item, index) => (
            <div key={index} className="services-section-sample-1__card">
              <div className="services-section-sample-1__icon-wrapper">
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className="services-section-sample-1__card-title">{item.title}</h3>
              <p className="services-section-sample-1__card-description">{item.description}</p>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default ServicesSectionSample1;
