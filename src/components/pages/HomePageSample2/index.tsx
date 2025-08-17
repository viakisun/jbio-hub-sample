import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSectionSample2 from '../../organisms/HeroSectionSample2';
import StatsSectionSample2 from '../../organisms/StatsSectionSample2';
import ServicesSectionSample2 from '../../organisms/ServicesSectionSample2';
import ContentGridSample2 from '../../organisms/ContentGridSample2';

/**
 * ## UI-01-01: Home Page Sample 2 (Vibrant & Dynamic)
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSectionSample2
 * - Organism: StatsSectionSample2
 * - Organism: ServicesSectionSample2
 * - Organism: ContentGridSample2
 *
 * @returns {JSX.Element}
 */
const HomePageSample2 = () => {
  return (
    <MainLayout>
      <HeroSectionSample2 />
      <StatsSectionSample2 />
      <ServicesSectionSample2 />
      <ContentGridSample2 />
    </MainLayout>
  );
};

export default HomePageSample2;
