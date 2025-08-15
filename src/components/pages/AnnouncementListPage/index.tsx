import React from 'react';
import MainLayout from '../../templates/MainLayout';
import FilterBar from '../../organisms/FilterBar';
import AnnouncementList from '../../organisms/AnnouncementList';

/**
 * ## UI-01-02: Announcement List Page
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: FilterBar
 * - Organism: AnnouncementList
 *
 * @returns {JSX.Element}
 */
const AnnouncementListPage = () => {
  const announcements = [
    {
      id: 1,
      title: '2024년 바이오헬스 R&D 지원사업',
      organization: '전라북도',
      deadline: '2024-12-31',
      budget: '최대 2억원',
      status: 'active' as 'active' | 'urgent',
      daysLeft: 45
    },
    {
      id: 2,
      title: '첨단의료기기 기술개발 지원',
      organization: 'KIAT',
      deadline: '2024-09-15',
      budget: '최대 10억원',
      status: 'urgent' as 'active' | 'urgent',
      daysLeft: 8
    },
    {
      id: 3,
      title: '바이오 창업기업 육성사업',
      organization: '중소벤처기업부',
      deadline: '2024-10-30',
      budget: '최대 3억원',
      status: 'active' as 'active' | 'urgent',
      daysLeft: 25
    }
  ];

  return (
    <MainLayout>
      <h1 style={{ marginBottom: '2rem' }}>공고 목록</h1>
      <FilterBar />
      <AnnouncementList announcements={announcements} />
    </MainLayout>
  );
};

export default AnnouncementListPage;
