import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import KPIGroup from '../../organisms/KPIGroup';
import GlobalFilters from '../../organisms/GlobalFilters';
import ExplorationCard from '../../molecules/ExplorationCard';
import Grid from '../../atoms/Grid';
import Badge from '../../atoms/Badge';
import useDashboardData from '../../../hooks/useDashboardData';

// --- MOCK DATA & CONFIG ---
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

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin: 2rem 0 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const UpdateList = styled.ul`
    list-style: none;
    padding: 0;
`;

const UpdateListItem = styled.li`
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UpdateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateName = styled.span`
  font-weight: 500;
`;

const UpdateDate = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;


// --- COMPONENT ---

const ClusterDashboardPage = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    // TODO: Replace with a proper LoadingSkeleton component
    return <MainLayout><div>로딩 중...</div></MainLayout>;
  }

  if (error) {
    // TODO: Replace with a proper ErrorState component
    return <MainLayout><div>에러 발생: {error.message}</div></MainLayout>;
  }

  return (
    <MainLayout>
      <PageWrapper>
        <Header>
          <Title>JB-SQUARE: 클러스터 허브</Title>
          <Subtitle>
            전북 바이오 클러스터의 모든 정보를 한 곳에서. 기관, 정책, 인프라를 탐색하고 비즈니스 기회를 발견하세요.
          </Subtitle>
        </Header>

        {data?.kpis && <KPIGroup kpis={data.kpis.map(kpi => ({ label: kpi.title, value: kpi.value }))} />}

        <Section>
          <Grid $cols={3} $tabletCols={1} $mobileCols={1} $gap="2rem">
            {explorationCards.map(card => (
              <ExplorationCard key={card.title} {...card} />
            ))}
          </Grid>
        </Section>

        <Section>
            <GlobalFilters />
        </Section>

        {data?.latestOrgs && data?.latestPolicies && (
          <Section>
              <SectionTitle>최근 업데이트</SectionTitle>
              <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="3rem">
                  <div>
                      <h3>신규 기관</h3>
                      <UpdateList>
                          {data.latestOrgs.map(org => (
                            <UpdateListItem key={org.id}>
                              <UpdateInfo>
                                <UpdateName>{org.name}</UpdateName>
                                <UpdateDate>{org.date}</UpdateDate>
                              </UpdateInfo>
                              <Badge variant={org.status === 'NEW' ? 'success' : 'primary'}>{org.status}</Badge>
                            </UpdateListItem>
                          ))}
                      </UpdateList>
                  </div>
                  <div>
                      <h3>신규 정책</h3>
                      <UpdateList>
                          {data.latestPolicies.map(pol => (
                            <UpdateListItem key={pol.id}>
                              <UpdateInfo>
                                <UpdateName>{pol.name}</UpdateName>
                                <UpdateDate>{pol.date}</UpdateDate>
                              </UpdateInfo>
                              <Badge variant={pol.status === 'NEW' ? 'success' : 'primary'}>{pol.status}</Badge>
                            </UpdateListItem>
                          ))}
                      </UpdateList>
                  </div>
              </Grid>
          </Section>
        )}
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterDashboardPage;
