/*
-- Database Schema for Announcements
-- This file contains mock data for development purposes.
-- In a real production environment, you would use a proper database.

-- Table: announcements
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CRUD Operations Examples

-- CREATE (INSERT)
INSERT INTO announcements (title, content, author) VALUES ('바이오 데이터 분석 전문가 채용', '상세 내용은 첨부파일 확인', '국립보건연구원');

-- READ (SELECT)
-- 모든 공고 조회
SELECT * FROM announcements ORDER BY created_at DESC;
-- 특정 공고 조회
SELECT * FROM announcements WHERE id = 1;

-- UPDATE
UPDATE announcements SET title = '수정된 제목', content = '수정된 내용' WHERE id = 1;

-- DELETE
DELETE FROM announcements WHERE id = 1;

*/

const announcements = [
  {
    id: 1,
    title: '2025년 상반기 바이오 연구직 채용 공고',
    content: '유전체 분석 및 단백질체학 연구 분야의 신규 연구원을 모집합니다. 상세 요강은 홈페이지를 참고하세요.',
    author: '전북바이오융합산업진흥원',
    createdAt: '2025-08-10T10:00:00Z',
    files: [{ name: '채용공고.pdf', url: '/files/recruitment_notice_01.pdf' }],
    relatedLinks: [{ title: '진흥원 홈페이지', url: 'https://www.jif.re.kr/' }]
  },
  {
    id: 2,
    title: '미생물 배양 기술 이전 설명회 개최',
    content: '신규 미생물 배양 기술에 대한 기술 이전 설명회를 개최합니다. 관심 있는 기업 및 기관의 많은 참여 바랍니다.',
    author: '한국생명공학연구원',
    createdAt: '2025-08-05T14:30:00Z',
    files: [{ name: '기술이전설명회_안내.hwp', url: '/files/tech_briefing_01.hwp' }],
    relatedLinks: []
  },
  {
    id: 3,
    title: '제3회 바이오산업 포럼 참가 신청',
    content: '미래 바이오산업의 전망을 주제로 제3회 바이오산업 포럼이 개최됩니다. 참가 신청은 8월 20일까지입니다.',
    author: '산업통상자원부',
    createdAt: '2025-07-28T09:00:00Z',
    files: [],
    relatedLinks: [{ title: '포럼 신청 페이지', url: 'https://example.com/forum-signup' }]
  }
];

module.exports = {
  announcements
};
