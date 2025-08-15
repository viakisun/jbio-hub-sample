/*
-- Database Schema for Consultations

-- Table: consultations
CREATE TABLE consultations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    organization VARCHAR(100),
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'submitted', -- 'submitted', 'in_progress', 'completed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CRUD Operations Examples

-- CREATE (INSERT)
INSERT INTO consultations (name, email, subject, body)
VALUES ('홍길동', 'gildong@example.com', '기술이전 문의', 'A기술에 대한 상세 자료를 받고 싶습니다.');

-- READ (SELECT)
SELECT * FROM consultations WHERE status = 'submitted';

-- UPDATE
UPDATE consultations SET status = 'in_progress' WHERE id = 1;

*/

// In-memory store for consultation requests
const consultations = [];

module.exports = {
  consultations
};
