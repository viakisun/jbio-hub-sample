/*
-- Database Schema for Content (News and Tech)

-- Table: news
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'news', -- 'news', 'notice'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: techs
CREATE TABLE techs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    field VARCHAR(100), -- '바이오', '농생명', '의료'
    description TEXT,
    presenter VARCHAR(100), -- 발표자/연구자
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

*/

const news = [
  {
    id: 1,
    title: '전북 바이오 특화단지 유치 성공',
    content: '정부가 전북을 바이오 특화단지로 최종 선정했습니다. 이로써 지역 내 바이오 산업의 성장이 기대됩니다.',
    category: 'news',
    createdAt: '2025-08-12T11:00:00Z'
  },
  {
    id: 2,
    title: '시스템 점검 안내 (09/01 02:00 ~ 04:00)',
    content: '더 나은 서비스 제공을 위해 시스템 정기 점검을 실시합니다. 점검 시간에는 서비스 이용이 일시 중단될 수 있습니다.',
    category: 'notice',
    createdAt: '2025-08-11T17:00:00Z'
  }
];

const techs = [
  {
    id: 1,
    title: '유전자 가위 기술을 이용한 신품종 개발',
    field: '농생명',
    description: 'CRISPR-Cas9 기술을 활용하여 특정 유전자를 편집, 병충해에 강한 신품종 쌀을 개발하는 데 성공했습니다.',
    presenter: '한국농업기술원',
    createdAt: '2025-08-01T15:00:00Z'
  },
  {
    id: 2,
    title: '미생물 기반 암 치료제 개발 성과',
    field: '의료',
    description: '장내 미생물을 활용한 면역 항암 치료제의 초기 임상 시험에서 긍정적인 결과를 얻었습니다.',
    presenter: '(주)마이크로바이옴',
    createdAt: '2025-07-20T10:30:00Z'
  }
];

module.exports = {
  news,
  techs
};
