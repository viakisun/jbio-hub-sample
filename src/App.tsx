import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AnnouncementsPage from './components/pages/AnnouncementsPage';
import IncubationPage from './components/pages/IncubationPage';
import CompaniesPage from './components/pages/CompaniesPage';
import TechPatentsPage from './components/pages/TechPatentsPage';
import AnnouncementDetailPage from './components/pages/AnnouncementDetailPage';
import ClusterDashboardPage from './components/pages/ClusterDashboardPage';
import ClusterHubPage from './components/pages/ClusterHubPage';
import ClusterOrgsPage from './components/pages/ClusterOrgsPage';
import ClusterPolicyPage from './components/pages/ClusterPolicyPage';
import NewsDashboardPage from './components/pages/NewsDashboardPage';
import NewsListPage from './components/pages/NewsListPage';
import NewsDetailPage from './components/pages/NewsDetailPage';
import EventsListPage from './components/pages/EventsListPage';
import EventsDetailPage from './components/pages/EventsDetailPage';
import TenantDetailPage from './components/pages/TenantDetailPage';
import TechDashboardPage from './components/pages/TechDashboardPage';
import TechOutcomesPage from './components/pages/TechOutcomesPage';
import TechTransferPage from './components/pages/TechTransferPage';
import TechCollaborationPage from './components/pages/TechCollaborationPage';
import TechDetailPage from './components/pages/TechDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cluster" element={<ClusterDashboardPage />} />
      <Route path="/cluster/hub" element={<ClusterHubPage />} />
      <Route path="/cluster/organizations" element={<ClusterOrgsPage />} />
      <Route path="/cluster/policy" element={<ClusterPolicyPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/support/:category/:announcementId" element={<AnnouncementDetailPage />} />

      {/* Incubation Routes */}
      <Route path="/incubation" element={<IncubationPage />} />
      <Route path="/incubation/tenants/:orgId" element={<TenantDetailPage />} />

      {/* News & Events Routes */}
      <Route path="/news" element={<NewsDashboardPage />} />
      <Route path="/news/latest" element={<NewsListPage />} />
      <Route path="/news/latest/:newsId" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsListPage />} />
      <Route path="/events/:eventId" element={<EventsDetailPage />} />

      {/* Tech & Patents Routes */}
      <Route path="/tech" element={<TechDashboardPage />} />
      <Route path="/tech/outcomes" element={<TechOutcomesPage />} />
      <Route path="/tech/transfer" element={<TechTransferPage />} />
      <Route path="/tech-patents" element={<TechPatentsPage />} />
      <Route path="/tech/collaboration" element={<TechCollaborationPage />} />
      <Route path="/tech/:type/:id" element={<TechDetailPage />} />

      <Route path="/companies" element={<CompaniesPage />} />
    </Routes>
  );
}

export default App;