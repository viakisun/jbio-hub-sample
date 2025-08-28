import React, { useState } from 'react';
import Grid from '../../atoms/Grid';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import IncubationCenterCard from '../../molecules/IncubationCenterCard';
import useIncubationCenters from '../../../hooks/useIncubationCenters';
import { LoadingMessage, ErrorMessage } from './shared/StateMessages';

const TenantsView = () => {
  const [filters, setFilters] = useState({ keyword: '', region: '', hasVacancy: undefined });
  const { data: centers, loading, error } = useIncubationCenters(filters);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, keyword: query }));
  };

  return (
    <div className="incubation-tab-view tenants-view">
      <div className="tenants-view__controls">
        <FilterBar />
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && <LoadingMessage>창업보육센터 정보를 불러오는 중입니다...</LoadingMessage>}
      {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}

      {!loading && !error && centers && (
        <>
          <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
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
