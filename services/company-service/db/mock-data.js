/*
-- Database Schema for Companies/Institutions

-- Table: companies
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- '기업' or '기관'
    description TEXT,
    address VARCHAR(255),
    contact_person VARCHAR(100),
    contact_email VARCHAR(100),
    contact_phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CRUD Operations Examples

-- CREATE (INSERT)
INSERT INTO companies (name, type, description, address, contact_person, contact_email, contact_phone)
VALUES ('(주)바이오노트', '기업', '동물용 진단제품 개발 및 제조', '전라북도 익산시', '김담당', 'contact@bionote.co.kr', '063-123-4567');

-- READ (SELECT)
SELECT * FROM companies WHERE type = '기업';
SELECT * FROM companies WHERE id = 1;

-- UPDATE
UPDATE companies SET contact_person = '박담당' WHERE id = 1;

-- DELETE
DELETE FROM companies WHERE id = 1;

*/

const companies = [
  {
    id: 1,
    name: '(주)바이오노트',
    type: '기업',
    description: '동물용 진단제품 개발 및 제조를 선도하는 기업입니다.',
    address: '전라북도 익산시 왕궁면 국가식품로 100',
    contactPerson: '김담당',
    contactEmail: 'contact@bionote.co.kr',
    contactPhone: '063-123-4567'
  },
  {
    id: 2,
    name: '한국생명공학연구원 전북분원',
    type: '기관',
    description: '생명공학 분야의 국가 거점 연구기관입니다.',
    address: '전라북도 정읍시 입암면 첨단과기로 241',
    contactPerson: '이연구원',
    contactEmail: 'info@kribb.re.kr',
    contactPhone: '063-570-5600'
  },
  {
    id: 3,
    name: '전북대학교 병원',
    type: '기관',
    description: '지역 거점 국립대학교 병원. 임상 연구 및 시험 진행.',
    address: '전라북도 전주시 덕진구 건지로 20',
    contactPerson: '최교수',
    contactEmail: 'med@jbnu.ac.kr',
    contactPhone: '063-250-1114'
  }
];

module.exports = {
  companies
};
