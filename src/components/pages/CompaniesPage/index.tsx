import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import useCompanies from '../../../hooks/useCompanies';
import { Company, SizeCategory } from '../../../types/api';
import CompanyCard from '../../molecules/CompanyCard';
import TableList from '../../molecules/TableList';
import Pagination from '../../molecules/Pagination';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import EmptyState from '../../molecules/StateDisplay/EmptyState';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
`;

const FilterContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  align-items: end;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
`;

const StyledSelect = styled.select`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  width: 100%;
  &:focus {
    outline: 2px solid #4f46e5;
    border-color: #4f46e5;
  }
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  width: 100%;
  &:focus {
    outline: 2px solid #4f46e5;
    border-color: #4f46e5;
  }
`;

const SearchInputWrapper = styled(FilterGroup)`
  grid-column: span 6; // Full width on mobile
  @media (min-width: 1024px) {
    grid-column: span 2; // 2 columns on desktop
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

const ViewToggleButton = styled.button<{ $isActive: boolean }>`
  background-color: ${props => props.$isActive ? '#4f46e5' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#374151'};
  border: 1px solid #d1d5db;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left-width: 0;
  }

  &:hover {
    background-color: ${props => props.$isActive ? '#4338ca' : '#f9fafb'};
  }
`;

// --- COMPONENT ---

const CompaniesPage: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const [filters, setFilters] = useState<{
    page: number;
    limit: number;
    keyword: string;
    region: string;
    industry: string;
    sizeCategory?: SizeCategory;
    sort: 'latest' | 'name' | 'investmentSize';
  }>({
    page: 1,
    limit: 12,
    keyword: '',
    region: '',
    industry: '',
    sizeCategory: undefined,
    sort: 'latest',
  });

  const { data, loading, error } = useCompanies(filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      page: 1,
      [name]: value === '' ? undefined : value
    } as any));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  const tableData = useMemo(() => {
    const headers = ['기업명', '산업분야', '지역', '설립년도', '직원 수'];
    const rows = data?.data.map((company: Company) => [
      company.name,
      company.industry,
      company.region,
      String(company.foundedYear),
      String(company.employees),
    ]) || [];
    return { headers, rows };
  }, [data]);

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <Title>기업 정보</Title>
          <Subtitle>전북특별자치도의 유망한 바이오 기업들을 만나보세요.</Subtitle>
        </PageHeader>

        <FilterContainer>
          <SearchInputWrapper>
            <FilterLabel htmlFor="keyword-search">검색</FilterLabel>
            <StyledInput
              type="text"
              id="keyword-search"
              name="keyword"
              placeholder="기업명, 설명으로 검색..."
              value={filters.keyword}
              onChange={handleFilterChange}
            />
          </SearchInputWrapper>
          <FilterGroup>
            <FilterLabel htmlFor="region-select">지역</FilterLabel>
            <StyledSelect id="region-select" name="region" value={filters.region} onChange={handleFilterChange}>
              <option value="">전체</option>
              <option value="전주시">전주시</option>
              <option value="군산시">군산시</option>
              <option value="익산시">익산시</option>
              <option value="김제시">김제시</option>
            </StyledSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="industry-select">산업분야</FilterLabel>
            <StyledSelect id="industry-select" name="industry" value={filters.industry} onChange={handleFilterChange}>
              <option value="">전체</option>
              <option value="레드 바이오">레드 바이오</option>
              <option value="그린 바이오">그린 바이오</option>
              <option value="화이트 바이오">화이트 바이오</option>
            </StyledSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="size-select">기업규모</FilterLabel>
            <StyledSelect id="size-select" name="sizeCategory" value={filters.sizeCategory || ''} onChange={handleFilterChange}>
              <option value="">전체</option>
              <option value="Startup">스타트업</option>
              <option value="SME">중견기업</option>
              <option value="Large">대기업</option>
            </StyledSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="sort-select">정렬</FilterLabel>
            <StyledSelect id="sort-select" name="sort" value={filters.sort} onChange={handleFilterChange}>
              <option value="latest">최신 등록순</option>
              <option value="name">이름순</option>
              <option value="investmentSize">투자규모순</option>
            </StyledSelect>
          </FilterGroup>
        </FilterContainer>

        <ControlsContainer>
          <ViewToggleButton onClick={() => setViewMode('card')} $isActive={viewMode === 'card'}>
            <Icon name="grid" size={16} />
            <span>카드</span>
          </ViewToggleButton>
          <ViewToggleButton onClick={() => setViewMode('table')} $isActive={viewMode === 'table'}>
            <Icon name="list" size={16} />
            <span>테이블</span>
          </ViewToggleButton>
        </ControlsContainer>

        {loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><LoadingSkeleton count={filters.limit} className="h-[250px]" /></div>}
        {error && <ErrorState message={error.message} />}

        {!loading && !error && (
          <>
            {data?.data.length === 0 ? (
              <EmptyState message="조건에 맞는 기업이 없습니다." />
            ) : (
              <>
                {viewMode === 'card' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data?.data.map((company) => (
                      <CompanyCard key={company.id} company={company} onClick={() => navigate(`/companies/${company.id}`)} />
                    ))}
                  </div>
                ) : (
                  <TableList
                    headers={tableData.headers}
                    rows={tableData.rows}
                    onRowClick={(rowIndex) => {
                      if (data?.data[rowIndex]) {
                        navigate(`/companies/${data.data[rowIndex].id}`);
                      }
                    }}
                  />
                )}
                {data && data.pagination.totalPages > 1 && (
                  <Pagination
                    currentPage={data.pagination.page}
                    totalPages={data.pagination.totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </>
        )}
      </PageWrapper>
    </MainLayout>
  );
};

export default CompaniesPage;
