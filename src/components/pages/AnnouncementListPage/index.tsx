import React from 'react';
import MainLayout from '../../templates/MainLayout';
import FilterBar from '../../organisms/FilterBar';
import AnnouncementList from '../../organisms/AnnouncementList';
import useSupportPrograms from '../../../hooks/useSupportPrograms';
import { LoadingMessage, ErrorMessage } from '../../organisms/IncubationTabs/shared/StateMessages';

/**
 * ## UI-01-02: Announcement List Page
 * This page displays a list of all support programs.
 *
 * @returns {JSX.Element}
 */
const AnnouncementListPage = () => {
  const { data, loading, error } = useSupportPrograms();

  const programs = data ? data.data : [];

  return (
    <MainLayout>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>전체 지원사업 공고</h1>
        <FilterBar />

        {loading && <LoadingMessage>공고를 불러오는 중입니다...</LoadingMessage>}
        {error && <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>}
        {!loading && !error && <AnnouncementList programs={programs} />}
      </div>
    </MainLayout>
  );
};

export default AnnouncementListPage;
