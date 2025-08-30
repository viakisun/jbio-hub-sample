import React from 'react';
import Icon from '../../atoms/Icon';

const highlightsData = [
  {
    icon: 'cpu',
    title: 'AI-Powered Research',
    description: 'Leverage our advanced AI platform to accelerate your research and development.',
  },
  {
    icon: 'globe',
    title: 'Global Collaboration',
    description: 'Connect with a global network of researchers, institutions, and companies.',
  },
  {
    icon: 'bar-chart-2',
    title: 'Data-Driven Insights',
    description: 'Gain valuable insights from our comprehensive bio-data and analytics tools.',
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section">
      <div className="highlights-section__grid">
        {highlightsData.map((item, index) => (
          <div className="highlights-section__card" key={index}>
            <div className="highlights-section__card-icon">
              <Icon name={item.icon as any} size={32} color="#aaff00" />
            </div>
            <h3 className="highlights-section__card-title">{item.title}</h3>
            <p className="highlights-section__card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
