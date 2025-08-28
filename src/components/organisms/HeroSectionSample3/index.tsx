import React from 'react';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample3 = () => {
  return (
    <section className="hero-sample-3">
      <h1 className="hero-sample-3__title">
        데이터로 증명하는 혁신
      </h1>
      <p className="hero-sample-3__subtitle">
        JB SQUARE는 데이터 기반의 인사이트를 통해 기업의 성장을 지원합니다.
        <br />
        정확한 정보와 통계로 최적의 비즈니스 결정을 내리세요.
      </p>
      <div className="hero-sample-3__search">
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSectionSample3;
