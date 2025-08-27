import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

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
    <div className="main-layout">
      <Header />
      <main className="main-layout__content container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
