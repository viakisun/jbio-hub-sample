import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const heroSlides = [
  {
    title: '전북 바이오',
    subtitle: '혁신 생태계',
    description: 'AI와 빅데이터로 구동되는 차세대 바이오 플랫폼',
    cta: 'AI 검색',
    gradient: DESIGN_SYSTEM.gradients.hero1
  },
  {
    title: 'K-바이오',
    subtitle: '글로벌 진출',
    description: '전세계 바이오 시장을 선도하는 K-바이오의 힘',
    cta: '글로벌 연결',
    gradient: DESIGN_SYSTEM.gradients.hero2
  },
  {
    title: 'AI 신약',
    subtitle: '개발 플랫폼',
    description: '머신러닝과 딥러닝 기술을 활용한 차세대 신약개발',
    cta: 'AI 분석',
    gradient: DESIGN_SYSTEM.gradients.hero3
  },
  {
    title: '스마트팜',
    subtitle: '미래 농업',
    description: 'IoT와 바이오 기술이 결합된 스마트팜 솔루션',
    cta: '솔루션 보기',
    gradient: DESIGN_SYSTEM.gradients.hero4
  }
];

// --- STYLED COMPONENTS ---

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const HeroWrapper = styled.section`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.8s ease;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    min-height: 520px;
  }
  @media (min-width: 769px) {
    min-height: 480px;
  }

  margin-bottom: ${DESIGN_SYSTEM.spacing['3xl']};
  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    margin-bottom: ${DESIGN_SYSTEM.spacing.xl};
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
`;

const FloatingElement = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 769px) {
    width: 100px;
    height: 100px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 ${DESIGN_SYSTEM.spacing.lg} ${DESIGN_SYSTEM.spacing.xl};
  max-width: 1200px;
  width: 100%;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding-bottom: ${DESIGN_SYSTEM.spacing.lg};
  }
`;

const Title = styled.h1`
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.md} 0;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 32px;
  }
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.span`
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  margin: 0 0 ${DESIGN_SYSTEM.spacing.xl} 0;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

const CtaButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: ${DESIGN_SYSTEM.spacing.md} ${DESIGN_SYSTEM.spacing.xl};
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
  margin: 0 auto ${DESIGN_SYSTEM.spacing.lg} auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.3);
  }

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

const CarouselIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
`;

const CarouselIndicator = styled.button<{ isActive: boolean }>`
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => (props.isActive ? '32px' : '12px')};
  background: ${props => (props.isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)')};
`;


// --- COMPONENT ---

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <HeroWrapper style={{ background: activeSlide.gradient }}>
      <BackgroundPattern />
      <FloatingElement />
      <ContentWrapper>
        <Title>
          {activeSlide.title}<br />
          <Subtitle>{activeSlide.subtitle}</Subtitle>
        </Title>
        <Description>{activeSlide.description}</Description>
        <CtaButton>
          <Icon name="zap" size={20} color="white" />
          {activeSlide.cta}
        </CtaButton>
        <CarouselIndicatorContainer>
          {heroSlides.map((_, index) => (
            <CarouselIndicator
              key={index}
              isActive={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </CarouselIndicatorContainer>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
