/*
-- Database Schema for Infrastructure

-- Table: infrastructure
CREATE TABLE infrastructure (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100), -- e.g., '연구시설', '편의시설'
    address VARCHAR(255),
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CRUD Operations Examples

-- CREATE (INSERT)
INSERT INTO infrastructure (name, category, address, latitude, longitude, description)
VALUES ('전북바이오융합산업진흥원', '연구시설', '전주시 덕진구', 35.847421, 127.129223, '바이오 산업의 핵심 연구 기관');

-- READ (SELECT)
SELECT * FROM infrastructure;

-- UPDATE
UPDATE infrastructure SET name = 'JIF' WHERE id = 1;

-- DELETE
DELETE FROM infrastructure WHERE id = 1;

*/

const infrastructure = [
  {
    id: 1,
    name: '전북바이오융합산업진흥원',
    category: '연구시설',
    address: '전라북도 전주시 덕진구 월드컵로 305',
    latitude: 35.8613,
    longitude: 127.0648,
    description: '바이오 산업의 핵심 연구 및 지원 기관.'
  },
  {
    id: 2,
    name: '한국생명공학연구원 전북분원',
    category: '연구시설',
    address: '전라북도 정읍시 입암면 첨단과기로 241',
    latitude: 35.5931,
    longitude: 126.8665,
    description: '국가 생명공학 연구의 중심.'
  },
  {
    id: 3,
    name: '농축산용 미생물산업육성지원센터',
    category: '지원시설',
    address: '전라북도 정읍시 신정동 1558-2',
    latitude: 35.5675,
    longitude: 126.8820,
    description: '농축산용 미생물 관련 기업 지원 및 육성.'
  },
  {
    id: 4,
    name: '안전성평가연구소 전북분소',
    category: '연구시설',
    address: '전라북도 정읍시 입암면 첨단과기로 190',
    latitude: 35.5900,
    longitude: 126.8632,
    description: '화학·바이오 물질의 안전성 평가 전문 연구기관.'
  }
];

module.exports = {
  infrastructure
};
