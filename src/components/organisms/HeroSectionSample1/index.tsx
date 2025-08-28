import React from 'react';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample1 = () => {
  return (
    <section className="hero-sample-1">
      <h1 className="hero-sample-1__title">
        JBSQUARE.
      </h1>
      <p className="hero-sample-1__subtitle">
        전북의 미래를 함께 만드는 혁신 공간.
        <br />
        핵심 정보와 기회를 간결하게 전달합니다.
      </p>
      <div className="hero-sample-1__search">
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSectionSample1;
