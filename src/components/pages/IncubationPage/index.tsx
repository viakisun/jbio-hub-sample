import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Tabs from '../../molecules/Tabs';
import DashboardView from '../../organisms/IncubationTabs/DashboardView';
import TenantsView from '../../organisms/IncubationTabs/TenantsView';
import VacancyView from '../../organisms/IncubationTabs/VacancyView';
import ApplyView from '../../organisms/IncubationTabs/ApplyView';
import IncubationHero from '../../organisms/IncubationHero';

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
      <IncubationHero />
      <div className="incubation-page__content-wrapper">
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
        <div>
          {renderContent()}
        </div>
      </div>
    </MainLayout>
  );
};

export default IncubationPage;
