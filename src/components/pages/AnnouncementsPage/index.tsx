import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import AnnouncementList from '../../organisms/AnnouncementList';
import AnnouncementsDashboard from '../../organisms/AnnouncementsDashboard';
import Tabs from '../../molecules/Tabs';
import useSupportPrograms from '../../../hooks/useSupportPrograms';
import AnnouncementsHero from '../../organisms/AnnouncementsHero';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

const TABS = [
  { id: 'all', label: '전체' },
  { id: 'R&D', label: 'R&D' },
  { id: '창업지원', label: '창업지원' },
  { id: '수출지원', label: '수출지원' },
  { id: '제조혁신', label: '제조혁신' },
];

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: 0 1rem 1.5rem;
  }
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

const AnnouncementsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const { data, loading, error } = useSupportPrograms({
    category: activeTab === 'all' ? undefined : activeTab,
    limit: 100,
  });

  const programs = data ? data.data : [];

  return (
    <MainLayout>
      <AnnouncementsHero />
      <ContentWrapper>
        <AnnouncementsDashboard />
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
        {loading && <LoadingMessage>지원사업 공고를 불러오는 중입니다...</LoadingMessage>}
        {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}
        {!loading && !error && <AnnouncementList programs={programs} />}
      </ContentWrapper>
    </MainLayout>
  );
};

export default AnnouncementsPage;
