import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const CardWrapper = styled.div`
  background: ${DESIGN_SYSTEM.gradients.card};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${DESIGN_SYSTEM.shadows.lg};
  border: 1px solid ${DESIGN_SYSTEM.colors.gray[100]};
  position: relative;
  overflow: hidden;
`;

const BackgroundAccent = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: ${props => props.color}10;
  border-radius: 50%;
  transform: translate(25%, -25%);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div<{ color: string }>`
  padding: 0.75rem;
  background-color: ${props => props.color}15;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ChangeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${DESIGN_SYSTEM.typography.fontSize.sm[0]};
  font-weight: ${DESIGN_SYSTEM.typography.fontWeight.semibold};
  color: ${DESIGN_SYSTEM.colors.success[600]};
`;

const ValueText = styled.div`
  font-size: ${DESIGN_SYSTEM.typography.fontSize['4xl'][0]};
  font-weight: ${DESIGN_SYSTEM.typography.fontWeight.black};
  color: ${DESIGN_SYSTEM.colors.gray[900]};
  margin-bottom: 0.5rem;
  font-family: ${DESIGN_SYSTEM.typography.fontFamily.mono};
  line-height: 1;
`;

const LabelText = styled.div`
  font-size: ${DESIGN_SYSTEM.typography.fontSize.sm[0]};
  color: ${DESIGN_SYSTEM.colors.gray[600]};
  font-weight: ${DESIGN_SYSTEM.typography.fontWeight.medium};
`;

// --- DATA MODELS ---

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface StatCardProps {
  stat: Stat;
}

// --- COMPONENT ---

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <CardWrapper>
      <BackgroundAccent color={stat.color} />
      <ContentWrapper>
        <TopRow>
          <IconContainer color={stat.color}>
            <Icon name={stat.icon} size={24} color={stat.color} />
          </IconContainer>
          <ChangeIndicator>
            <Icon name="trendingUp" size={14} />
            {stat.change}
          </ChangeIndicator>
        </TopRow>
        <ValueText>{stat.value}</ValueText>
        <LabelText>{stat.label}</LabelText>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default StatCard;
