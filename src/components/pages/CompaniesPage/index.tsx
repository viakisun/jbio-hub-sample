import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="companies-page__wrapper">
        <header className="companies-page__header">
          <h1 className="companies-page__title">기업 정보</h1>
          <p className="companies-page__subtitle">전북특별자치도의 유망한 바이오 기업들을 만나보세요.</p>
        </header>

        <div className="companies-page__filter-container">
          <div className="companies-page__search-input-wrapper">
            <label htmlFor="keyword-search" className="companies-page__filter-label">검색</label>
            <input
              type="text"
              id="keyword-search"
              name="keyword"
              placeholder="기업명, 설명으로 검색..."
              value={filters.keyword}
              onChange={handleFilterChange}
              className="companies-page__input"
            />
          </div>
          <div className="companies-page__filter-group">
            <label htmlFor="region-select" className="companies-page__filter-label">지역</label>
            <select id="region-select" name="region" value={filters.region} onChange={handleFilterChange} className="companies-page__select">
              <option value="">전체</option>
              <option value="전주시">전주시</option>
              <option value="군산시">군산시</option>
              <option value="익산시">익산시</option>
              <option value="김제시">김제시</option>
            </select>
          </div>
          <div className="companies-page__filter-group">
            <label htmlFor="industry-select" className="companies-page__filter-label">산업분야</label>
            <select id="industry-select" name="industry" value={filters.industry} onChange={handleFilterChange} className="companies-page__select">
              <option value="">전체</option>
              <option value="레드 바이오">레드 바이오</option>
              <option value="그린 바이오">그린 바이오</option>
              <option value="화이트 바이오">화이트 바이오</option>
            </select>
          </div>
          <div className="companies-page__filter-group">
            <label htmlFor="size-select" className="companies-page__filter-label">기업규모</label>
            <select id="size-select" name="sizeCategory" value={filters.sizeCategory || ''} onChange={handleFilterChange} className="companies-page__select">
              <option value="">전체</option>
              <option value="Startup">스타트업</option>
              <option value="SME">중견기업</option>
              <option value="Large">대기업</option>
            </select>
          </div>
          <div className="companies-page__filter-group">
            <label htmlFor="sort-select" className="companies-page__filter-label">정렬</label>
            <select id="sort-select" name="sort" value={filters.sort} onChange={handleFilterChange} className="companies-page__select">
              <option value="latest">최신 등록순</option>
              <option value="name">이름순</option>
              <option value="investmentSize">투자규모순</option>
            </select>
          </div>
        </div>

        <div className="companies-page__controls-container">
          <button onClick={() => setViewMode('card')} className={`companies-page__view-toggle-button ${viewMode === 'card' ? 'companies-page__view-toggle-button--active' : ''}`}>
            <Icon name="grid" size={16} />
            <span>카드</span>
          </button>
          <button onClick={() => setViewMode('table')} className={`companies-page__view-toggle-button ${viewMode === 'table' ? 'companies-page__view-toggle-button--active' : ''}`}>
            <Icon name="list" size={16} />
            <span>테이블</span>
          </button>
        </div>

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
      </div>
    </MainLayout>
  );
};

export default CompaniesPage;
