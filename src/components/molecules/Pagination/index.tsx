import React from 'react';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination__button">
        이전
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`pagination__button ${i + 1 === currentPage ? 'pagination__button--active' : ''}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination__button">
        다음
      </button>
    </nav>
  );
};

export default Pagination;
