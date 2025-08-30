import React from 'react';
import MainLayout from '../../templates/MainLayout';
import HeroSection from '../../organisms/HeroSection';
import HighlightsSection from '../../organisms/HighlightsSection';

/**
 * ## UI-01-01: Home Page (Redesigned)
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSection (Redesigned)
 * - Organism: HighlightsSection
 *
 * @returns {JSX.Element}
 */
const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HighlightsSection />
    </MainLayout>
  );
};

export default HomePage;
