import React from 'react';

const AnnouncementsHero = () => {
  return (
    <section className="hero" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
      <div className="hero__background-pattern" />
      <div className="hero__floating-element" />
      <div className="hero__content">
        <h1 className="hero__title">
          JB 지원사업공고
        </h1>
        <p className="hero__description">
          전북 바이오산업의 성장을 위한 다양한 지원사업을 확인하세요.
        </p>
      </div>
    </section>
  );
};

export default AnnouncementsHero;
