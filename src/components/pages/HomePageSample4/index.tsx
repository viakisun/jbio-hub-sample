import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSectionSample4 from '../../organisms/HeroSectionSample4';
import StatsSectionSample4 from '../../organisms/StatsSectionSample4';
import ServicesSectionSample4 from '../../organisms/ServicesSectionSample4';
import ContentGridSample4 from '../../organisms/ContentGridSample4';

/**
 * ## UI-01-01: Home Page Sample 4 (Futuristic Glassmorphism)
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSectionSample4
 * - Organism: StatsSectionSample4
 * - Organism: ServicesSectionSample4
 * - Organism: ContentGridSample4
 *
 * @returns {JSX.Element}
 */
const HomePageSample4 = () => {
  const pageStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    minHeight: '100vh',
    paddingTop: '2rem',
    paddingBottom: '4rem',
  };

  return (
    <div style={pageStyle}>
      <MainLayout>
        <HeroSectionSample4 />
        <StatsSectionSample4 />
        <ServicesSectionSample4 />
        <ContentGridSample4 />
      </MainLayout>
    </div>
  );
};

export default HomePageSample4;
