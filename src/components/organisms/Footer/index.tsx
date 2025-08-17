import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const FooterWrapper = styled.footer`
  background: ${DESIGN_SYSTEM.gradients.dark};
  color: ${DESIGN_SYSTEM.colors.gray[300]};
  padding: ${DESIGN_SYSTEM.spacing['3xl']} ${DESIGN_SYSTEM.spacing.lg} ${DESIGN_SYSTEM.spacing.xl};

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: ${DESIGN_SYSTEM.spacing['2xl']} ${DESIGN_SYSTEM.spacing.lg} ${DESIGN_SYSTEM.spacing.xl};
  }
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: ${DESIGN_SYSTEM.spacing.xl};
  margin-bottom: ${DESIGN_SYSTEM.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const InfoSection = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.md};
  margin-bottom: ${DESIGN_SYSTEM.spacing.lg};
`;

const LogoTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LinksSection = styled.div`
  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    display: none;
  }
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: ${DESIGN_SYSTEM.spacing.lg};
`;

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  line-height: 2;
`;

const LinkItem = styled.a`
  color: ${DESIGN_SYSTEM.colors.gray[400]};
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${DESIGN_SYSTEM.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    flex-direction: column;
    gap: ${DESIGN_SYSTEM.spacing.md};
  }
`;

// --- COMPONENT ---

const Footer = () => {
  const platformLinks = ['AI R&D Hub', 'Smart Incubator', 'Bio Intelligence', 'Innovation Lab', 'Global Connect', 'Tech Transfer'];
  const fieldLinks = ['AI 신약개발', '정밀의학', 'K-뷰티', '스마트팜', '재생의학', '바이오에너지'];

  return (
    <FooterWrapper>
      <FooterContainer>
        <Grid>
          <InfoSection>
            <LogoContainer>
              <Icon name="logo" size={48} />
              <div>
                <LogoTitle>J BIO HUB</LogoTitle>
                <div style={{ fontSize: '12px', color: DESIGN_SYSTEM.colors.gray[400] }}>Next-Generation Bio Platform</div>
              </div>
            </LogoContainer>
            <p style={{ lineHeight: '1.6', maxWidth: '400px' }}>
              AI와 빅데이터 기술로 전북 바이오산업의 미래를 설계하는 대한민국 대표 바이오 혁신 플랫폼입니다.
            </p>
            <div style={{ color: DESIGN_SYSTEM.colors.gray[400], lineHeight: '1.5' }}>
              📞 063-219-3000<br />
              ✉️ contact@jbiohub.kr<br />
              📍 전북 전주시 덕진구 첨단로 255
            </div>
          </InfoSection>

          <LinksSection>
            <SectionTitle>플랫폼 서비스</SectionTitle>
            <LinkList>
              {platformLinks.map((item) => <li key={item}><LinkItem href="#">{item}</LinkItem></li>)}
            </LinkList>
          </LinksSection>

          <LinksSection>
            <SectionTitle>바이오 분야</SectionTitle>
            <LinkList>
              {fieldLinks.map((item) => <li key={item}><LinkItem href="#">{item}</LinkItem></li>)}
            </LinkList>
          </LinksSection>
        </Grid>
        <BottomBar>
          <div style={{ color: DESIGN_SYSTEM.colors.gray[500] }}>
            © 2024 전라북도테크노파크. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: DESIGN_SYSTEM.spacing.lg }}>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <LinkItem key={item} href="#">{item}</LinkItem>
            ))}
          </div>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
