import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar, { Filter } from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import TableList from '../../molecules/TableList';
import Badge from '../../atoms/Badge';
import useTechnologies from '../../../hooks/useTechnologies';
import { LoadingMessage, ErrorMessage } from '../../organisms/IncubationTabs/shared/StateMessages';

const categoryMap: Record<string, string[]> = {
  '레드바이오': ['의약품', '세포치료', '진단기기', '백신'],
  '그린바이오': ['종자/육종', '미생물비료', '기능성식품', '스마트팜'],
  '화이트바이오': ['바이오플라스틱', '산업용효소', '바이오연료', '환경정화'],
};

const TechnologiesListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
    keyword: '',
    category: '',
    subCategory: '',
    date_range: '',
  });
  const { data, loading, error } = useTechnologies(filters);

  const handleSearch = (keyword: string) => {
    setFilters(prev => ({ ...prev, keyword, page: 1 }));
  };

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterName]: value, page: 1 };
      if (filterName === 'category') {
        newFilters.subCategory = '';
      }
      return newFilters;
    });
  };

  const handlePageChange = (newPage: number) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  const filterDefinitions: Filter[] = [
    {
      name: 'category',
      label: '대분류',
      options: [
        { value: '', label: '전체' },
        { value: '레드바이오', label: '레드바이오' },
        { value: '그린바이오', label: '그린바이오' },
        { value: '화이트바이오', label: '화이트바이오' },
      ],
    },
    {
      name: 'subCategory',
      label: '소분류',
      disabled: !filters.category,
      options: [
        { value: '', label: '전체' },
        ...(categoryMap[filters.category] || []).map(subCat => ({ value: subCat, label: subCat })),
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

  const headers = ['기술명', '개발기관', '대분류', '소분류', '이전가능', '특허번호', '출원일'];

  const rows = data ? data.data.map(tech => [
      tech.title,
      tech.organization,
      tech.category,
      tech.subCategory,
      <Badge
        key={`badge-${tech.id}`}
        variant={tech.transferable ? 'success' : 'danger'}
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
      <div className="technologies-list-page__wrapper">
        <header className="technologies-list-page__header">
          <h1 className="technologies-list-page__title">기술 및 특허 정보</h1>
        </header>

        <div className="technologies-list-page__controls">
          <FilterBar filters={filterDefinitions} onFilterChange={handleFilterChange} />
          <SearchBar onSearch={handleSearch} />
        </div>

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
      </div>
    </MainLayout>
  );
};

export default TechnologiesListPage;
