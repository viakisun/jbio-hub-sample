import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const Placeholder = styled.div`
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
`;

const GlobalFilters = () => {
  return (
    <FiltersWrapper>
      <Placeholder>Global Filters (지역, 분야, 기관유형, 키워드) - 구현 예정</Placeholder>
    </FiltersWrapper>
  );
};

export default GlobalFilters;
