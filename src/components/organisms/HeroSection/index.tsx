import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const heroSlides = [
  {
    title: '전북 바이오',
    subtitle: '혁신 생태계',
    description: 'AI와 빅데이터로 구동되는 차세대 바이오 플랫폼',
    cta: 'AI 검색',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'K-바이오',
    subtitle: '글로벌 진출',
    description: '전세계 바이오 시장을 선도하는 K-바이오의 힘',
    cta: '글로벌 연결',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'AI 신약',
    subtitle: '개발 플랫폼',
    description: '머신러닝과 딥러닝 기술을 활용한 차세대 신약개발',
    cta: 'AI 분석',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: '스마트팜',
    subtitle: '미래 농업',
    description: 'IoT와 바이오 기술이 결합된 스마트팜 솔루션',
    cta: '솔루션 보기',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="hero" style={{ background: activeSlide.gradient }}>
      <div className="hero__background-pattern" />
      <div className="hero__floating-element" />
      <div className="hero__content">
        <h1 className="hero__title">
          {activeSlide.title}<br />
          <span className="hero__subtitle">{activeSlide.subtitle}</span>
        </h1>
        <p className="hero__description">{activeSlide.description}</p>
        <button className="hero__cta">
          <Icon name="zap" size={20} color="white" />
          <span>{activeSlide.cta}</span>
        </button>
        <div className="hero__carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero__carousel-indicator ${currentSlide === index ? 'hero__carousel-indicator--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
