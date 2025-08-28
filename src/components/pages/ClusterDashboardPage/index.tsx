import React from 'react';
import MainLayout from '../../templates/MainLayout';
import KPIGroup from '../../organisms/KPIGroup';
import GlobalFilters from '../../organisms/GlobalFilters';
import ExplorationCard from '../../molecules/ExplorationCard';
import Grid from '../../atoms/Grid';
import Badge from '../../atoms/Badge';
import useDashboardData from '../../../hooks/useDashboardData';

const explorationCards = [
  {
    title: 'JB BIO클러스터',
    description: '전북 바이오 클러스터를 지도 기반으로 탐색하고 기관들의 위치와 밀집도를 한눈에 파악하세요.',
    buttonText: '지도로 보기',
    to: '/cluster/hub',
  },
  {
    title: '지원기관 현황',
    description: '분야별, 지역별, 유형별로 지원기관을 찾고 상세 정보를 비교하여 최적의 파트너를 만나보세요.',
    buttonText: '기관 살펴보기',
    to: '/cluster/organizations',
  },
  {
    title: '바이오지원정책',
    description: '간단한 자격 진단을 통해 현재 신청 가능한 정부 및 지자체의 지원 정책을 확인하고 신청하세요.',
    buttonText: '자격 확인하기',
    to: '/cluster/policy',
  },
];

const ClusterDashboardPage = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return <MainLayout><div>로딩 중...</div></MainLayout>;
  }

  if (error) {
    return <MainLayout><div>에러 발생: {error.message}</div></MainLayout>;
  }

  return (
    <MainLayout>
      <div className="cluster-dashboard-page__wrapper">
        <header className="cluster-dashboard-page__header">
          <h1 className="cluster-dashboard-page__title">JB-SQUARE: 클러스터 허브</h1>
          <p className="cluster-dashboard-page__subtitle">
            전북 바이오 클러스터의 모든 정보를 한 곳에서. 기관, 정책, 인프라를 탐색하고 비즈니스 기회를 발견하세요.
          </p>
        </header>

        {data?.kpis && <KPIGroup kpis={data.kpis.map(kpi => ({ label: kpi.title, value: kpi.value }))} />}

        <section className="cluster-dashboard-page__section">
          <Grid cols={3} tabletCols={1} mobileCols={1} gap="2rem">
            {explorationCards.map(card => (
              <ExplorationCard key={card.title} {...card} />
            ))}
          </Grid>
        </section>

        <section className="cluster-dashboard-page__section">
            <GlobalFilters />
        </section>

        {data?.latestOrgs && data?.latestPolicies && (
          <section className="cluster-dashboard-page__section">
              <h2 className="cluster-dashboard-page__section-title">최근 업데이트</h2>
              <Grid cols={2} tabletCols={1} mobileCols={1} gap="3rem">
                  <div>
                      <h3>신규 기관</h3>
                      <ul className="cluster-dashboard-page__update-list">
                          {data.latestOrgs.map(org => (
                            <li key={org.id} className="cluster-dashboard-page__update-list-item">
                              <div className="cluster-dashboard-page__update-info">
                                <span className="cluster-dashboard-page__update-name">{org.name}</span>
                                <span className="cluster-dashboard-page__update-date">{org.date}</span>
                              </div>
                              <Badge variant={org.status === 'NEW' ? 'success' : 'primary'}>{org.status}</Badge>
                            </li>
                          ))}
                      </ul>
                  </div>
                  <div>
                      <h3>신규 정책</h3>
                      <ul className="cluster-dashboard-page__update-list">
                          {data.latestPolicies.map(pol => (
                            <li key={pol.id} className="cluster-dashboard-page__update-list-item">
                              <div className="cluster-dashboard-page__update-info">
                                <span className="cluster-dashboard-page__update-name">{pol.name}</span>
                                <span className="cluster-dashboard-page__update-date">{pol.date}</span>
                              </div>
                              <Badge variant={pol.status === 'NEW' ? 'success' : 'primary'}>{pol.status}</Badge>
                            </li>
                          ))}
                      </ul>
                  </div>
              </Grid>
          </section>
        )}
      </div>
    </MainLayout>
  );
};

export default ClusterDashboardPage;
