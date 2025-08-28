import React from 'react';
import Icon from '../../atoms/Icon';

interface TimelineStep {
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div key={index} className="timeline__item">
          {index < steps.length - 1 && <div className="timeline__connector" />}
          <div className="timeline__icon-wrapper">
            <Icon name={step.icon as any} size={14} color="white" />
          </div>
          <div className="timeline__content">
            <h4 className="timeline__title">{step.title}</h4>
            <p className="timeline__description">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
