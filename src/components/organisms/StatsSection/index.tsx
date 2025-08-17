import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const mockStats = [
  {
    label: '혁신기업',
    value: '1,247',
    change: '+5.2%',
    icon: 'building',
    description: '등록된 바이오 기업'
  },
  {
    label: '활성 프로젝트',
    value: '89',
    change: '+12',
    icon: 'target',
    description: '진행중인 R&D'
  },
  {
    label: 'IP 자산',
    value: '3,456',
    change: '+8.1%',
    icon: 'brain',
    description: '특허 및 기술'
  },
  {
    label: '성공 사례',
    value: '145',
    change: '+23',
    icon: 'sparkles',
    description: '이달의 성과'
  }
];

// --- STYLED COMPONENTS ---

const SectionWrapper = styled.section`
  margin-bottom: ${DESIGN_SYSTEM.spacing['3xl']};
`;

const Grid = styled.div`
  display: grid;
  gap: ${DESIGN_SYSTEM.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${DESIGN_SYSTEM.spacing.lg};
  }
  @media (min-width: 1280px) {
    gap: ${DESIGN_SYSTEM.spacing.xl};
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: ${DESIGN_SYSTEM.spacing.xl};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid ${DESIGN_SYSTEM.colors.gray[200]};
  position: relative;
  overflow: hidden;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: ${DESIGN_SYSTEM.spacing.lg};
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  background: ${DESIGN_SYSTEM.gradients.primary};
  border-radius: 50%;
  transform: translate(30%, -30%);
  opacity: 0.1;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    width: 80px;
    height: 80px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${DESIGN_SYSTEM.spacing.md};
`;

const IconWrapper = styled.div`
  padding: ${DESIGN_SYSTEM.spacing.md};
  background: ${DESIGN_SYSTEM.gradients.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: ${DESIGN_SYSTEM.spacing.sm};
  }
`;

const ChangeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.xs};
  font-weight: 700;
  color: #22c55e;
  background: #22c55e20;
  padding: ${DESIGN_SYSTEM.spacing.xs} ${DESIGN_SYSTEM.spacing.sm};
  border-radius: 8px;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 12px;
  }
`;

const Value = styled.div`
  font-weight: 900;
  color: ${DESIGN_SYSTEM.colors.gray[900]};
  margin-bottom: ${DESIGN_SYSTEM.spacing.xs};
  line-height: 1;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 32px;
  }
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;

const Label = styled.div`
  font-weight: 700;
  color: ${DESIGN_SYSTEM.colors.gray[900]};
  margin-bottom: ${DESIGN_SYSTEM.spacing.xs};

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 14px;
  }
  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  color: ${DESIGN_SYSTEM.colors.gray[500]};
  font-weight: 500;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 12px;
  }
  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

// --- COMPONENT ---

const StatsSection = () => {
  return (
    <SectionWrapper>
      <Grid>
        {mockStats.map((stat, index) => (
          <StatCard key={index}>
            <CardBackground />
            <CardContent>
              <CardHeader>
                <IconWrapper>
                  <Icon name={stat.icon as any} size={24} color="white" />
                </IconWrapper>
                <ChangeIndicator>
                  <Icon name="trendingUp" size={12} color="#22c55e" />
                  {stat.change}
                </ChangeIndicator>
              </CardHeader>
              <Value>{stat.value}</Value>
              <Label>{stat.label}</Label>
              <Description>{stat.description}</Description>
            </CardContent>
          </StatCard>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default StatsSection;
