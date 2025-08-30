import React from 'react';
import SearchBar from '../../molecules/SearchBar';

const TechHubHero = () => {
  return (
    <div className="tech-hub-hero">
      <div className="tech-hub-hero__content">
        <h1 className="tech-hub-hero__title">Explore Our Technology Landscape</h1>
        <p className="tech-hub-hero__subtitle">
          Discover the latest innovations, research, and patents from the JB SQUARE ecosystem.
        </p>
        <div className="tech-hub-hero__search">
          <SearchBar placeholder="Search for a specific technology..." />
        </div>
      </div>
    </div>
  );
};

export default TechHubHero;
