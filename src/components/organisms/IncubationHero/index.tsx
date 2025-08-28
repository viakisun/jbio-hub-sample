import React from 'react';

const IncubationHero = () => {
  return (
    <section className="hero" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
      <div className="hero__background-pattern" />
      <div className="hero__floating-element" />
      <div className="hero__content">
        <h1 className="hero__title">
          JB 창업보육센터
        </h1>
        <p className="hero__description">
          <span className="hero__subtitle">당신의 성공적인 창업을 지원합니다.</span><br/>
          JB스퀘어의 창업보육센터는 혁신적인 아이디어를 가진 (예비)창업자를 발굴하여<br/>
          성공적인 사업화를 이룰 수 있도록 지원하는 프로그램입니다.
        </p>
      </div>
    </section>
  );
};

export default IncubationHero;
