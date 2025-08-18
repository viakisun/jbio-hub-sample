import React, { useState } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Grid from '../../atoms/Grid';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import IncubationCenterCard from '../../molecules/IncubationCenterCard'; // Import new card
import useIncubationCenters from '../../../hooks/useIncubationCenters'; // Import new hook
import { LoadingMessage, ErrorMessage } from './shared/StateMessages'; // Assuming shared styled components for states

// --- MOCK DATA ---
// Mock data is removed.

// --- STYLED COMPONENTS ---

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

// --- COMPONENT ---

const TenantsView = () => {
  // State for filters
  const [filters, setFilters] = useState({ keyword: '', region: '', hasVacancy: undefined });

  // Use the hook to fetch data with current filters
  const { data: centers, loading, error } = useIncubationCenters(filters);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, keyword: query }));
  };

  return (
    <div>
      <ControlsWrapper>
        <FilterBar />
        <SearchBar onSearch={handleSearch} />
      </ControlsWrapper>

      {loading && <LoadingMessage>창업보육센터 정보를 불러오는 중입니다...</LoadingMessage>}
      {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}

      {!loading && !error && centers && (
        <>
          <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
            {centers.map(center => (
              <IncubationCenterCard key={center.id} center={center} />
            ))}
          </Grid>
          {/* Pagination would need to be wired up if the API supported it */}
          {/* <Pagination currentPage={1} totalPages={3} /> */}
        </>
      )}
    </div>
  );
};

export default TenantsView;
