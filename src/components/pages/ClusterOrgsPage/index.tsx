import React, { useState } from 'react';
import MainLayout from '../../templates/MainLayout';
import useOrganizations from '../../../hooks/useOrganizations';
import OrganizationCard from '../../molecules/OrganizationCard';
import TableList from '../../molecules/TableList';
import Grid from '../../atoms/Grid';
import Button from '../../atoms/Button';
import GlobalFilters from '../../organisms/GlobalFilters';

const ClusterOrgsPage = () => {
  const { data, loading, error } = useOrganizations();
  const [view, setView] = useState<'card' | 'table'>('card');

  const tableHeaders = ['기관명', '유형', '지역', '주요 서비스', '요약'];
  const tableRows = data?.organizations.map(org => [
    org.name,
    org.type,
    org.region,
    org.services.join(', '),
    org.summary,
  ]) || [];

  return (
    <MainLayout>
      <div className="cluster-orgs-page__wrapper">
        <header className="cluster-orgs-page__header">
          <h1 className="cluster-orgs-page__title">JB 지원기관 현황</h1>
        </header>

        <GlobalFilters />

        <div className="cluster-orgs-page__view-toggle">
          <Button onClick={() => setView('card')} variant={view === 'card' ? 'primary' : 'secondary'}>카드</Button>
          <Button onClick={() => setView('table')} variant={view === 'table' ? 'primary' : 'secondary'} style={{ marginLeft: '0.5rem' }}>테이블</Button>
        </div>

        {loading && <p>로딩 중...</p>}
        {error && <p>에러: {error.message}</p>}
        {data && (
          view === 'card' ? (
            <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
              {data.organizations.map(org => (
                <OrganizationCard key={org.id} organization={org} onClick={() => { /* TODO: implement navigation to organization detail page */ }} />
              ))}
            </Grid>
          ) : (
            <TableList headers={tableHeaders} rows={tableRows} />
          )
        )}
      </div>
    </MainLayout>
  );
};

export default ClusterOrgsPage;
