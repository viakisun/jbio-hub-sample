import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import TransferCard, { TransferCardData } from '../../molecules/TransferCard';

// --- MOCK DATA ---
const mockTransfers: TransferCardData[] = [
  {
    id: 'transfer-1',
    title: '고효율 태양전지용 투명 전극 기술',
    summary: '높은 광투과도와 전기 전도성을 동시에 만족시키는 신규 투명 전극 소재 및 공정 기술. 플렉서블 디스플레이 및 태양전지에 적용 가능.',
    ownerOrg: '한국화학연구원',
    status: 'open',
    deadline: '2024-10-31',
  },
  {
    id: 'transfer-2',
    title: '미세먼지 제거용 광촉매 필터 기술',
    summary: '가시광선에도 반응하여 유해물질과 미세먼지를 효과적으로 분해하는 고효율 광촉매 필터 제조 기술.',
    ownerOrg: '한국에너지기술연구원',
    status: 'closing-soon',
    deadline: '2024-08-30',
  },
  {
    id: 'transfer-3',
    title: '퇴행성 뇌질환 치료용 펩타이드 후보물질',
    summary: '알츠하이머, 파킨슨병 등 퇴행성 뇌질환의 진행을 억제하는 신규 펩타이드 후보물질. 전임상 완료.',
    ownerOrg: 'KIST',
    status: 'closed',
  },
  // Add more mock data as needed
];


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

const TechTransferPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>기술 이전</PageTitle>
        </PageHeader>

        <ControlsWrapper>
          <FilterBar />
          <SearchBar />
        </ControlsWrapper>

        <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
          {mockTransfers.map((transfer) => (
            <TransferCard key={transfer.id} transfer={transfer} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={5} />
      </PageWrapper>
    </MainLayout>
  );
};

export default TechTransferPage;
