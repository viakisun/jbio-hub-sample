import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../atoms/Button';

// --- STYLED COMPONENTS ---

const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

const PageButton = styled(Button)<{ isActive?: boolean }>`
  min-width: 40px;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #4f46e5;
      color: white;
      border-color: #4f46e5;

      &:hover {
        background-color: #4338ca;
        border-color: #4338ca;
      }
    `}
`;

// --- COMPONENT ---

const Pagination = () => {
  // This is a placeholder implementation.
  // In a real app, this would take props like `currentPage`, `totalPages`, `onPageChange`.
  const currentPage = 3;
  const totalPages = 10;

  return (
    <PaginationWrapper>
      <PageButton disabled={currentPage === 1}>이전</PageButton>
      {[...Array(totalPages)].map((_, i) => (
        <PageButton key={i} isActive={i + 1 === currentPage}>
          {i + 1}
        </PageButton>
      ))}
      <PageButton disabled={currentPage === totalPages}>다음</PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
