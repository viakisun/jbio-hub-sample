import React, { useState } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import MainLayout from '../../templates/MainLayout';
import AnnouncementList from '../../organisms/AnnouncementList';
import AnnouncementsDashboard from '../../organisms/AnnouncementsDashboard';
import Tabs from '../../molecules/Tabs';
import useSupportPrograms from '../../../hooks/useSupportPrograms'; // Import the CORRECT hook

// --- DATA MODELS ---
// Mock data and old interfaces are removed.

// Note: These categories should align with backend mock data for filtering to work.
const TABS = [
  { id: 'all', label: '전체' },
  { id: 'R&D', label: 'R&D' },
  { id: '창업지원', label: '창업지원' },
  { id: '수출지원', label: '수출지원' },
  { id: '제조혁신', label: '제조혁신' },
];


// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: 1.5rem 1rem;
  }
`;

const PageHeader = styled.header`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

const LoadingMessage = styled.p`
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  color: #4b5563;
`;

const ErrorMessage = styled(LoadingMessage)`
  color: #ef4444;
`;

// --- COMPONENT ---

const AnnouncementsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Use the correct hook to fetch data based on the active tab
  const { data, loading, error } = useSupportPrograms({
    category: activeTab === 'all' ? undefined : activeTab,
    limit: 100, // Fetch a large number for now
  });

  const programs = data ? data.data : [];

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>JB 지원사업공고</PageTitle>
          <PageSubtitle>전북 바이오산업의 성장을 위한 다양한 지원사업을 확인하세요.</PageSubtitle>
        </PageHeader>

        {/* This component might need its own data hook later */}
        <AnnouncementsDashboard />

        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />

        {loading && <LoadingMessage>지원사업 공고를 불러오는 중입니다...</LoadingMessage>}
        {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}
        {!loading && !error && <AnnouncementList programs={programs} />}

      </PageWrapper>
    </MainLayout>
  );
};

export default AnnouncementsPage;
