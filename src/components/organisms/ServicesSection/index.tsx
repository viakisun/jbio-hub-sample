import React from 'react';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const mockServices = [
  {
    title: 'AI R&D Hub',
    description: '머신러닝 기반 연구개발 최적화',
    icon: 'brain',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: ['AI 실험 설계', '데이터 분석', '예측 모델링']
  },
  {
    title: 'Smart Incubator',
    description: '지능형 창업 지원 생태계',
    icon: 'zap',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: ['맞춤형 멘토링', '투자 매칭', '글로벌 진출']
  },
  {
    title: 'Bio Intelligence',
    description: '실시간 산업 인사이트',
    icon: 'globe',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: ['시장 동향', '경쟁 분석', '기회 발굴']
  },
  {
    title: 'Innovation Lab',
    description: '차세대 기술 플랫폼',
    icon: 'layers',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    features: ['오픈 이노베이션', '협업 네트워크', '기술 이전']
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-section__header">
        <h2 className="services-section__title">핵심 플랫폼</h2>
        <p className="services-section__subtitle">
          AI 기반 통합 서비스로 바이오 혁신을 가속화하세요
        </p>
      </div>
      <div className="services-section__grid">
        {mockServices.map((service, index) => (
          <div key={index} className="service-card" style={{ background: service.gradient }}>
            <div className="service-card__icon-wrapper">
              <Icon name={service.icon as any} size={36} color="white" />
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <div className="service-card__features">
              {service.features.map((feature, idx) => (
                <div key={idx} className="service-card__feature-item">
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="service-card__learn-more">
              <span>자세히 보기</span>
              <Icon name="arrowRight" size={14} color="white" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
