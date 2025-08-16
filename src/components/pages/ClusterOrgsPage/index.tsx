import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import useOrganizations from '../../../hooks/useOrganizations';
import OrganizationCard from '../../molecules/OrganizationCard';
import TableList from '../../molecules/TableList';
import Grid from '../../atoms/Grid';
import Button from '../../atoms/Button';
import GlobalFilters from '../../organisms/GlobalFilters';

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const ViewToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

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
      <PageWrapper>
        <Header>
          <Title>JB 지원기관 현황</Title>
        </Header>

        <GlobalFilters />

        <ViewToggle>
          <Button onClick={() => setView('card')} $variant={view === 'card' ? 'primary' : 'secondary'}>카드</Button>
          <Button onClick={() => setView('table')} $variant={view === 'table' ? 'primary' : 'secondary'} style={{ marginLeft: '0.5rem' }}>테이블</Button>
        </ViewToggle>

        {loading && <p>로딩 중...</p>}
        {error && <p>에러: {error.message}</p>}
        {data && (
          view === 'card' ? (
            <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
              {data.organizations.map(org => (
                <OrganizationCard key={org.id} organization={org} onClick={() => { /* TODO: implement navigation to organization detail page */ }} />
              ))}
            </Grid>
          ) : (
            <TableList headers={tableHeaders} rows={tableRows} />
          )
        )}
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterOrgsPage;
