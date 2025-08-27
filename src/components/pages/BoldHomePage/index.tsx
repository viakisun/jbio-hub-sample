import React from 'react';
import BoldMainLayout from '../../templates/BoldMainLayout';

const mockServices = [
  { id: 1, category: 'R&D', title: 'AI R&D Hub', description: '머신러닝 기반 연구개발 최적화', link: '#' },
  { id: 2, category: 'Incubation', title: 'Smart Incubator', description: '지능형 창업 지원 생태계', link: '#' },
  { id: 3, category: 'Insights', title: 'Bio Intelligence', description: '실시간 산업 인사이트', link: '#' },
];

const mockArticles = [
    { id: 1, title: '전북 바이오 특화단지 유치 성공', summary: '정부가 전북을 바이오 특화단지로 최종 선정했습니다. 이는 지역 바이오 산업에 큰 활력을 불어넣을 것으로 기대됩니다.', category: 'News' },
    { id: 2, title: 'AI 기반 신약 개발, 가능성과 한계', summary: '인공지능을 활용한 신약 개발의 최신 동향과 기술적 과제를 심층 분석합니다.', category: 'Tech' },
    { id: 3, title: '제12회 국제 바이오산업 컨퍼런스 개최', summary: '글로벌 바이오 산업의 미래를 논의하는 자리가 전주에서 열립니다.', category: 'Event' },
    { id: 4, title: '혁신 스타트업을 위한 투자 유치 전략', summary: '초기 바이오 스타트업이 알아야 할 필수 투자 유치 노하우를 공유합니다.', category: 'Guide' },
    { id: 5, title: '시스템 점검 안내 (09/01 02:00)', summary: '더 나은 서비스 제공을 위해 시스템 정기 점검을 실시합니다.', category: 'Notice' },
];

const mockStats = [
  { label: '혁신기업', value: '1,247' },
  { label: '활성 프로젝트', value: '89' },
  { label: 'IP 자산', value: '3,456' },
];

const BoldHomePage = () => {
  return (
    <BoldMainLayout>
      {/* 1. Hero Section (Split Layout) */}
      <section className="hero hero--split container">
        <div className="hero__text">
          <h1 className="hero__title">Pioneering the Future of Bio-Industry</h1>
          <p className="hero__subtitle">
            JB SQUARE is your gateway to a thriving ecosystem of innovation, research, and collaboration in Jeonbuk.
          </p>
          <div className="hero__actions">
            <a href="/tech" className="btn btn--primary">Explore Tech</a>
            <a href="/companies" className="btn btn--secondary">Find Partners</a>
          </div>
        </div>
        <div className="hero__visual">
          <img src="https://images.unsplash.com/photo-1581093450021-4a7360dde414?q=80&w=2070&auto=format&fit=crop" alt="Scientist in a modern lab" />
        </div>
      </section>

      {/* 2. Services Section (Card Grid) */}
      <section className="section section--tight bg-surface">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="grid grid--cards-3">
            {mockServices.map(item => (
              <div className="card" key={item.id}>
                <div className="card__eyebrow">{item.category}</div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__body">{item.description}</p>
                <div className="card__actions">
                  <a href={item.link} className="btn btn--secondary btn--pill">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Content Grid (Masonry) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <div className="grid grid--masonry">
            {mockArticles.map((article, index) => (
              <div className={`card ${index === 0 ? 'card--featured' : ''}`} key={article.id}>
                <h3 className="card__title">{article.title}</h3>
                <p className="card__body">{article.summary}</p>
                <div className="card__actions">
                  <a href={`/articles/${article.id}`} className="btn btn--secondary">Read Article</a>
                  <span className="chip chip--open">{article.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="section section--tight bg-surface stats-section">
        <div className="container text-center">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="hero__subtitle stats-section__subtitle">We are committed to driving growth and measuring our success through tangible outcomes.</p>
          <div className="grid grid--cards-3">
            {mockStats.map(stat => (
              <div className="card" key={stat.label}>
                <h3 className="card__title stats-section__value">{stat.value}</h3>
                <p className="card__body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BoldMainLayout>
  );
};

export default BoldHomePage;
