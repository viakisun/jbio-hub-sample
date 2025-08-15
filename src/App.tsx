import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ClusterPage from './components/pages/ClusterPage';
import AnnouncementsPage from './components/pages/AnnouncementsPage';
import IncubationPage from './components/pages/IncubationPage';
import NewsEventsPage from './components/pages/NewsEventsPage';
import CompaniesPage from './components/pages/CompaniesPage';
import TechPatentsPage from './components/pages/TechPatentsPage';
import AnnouncementDetailPage from './components/pages/AnnouncementDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cluster" element={<ClusterPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/support/:category/:announcementId" element={<AnnouncementDetailPage />} />
      <Route path="/incubation" element={<IncubationPage />} />
      <Route path="/news-events" element={<NewsEventsPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/tech-patents" element={<TechPatentsPage />} />
    </Routes>
  );
}

export default App;