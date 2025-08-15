import React from 'react';
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

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: DESIGN_SYSTEM.colors.gray[50],
      fontFamily: DESIGN_SYSTEM.typography.fontFamily.sans
    } as React.CSSProperties}>
      <Header />
      <main style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `${DESIGN_SYSTEM.spacing[12]} ${DESIGN_SYSTEM.spacing[6]}`
      } as React.CSSProperties}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
