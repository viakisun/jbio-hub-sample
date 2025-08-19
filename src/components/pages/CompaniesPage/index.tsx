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
    setFilters(prev => ({ ...prev, page: 1, [e.target.name]: e.target.value }));
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">기업 정보</h1>
        <p className="text-gray-600">전북특별자치도의 유망한 바이오 기업들을 만나보세요.</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap items-center gap-4 border border-gray-200">
        <input
          type="text"
          name="keyword"
          placeholder="기업명, 설명으로 검색..."
          value={filters.keyword}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md flex-grow focus:ring-2 focus:ring-indigo-500"
        />
        <select name="region" value={filters.region} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="">전체 지역</option>
          <option value="전주시">전주시</option>
          <option value="군산시">군산시</option>
          <option value="익산시">익산시</option>
          <option value="김제시">김제시</option>
        </select>
        <select name="industry" value={filters.industry} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="">전체 산업</option>
          <option value="레드 바이오">레드 바이오</option>
          <option value="그린 바이오">그린 바이오</option>
          <option value="화이트 바이오">화이트 바이오</option>
        </select>
        <select name="sizeCategory" value={filters.sizeCategory || ''} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="">전체 규모</option>
          <option value="Startup">스타트업</option>
          <option value="SME">중견기업</option>
          <option value="Large">대기업</option>
        </select>
        <select name="sort" value={filters.sort} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="latest">최신 등록순</option>
          <option value="name">이름순</option>
          <option value="investmentSize">투자규모순</option>
        </select>
      </div>

      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button onClick={() => setViewMode('card')} className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${viewMode === 'card' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
            카드
          </button>
          <button onClick={() => setViewMode('table')} className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${viewMode === 'table' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
            테이블
          </button>
        </div>
      </div>

      {loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><LoadingSkeleton count={filters.limit} /></div>}
      {error && <ErrorState message={error.message} />}

      {!loading && !error && (
        <>
          {data?.data.length === 0 ? (
            <EmptyState message="조건에 맞는 기업이 없습니다." />
          ) : (
            <>
              {viewMode === 'card' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </MainLayout>
  );
};

export default CompaniesPage;
