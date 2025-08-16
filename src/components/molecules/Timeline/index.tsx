import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 2rem;
`;

const Connector = styled.div`
  position: absolute;
  top: 12px;
  left: 11px;
  width: 2px;
  height: 100%;
  background-color: #e5e7eb;
`;

const IconWrapper = styled.div`
  z-index: 1;
  background-color: #4f46e5;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ContentWrapper = styled.div`
  padding-top: 2px;
`;

const Title = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

// --- COMPONENT ---

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
    <TimelineWrapper>
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          {index < steps.length - 1 && <Connector />}
          <IconWrapper>
            <Icon name={step.icon as any} size={14} color="white" />
          </IconWrapper>
          <ContentWrapper>
            <Title>{step.title}</Title>
            <Description>{step.description}</Description>
          </ContentWrapper>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
