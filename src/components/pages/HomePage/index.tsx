import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSection from '../../organisms/HeroSection';
import StatsSection from '../../organisms/StatsSection';
import ServicesSection from '../../organisms/ServicesSection';
import ContentGrid from '../../organisms/ContentGrid';

/**
 * ## UI-01-01: Home Page
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSection
 * - Organism: StatsSection
 * - Organism: ServicesSection
 * - Organism: ContentGrid
 *
 * @returns {JSX.Element}
 */
const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ContentGrid limit={6} showTabs={false} showLoadMore={false} />
    </MainLayout>
  );
};

export default HomePage;
