import React from 'react';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample2 = () => {
  return (
    <section className="hero-sample-2">
      <div className="hero-sample-2__pattern" />
      <div className="hero-sample-2__content">
        <h1 className="hero-sample-2__title">
          INNOVATE. CONNECT. GROW.
        </h1>
        <p className="hero-sample-2__subtitle">
          전북의 미래를 여는 혁신 허브, JB SQUARE에서<br/>
          당신의 가능성을 폭발시키세요.
        </p>
        <div className="hero-sample-2__search">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSample2;
