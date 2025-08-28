import React from 'react';

const NewsHero = () => {
  return (
    <section className="hero" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
      <div className="hero__background-pattern" />
      <div className="hero__floating-element" />
      <div className="hero__content">
        <h1 className="hero__title">
          산업·기술 뉴스
        </h1>
        <p className="hero__description">
          국내외 바이오 산업 및 기술의 최신 동향과 정보를 확인하세요.
        </p>
      </div>
    </section>
  );
};

export default NewsHero;
