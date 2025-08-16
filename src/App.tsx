import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ClusterPage from './components/pages/ClusterPage';
import AnnouncementsPage from './components/pages/AnnouncementsPage';
import IncubationPage from './components/pages/IncubationPage';
import CompaniesPage from './components/pages/CompaniesPage';
import TechPatentsPage from './components/pages/TechPatentsPage';
import AnnouncementDetailPage from './components/pages/AnnouncementDetailPage';
import NewsDashboardPage from './components/pages/NewsDashboardPage';
import NewsListPage from './components/pages/NewsListPage';
import NewsDetailPage from './components/pages/NewsDetailPage';
import EventsListPage from './components/pages/EventsListPage';
import EventsDetailPage from './components/pages/EventsDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cluster" element={<ClusterPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/support/:category/:announcementId" element={<AnnouncementDetailPage />} />
      <Route path="/incubation" element={<IncubationPage />} />

      {/* News & Events Routes */}
      <Route path="/news" element={<NewsDashboardPage />} />
      <Route path="/news/latest" element={<NewsListPage />} />
      <Route path="/news/latest/:newsId" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsListPage />} />
      <Route path="/events/:eventId" element={<EventsDetailPage />} />

      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/tech-patents" element={<TechPatentsPage />} />
    </Routes>
  );
}

export default App;