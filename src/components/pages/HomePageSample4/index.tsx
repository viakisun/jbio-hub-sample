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
    backgroundImage: 'url("https://picsum.photos/seed/biofuture/1920/1080")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This creates a nice parallax effect
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
