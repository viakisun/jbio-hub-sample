import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar, { Filter } from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import TableList from '../../molecules/TableList';
import Badge from '../../atoms/Badge';
import useTechnologies from '../../../hooks/useTechnologies';
import { LoadingMessage, ErrorMessage } from '../../organisms/IncubationTabs/shared/StateMessages';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

// --- COMPONENT ---

const TechnologiesListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ page: 1, limit: 20, keyword: '', category: '', date_range: '' });
  const { data, loading, error } = useTechnologies(filters);

  const handleSearch = (keyword: string) => {
    setFilters(prev => ({ ...prev, keyword, page: 1 }));
  };

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  const filterDefinitions: Filter[] = [
    {
      name: 'category',
      label: '카테고리',
      options: [
        { value: '', label: '전체' },
        { value: '플랫폼 기술', label: '플랫폼 기술' },
        { value: '레드바이오', label: '레드바이오' },
        { value: '그린바이오', label: '그린바이오' },
      ],
    },
    {
      name: 'date_range',
      label: '등록일',
      options: [
        { value: '', label: '전체' },
        { value: 'month', label: '최근 1개월' },
        { value: 'year', label: '최근 1년' },
      ],
    },
  ];

  const headers = ['기술명', '개발기관', '카테고리', '이전가능', '특허번호', '출원일'];

  const rows = data ? data.data.map(tech => [
      tech.title,
      tech.organization,
      tech.category,
      <Badge
        key={`badge-${tech.id}`}
        $variant={tech.transferable ? 'success' : 'danger'}
      >
        {tech.transferable ? '기술이전 가능' : '기술이전 불가'}
      </Badge>,
      tech.patentNumber || '-',
      tech.applicationDate || '-'
  ]) : [];

  const handleRowClick = (rowIndex: number) => {
    if (data) {
      const techId = data.data[rowIndex].id;
      navigate(`/tech-summary/detail/${techId}`);
    }
  };

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>기술 및 특허 정보</PageTitle>
        </PageHeader>

        <ControlsWrapper>
          <FilterBar filters={filterDefinitions} onFilterChange={handleFilterChange} />
          <SearchBar onSearch={handleSearch} />
        </ControlsWrapper>

        {loading && <LoadingMessage>기술 정보를 불러오는 중입니다...</LoadingMessage>}
        {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}
        {!loading && !error && data && (
          <>
            <TableList
                headers={headers}
                rows={rows}
                onRowClick={handleRowClick}
            />
            <Pagination
              currentPage={data.pagination.page}
              totalPages={data.pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </PageWrapper>
    </MainLayout>
  );
};

export default TechnologiesListPage;
