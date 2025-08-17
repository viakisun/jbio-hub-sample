import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

/**
 * ## MainLayout
 * ### Atomic Structure
 * - Organism: Header
 * - Organism: Footer
 * - Slot: children
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered within the layout
 * @returns {JSX.Element}
 */
interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${DESIGN_SYSTEM.colors.gray[50]};
  font-family: ${DESIGN_SYSTEM.typography.fontFamily.sans};
`;

const MainContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${DESIGN_SYSTEM.spacing.xl} ${DESIGN_SYSTEM.spacing.lg};

  @media (min-width: 769px) {
    padding-top: 120px;
  }

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding-top: 70px;
    padding-left: ${DESIGN_SYSTEM.spacing.md};
    padding-right: ${DESIGN_SYSTEM.spacing.md};
  }
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
