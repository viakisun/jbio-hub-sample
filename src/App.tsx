import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import HomePageSample1 from './components/pages/HomePageSample1';
import HomePageSample2 from './components/pages/HomePageSample2';
import HomePageSample3 from './components/pages/HomePageSample3';
import HomePageSample4 from './components/pages/HomePageSample4';
import HomePageSample5 from './components/pages/HomePageSample5';
import HomePageSample6 from './components/pages/HomePageSample6';
import AnnouncementsPage from './components/pages/AnnouncementsPage';
import IncubationPage from './components/pages/IncubationPage';
import CompaniesPage from './components/pages/CompaniesPage';
import TechnologiesListPage from './components/pages/TechnologiesListPage';
import AnnouncementDetailPage from './components/pages/AnnouncementDetailPage';
import ClusterDashboardPage from './components/pages/ClusterDashboardPage';
import ClusterHubPage from './components/pages/ClusterHubPage';
import ClusterOrgsPage from './components/pages/ClusterOrgsPage';
import ClusterPolicyPage from './components/pages/ClusterPolicyPage';
import OrganizationDetailPage from './components/pages/OrganizationDetailPage';
import PolicyDetailPage from './components/pages/PolicyDetailPage';
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
import CompanyDashboardPage from './components/pages/CompanyDashboardPage';
import CompanyDetailPage from './components/pages/CompanyDetailPage';
import ArticleListPage from './components/pages/ArticleListPage';
import ArticleDetailPage from './components/pages/ArticleDetailPage';
import SupportProgramDetailPage from './components/pages/SupportProgramDetailPage';
import StyleGuidePage from './components/pages/StyleGuidePage';
import TechHubPage from './components/pages/TechHubPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-sample1" element={<HomePageSample1 />} />
      <Route path="/home-sample2" element={<HomePageSample2 />} />
      <Route path="/home-sample3" element={<HomePageSample3 />} />
      <Route path="/home-sample4" element={<HomePageSample4 />} />
      <Route path="/home-sample5" element={<HomePageSample5 />} />
      <Route path="/home-sample6" element={<HomePageSample6 />} />
      <Route path="/cluster" element={<ClusterDashboardPage />} />
      <Route path="/cluster/hub" element={<ClusterHubPage />} />
      <Route path="/cluster/organizations" element={<ClusterOrgsPage />} />
      <Route path="/cluster/organizations/:orgId" element={<OrganizationDetailPage />} />
      <Route path="/cluster/policy" element={<ClusterPolicyPage />} />
      <Route path="/cluster/policy/:policyId" element={<PolicyDetailPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/support-programs/:id" element={<SupportProgramDetailPage />} />

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
      <Route path="/tech/patents" element={<TechnologiesListPage />} />
      <Route path="/tech/collaboration" element={<TechCollaborationPage />} />
      <Route path="/tech-summary/detail/:id" element={<TechDetailPage />} />

      {/* Company & Article Routes */}
      <Route path="/company" element={<CompanyDashboardPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/companies/:id" element={<CompanyDetailPage />} />
      <Route path="/articles" element={<ArticleListPage />} />
      <Route path="/articles/:id" element={<ArticleDetailPage />} />

      {/* Development Routes */}
      <Route path="/style-guide" element={<StyleGuidePage />} />
      <Route path="/tech-hub" element={<TechHubPage />} />
    </Routes>
  );
}

export default App;