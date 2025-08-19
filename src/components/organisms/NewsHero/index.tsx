import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

// --- STYLED COMPONENTS (Adapted from AnnouncementsHero) ---

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
  background: ${DESIGN_SYSTEM.gradients.hero3};

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    min-height: 400px;
  }
  @media (min-width: 769px) {
    min-height: 380px;
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

const Subtitle = styled.p`
  margin: 0;
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

// --- COMPONENT ---

const NewsHero = () => {
  return (
    <HeroWrapper>
      <BackgroundPattern />
      <FloatingElement />
      <ContentWrapper>
        <Title>
          산업·기술 뉴스
        </Title>
        <Subtitle>
          국내외 바이오 산업 및 기술의 최신 동향과 정보를 확인하세요.
        </Subtitle>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default NewsHero;
