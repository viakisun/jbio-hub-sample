import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import TableList from '../../molecules/TableList';
import Badge from '../../atoms/Badge';

// --- MOCK DATA ---
const mockPatents = [
  { id: 'patent-1', status: 'granted', title: '페로브스카이트 안정화 첨가제', number: '10-2023-0012345', filedAt: '2023-01-15', grantedAt: '2024-06-20', applicant: '한국화학연구원', isInternational: true },
  { id: 'patent-2', status: 'published', title: 'AI 기반 진단 보조 시스템', number: '10-2023-0067890', filedAt: '2023-05-20', grantedAt: null, applicant: '메디퓨처', isInternational: false },
  { id: 'patent-3', status: 'filed', title: '천연물 유래 항염증 소재', number: '10-2024-0001122', filedAt: '2024-01-10', grantedAt: null, applicant: '그린사이언스', isInternational: false },
];

const patentHeaders = ['상태', '발명의 명칭', '출원/등록번호', '출원일', '등록일', '출원인', '국제특허'];

const getStatusBadge = (status: 'granted' | 'published' | 'filed') => {
    switch(status) {
        case 'granted': return <Badge backgroundColor="#dcfce7" color="#166534">등록</Badge>;
        case 'published': return <Badge backgroundColor="#e0e7ff" color="#3730a3">공개</Badge>;
        case 'filed': return <Badge backgroundColor="#dbeafe" color="#1e40af">출원</Badge>;
    }
};

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: 1.5rem 1rem;
  }
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

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

const TechPatentsPage = () => {
  const navigate = useNavigate();

  const patentRows = mockPatents.map(p => [
      getStatusBadge(p.status as any),
      p.title,
      p.number,
      p.filedAt,
      p.grantedAt || '-',
      p.applicant,
      p.isInternational ? 'Y' : 'N'
  ]);

  const handleRowClick = (rowIndex: number) => {
    const patentId = mockPatents[rowIndex].id;
    navigate(`/tech/patents/${patentId}`);
  };

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>특허 등록 현황</PageTitle>
        </PageHeader>

        <ControlsWrapper>
          <FilterBar />
          <SearchBar />
        </ControlsWrapper>

        <TableList
            headers={patentHeaders}
            rows={patentRows}
            onRowClick={handleRowClick}
        />

        <Pagination currentPage={1} totalPages={4} />
      </PageWrapper>
    </MainLayout>
  );
};

export default TechPatentsPage;
