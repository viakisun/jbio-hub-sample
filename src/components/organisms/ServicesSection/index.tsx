import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const mockServices = [
  {
    title: 'AI R&D Hub',
    description: '머신러닝 기반 연구개발 최적화',
    icon: 'brain',
    gradient: DESIGN_SYSTEM.gradients.hero1,
    features: ['AI 실험 설계', '데이터 분석', '예측 모델링']
  },
  {
    title: 'Smart Incubator',
    description: '지능형 창업 지원 생태계',
    icon: 'zap',
    gradient: DESIGN_SYSTEM.gradients.hero2,
    features: ['맞춤형 멘토링', '투자 매칭', '글로벌 진출']
  },
  {
    title: 'Bio Intelligence',
    description: '실시간 산업 인사이트',
    icon: 'globe',
    gradient: DESIGN_SYSTEM.gradients.hero3,
    features: ['시장 동향', '경쟁 분석', '기회 발굴']
  },
  {
    title: 'Innovation Lab',
    description: '차세대 기술 플랫폼',
    icon: 'layers',
    gradient: DESIGN_SYSTEM.gradients.hero4,
    features: ['오픈 이노베이션', '협업 네트워크', '기술 이전']
  }
];

// --- STYLED COMPONENTS ---

const SectionWrapper = styled.section`
  margin-bottom: ${DESIGN_SYSTEM.spacing['3xl']};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${DESIGN_SYSTEM.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-weight: 900;
  background: ${DESIGN_SYSTEM.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.lg} 0;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 32px;
  }
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;

const SectionSubtitle = styled.p`
  color: ${DESIGN_SYSTEM.colors.gray[600]};
  max-width: 600px;
  margin: 0 auto;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${DESIGN_SYSTEM.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const ServiceCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: 20px;
  padding: ${DESIGN_SYSTEM.spacing['2xl']};
  color: white;
  display: flex;
  flex-direction: column;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: ${DESIGN_SYSTEM.spacing.xl};
    min-height: 280px;
  }
  @media (min-width: 769px) {
    min-height: 320px;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${DESIGN_SYSTEM.spacing.lg};
  backdrop-filter: blur(10px);

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    width: 60px;
    height: 60px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.sm} 0;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  opacity: 0.9;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.lg} 0;
  line-height: 1.5;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const FeatureList = styled.div`
  margin-top: auto;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
  margin-bottom: ${DESIGN_SYSTEM.spacing.sm};
  opacity: 0.8;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 12px;
  }
  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

const LearnMoreButton = styled.button`
  margin-top: ${DESIGN_SYSTEM.spacing.lg};
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: ${DESIGN_SYSTEM.spacing.sm} ${DESIGN_SYSTEM.spacing.md};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
`;

// --- COMPONENT ---

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>핵심 플랫폼</SectionTitle>
        <SectionSubtitle>
          AI 기반 통합 서비스로 바이오 혁신을 가속화하세요
        </SectionSubtitle>
      </SectionHeader>
      <Grid>
        {mockServices.map((service, index) => (
          <ServiceCard key={index} gradient={service.gradient}>
            <IconWrapper>
              <Icon name={service.icon as any} size={36} color="white" />
            </IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <FeatureList>
              {service.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }} />
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
            <LearnMoreButton>
              자세히 보기
              <Icon name="arrowRight" size={14} color="white" />
            </LearnMoreButton>
          </ServiceCard>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ServicesSection;
