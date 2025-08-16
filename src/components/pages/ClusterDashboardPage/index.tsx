import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import KPIGroup from '../../organisms/KPIGroup';
import GlobalFilters from '../../organisms/GlobalFilters';
import ExplorationCard from '../../molecules/ExplorationCard';
import Grid from '../../atoms/Grid';

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

const recentUpdates = {
  orgs: [
    { id: 'org-1', name: '메디퓨처', date: '2024-08-15', new: true },
    { id: 'org-2', name: '그린사이언스', date: '2024-08-14', new: true },
    { id: 'org-3', name: '한국화학연구원', date: '2024-08-12', new: false },
  ],
  policies: [
    { id: 'pol-1', name: '2024년 바이오 스타트업 지원사업', date: '2024-08-10', new: true },
    { id: 'pol-2', name: '연구장비 공동활용 지원', date: '2024-08-09', new: false },
    { id: 'pol-3', name: '기술이전 R&BD 사업화 지원', date: '2024-08-05', new: false },
  ]
}

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
`;

// --- COMPONENT ---

const ClusterDashboardPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <Header>
          <Title>JB-SQUARE: 클러스터 허브</Title>
          <Subtitle>
            전북 바이오 클러스터의 모든 정보를 한 곳에서. 기관, 정책, 인프라를 탐색하고 비즈니스 기회를 발견하세요.
          </Subtitle>
        </Header>

        <KPIGroup />

        <Section>
          <Grid cols={3} tabletCols={1} mobileCols={1} gap="2rem">
            {explorationCards.map(card => (
              <ExplorationCard key={card.title} {...card} />
            ))}
          </Grid>
        </Section>

        <Section>
            <GlobalFilters />
        </Section>

        <Section>
            <SectionTitle>최근 업데이트</SectionTitle>
            <Grid cols={2} tabletCols={1} mobileCols={1} gap="3rem">
                <div>
                    <h3>신규 기관</h3>
                    <UpdateList>
                        {recentUpdates.orgs.map(org => <UpdateListItem key={org.id}><span>{org.name}</span><span>{org.date}</span></UpdateListItem>)}
                    </UpdateList>
                </div>
                <div>
                    <h3>신규 정책</h3>
                    <UpdateList>
                        {recentUpdates.policies.map(pol => <UpdateListItem key={pol.id}><span>{pol.name}</span><span>{pol.date}</span></UpdateListItem>)}
                    </UpdateList>
                </div>
            </Grid>
        </Section>
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterDashboardPage;
