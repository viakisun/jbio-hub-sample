import React from 'react';
import MainLayout from '../../templates/MainLayout';
import TechHubHero from '../../organisms/TechHubHero';
import FeaturedTech from '../../organisms/FeaturedTech';
import TechList from '../../organisms/TechList';

/**
 * ## Technology Hub Page
 * A sample page to demonstrate the new design system.
 *
 * @returns {JSX.Element}
 */
const TechHubPage = () => {
  return (
    <MainLayout>
      <TechHubHero />
      <FeaturedTech />
      <TechList />
    </MainLayout>
  );
};

export default TechHubPage;
