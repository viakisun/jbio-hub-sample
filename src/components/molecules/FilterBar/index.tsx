import React from 'react';
import styled from 'styled-components';

const FilterBarWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const FilterPlaceholder = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <FilterPlaceholder>FilterBar: 날짜, 카테고리 등 (구현 예정)</FilterPlaceholder>
    </FilterBarWrapper>
  );
};

export default FilterBar;
