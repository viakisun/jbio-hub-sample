import React from 'react';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample4 = () => {
  return (
    <section className="hero-sample-4">
      <div className="hero-sample-4__background" />
      <div className="hero-sample-4__content">
        <h1 className="hero-sample-4__title hero-sample-4__glow-text">
          FUTURE IS NOW
        </h1>
        <p className="hero-sample-4__subtitle">
          JB SQUARE에서 펼쳐지는 혁신의 내일.
          <br/>
          가장 진보된 기술과 아이디어를 만나보세요.
        </p>
        <div className="hero-sample-4__search">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSample4;
