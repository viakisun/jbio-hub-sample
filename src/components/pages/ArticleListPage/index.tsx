import React, { useState } from 'react';
import MainLayout from '../../templates/MainLayout';
import useArticles from '../../../hooks/useArticles';
import ArticleCard from '../../molecules/ArticleCard';
import Pagination from '../../molecules/Pagination';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import EmptyState from '../../molecules/StateDisplay/EmptyState';

const ArticleListPage: React.FC = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 9,
    tag: '',
    sort: 'latest' as 'latest' | 'popularity',
  });

  const { data, loading, error } = useArticles(filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      page: 1,
      [name]: value
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  return (
    <MainLayout>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">인터뷰 & 기획기사</h1>
        <p className="text-lg text-gray-600">전북 바이오 기업들의 생생한 이야기를 만나보세요.</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-wrap items-center gap-4 border border-gray-200">
        <input
          type="text"
          name="tag"
          placeholder="태그로 검색 (예: AI, 신약개발)"
          value={filters.tag}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md flex-grow focus:ring-2 focus:ring-indigo-500"
        />
        <select name="sort" value={filters.sort} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="latest">최신순</option>
          <option value="popularity">인기순</option>
        </select>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(filters.limit)].map((_, i) => <LoadingSkeleton key={i} className="h-96" />)}
        </div>
      )}
      {error && <ErrorState message={error.message} />}

      {!loading && !error && (
        <>
          {data?.data.length === 0 ? (
            <EmptyState message="조건에 맞는 기사가 없습니다." />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.data.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
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

export default ArticleListPage;
