import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSectionSample3 from '../../organisms/HeroSectionSample3';
import StatsSectionSample3 from '../../organisms/StatsSectionSample3';
import ServicesSectionSample3 from '../../organisms/ServicesSectionSample3';
import ContentGridSample3 from '../../organisms/ContentGridSample3';

/**
 * ## UI-01-01: Home Page Sample 3 (Data-Driven Professionalism)
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSectionSample3
 * - Organism: StatsSectionSample3
 * - Organism: ServicesSectionSample3
 * - Organism: ContentGridSample3
 *
 * @returns {JSX.Element}
 */
const HomePageSample3 = () => {
  return (
    <MainLayout>
      <HeroSectionSample3 />
      <StatsSectionSample3 />
      <ServicesSectionSample3 />
      <ContentGridSample3 />
    </MainLayout>
  );
};

export default HomePageSample3;
