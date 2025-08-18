import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import { version } from '../../../../package.json'; // Import version

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

const Copyright = styled.div`
  color: ${DESIGN_SYSTEM.colors.gray[500]};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Version = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: ${DESIGN_SYSTEM.colors.gray[400]};
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
`;

// --- COMPONENT ---

const Footer = () => {
  const platformLinks = ['AI R&D Hub', 'Smart Incubator', 'Bio Intelligence', 'Innovation Lab', 'Global Connect', 'Tech Transfer'];
  const fieldLinks = ['AI Drug Discovery', 'Precision Medicine', 'K-Beauty', 'Smart Farm', 'Regenerative Medicine', 'Bioenergy'];

  return (
    <FooterWrapper>
      <FooterContainer>
        <Grid>
          <InfoSection>
            <LogoContainer>
              <Icon name="logo" size={48} />
              <div>
                <LogoTitle>JB SQUARE</LogoTitle>
                <div style={{ fontSize: '12px', color: DESIGN_SYSTEM.colors.gray[400] }}>The Industry & Research Hub</div>
              </div>
            </LogoContainer>
            <p style={{ lineHeight: '1.6', maxWidth: '400px' }}>
              A premier innovation platform, designing the future of industry with AI and Big Data technology.
            </p>
            <div style={{ color: DESIGN_SYSTEM.colors.gray[400], lineHeight: '1.5' }}>
              📞 +82-63-219-3000<br />
              ✉️ contact@jbsquare.io<br />
              📍 255, Cheomdan-ro, Deokjin-gu, Jeonju-si, Jeollabuk-do, Korea
            </div>
          </InfoSection>

          <LinksSection>
            <SectionTitle>Platform Services</SectionTitle>
            <LinkList>
              {platformLinks.map((item) => <li key={item}><LinkItem href="#">{item}</LinkItem></li>)}
            </LinkList>
          </LinksSection>

          <LinksSection>
            <SectionTitle>Industry Fields</SectionTitle>
            <LinkList>
              {fieldLinks.map((item) => <li key={item}><LinkItem href="#">{item}</LinkItem></li>)}
            </LinkList>
          </LinksSection>
        </Grid>
        <BottomBar>
          <Copyright>
            <span>© 2024 JBTP. All rights reserved.</span>
            <Version>v{version}</Version>
          </Copyright>
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
