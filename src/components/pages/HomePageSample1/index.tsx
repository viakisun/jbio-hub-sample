import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSectionSample1 from '../../organisms/HeroSectionSample1';
import StatsSectionSample1 from '../../organisms/StatsSectionSample1';
import ServicesSectionSample1 from '../../organisms/ServicesSectionSample1';
import ContentGridSample1 from '../../organisms/ContentGridSample1';

/**
 * ## UI-01-01: Home Page Sample 1 (Elegant Minimalism)
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSectionSample1
 * - Organism: StatsSectionSample1
 * - Organism: ServicesSectionSample1
 * - Organism: ContentGridSample1
 *
 * @returns {JSX.Element}
 */
const HomePageSample1 = () => {
  return (
    <MainLayout>
      <HeroSectionSample1 />
      <StatsSectionSample1 />
      <ServicesSectionSample1 />
      <ContentGridSample1 />
    </MainLayout>
  );
};

export default HomePageSample1;
