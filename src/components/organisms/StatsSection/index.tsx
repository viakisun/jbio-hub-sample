import React from 'react';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const mockStats = [
  {
    label: '혁신기업',
    value: '1,247',
    change: '+5.2%',
    icon: 'building',
    description: '등록된 바이오 기업'
  },
  {
    label: '활성 프로젝트',
    value: '89',
    change: '+12',
    icon: 'target',
    description: '진행중인 R&D'
  },
  {
    label: 'IP 자산',
    value: '3,456',
    change: '+8.1%',
    icon: 'brain',
    description: '특허 및 기술'
  },
  {
    label: '성공 사례',
    value: '145',
    change: '+23',
    icon: 'sparkles',
    description: '이달의 성과'
  }
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-section__grid">
        {mockStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card__background" />
            <div className="stat-card__content">
              <div className="stat-card__header">
                <div className="stat-card__icon-wrapper">
                  <Icon name={stat.icon as any} size={24} color="white" />
                </div>
                <div className="stat-card__change">
                  <Icon name="trendingUp" size={12} color="#4CAF50" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
              <div className="stat-card__description">{stat.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
