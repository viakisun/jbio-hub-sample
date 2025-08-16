import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import Tabs from '../../molecules/Tabs';
import DashboardView from '../../organisms/IncubationTabs/DashboardView';
import TenantsView from '../../organisms/IncubationTabs/TenantsView';
import VacancyView from '../../organisms/IncubationTabs/VacancyView';
import ApplyView from '../../organisms/IncubationTabs/ApplyView';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.header`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

// --- COMPONENT ---

const IncubationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'dashboard';

  const handleTabClick = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  const tabs = [
    { id: 'dashboard', label: '대시보드' },
    { id: 'tenants', label: '입주기관' },
    { id: 'vacancy', label: '공실 현황' },
    { id: 'apply', label: '절차/신청' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tenants':
        return <TenantsView />;
      case 'vacancy':
        return <VacancyView />;
      case 'apply':
        return <ApplyView />;
      case 'dashboard':
      default:
        return <DashboardView />;
    }
  };

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>JB 창업보육센터</PageTitle>
        </PageHeader>
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
        <div>
          {renderContent()}
        </div>
      </PageWrapper>
    </MainLayout>
  );
};

export default IncubationPage;
