import React, { useState } from 'react';
import MainLayout from '../../templates/MainLayout';
import AnnouncementList from '../../organisms/AnnouncementList';
import AnnouncementsDashboard from '../../organisms/AnnouncementsDashboard';
import Tabs from '../../molecules/Tabs';
import useSupportPrograms from '../../../hooks/useSupportPrograms';
import AnnouncementsHero from '../../organisms/AnnouncementsHero';

const TABS = [
  { id: 'all', label: '전체' },
  { id: 'R&D', label: 'R&D' },
  { id: '창업지원', label: '창업지원' },
  { id: '수출지원', label: '수출지원' },
  { id: '제조혁신', label: '제조혁신' },
];

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
      <div className="announcements-page__content-wrapper">
        <AnnouncementsDashboard />
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
        {loading && <p className="announcements-page__loading-message">지원사업 공고를 불러오는 중입니다...</p>}
        {error && <p className="announcements-page__error-message">오류가 발생했습니다: {error.message}</p>}
        {!loading && !error && <AnnouncementList programs={programs} />}
      </div>
    </MainLayout>
  );
};

export default AnnouncementsPage;
