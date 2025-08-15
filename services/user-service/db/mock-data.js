/*
-- Database Schema for Users

-- Table: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Never store plain text passwords!
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'user', -- 'user', 'admin'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

*/

const users = [
  {
    id: 1,
    username: 'testuser',
    password: 'password123', // In a real app, this would be a hash
    email: 'testuser@example.com',
    fullName: '테스트 사용자',
    role: 'user',
    interests: ['바이오', '의료'],
    consultationHistory: [1]
  },
  {
    id: 2,
    username: 'admin',
    password: 'adminpassword',
    email: 'admin@example.com',
    fullName: '관리자',
    role: 'admin',
    interests: [],
    consultationHistory: []
  }
];

module.exports = {
  users
};
