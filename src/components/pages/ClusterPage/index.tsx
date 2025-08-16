import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import ClusterMap from '../../organisms/ClusterMap';
import ShortcutCard from '../../molecules/ShortcutCard';
import Grid from '../../atoms/Grid';

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
  text-align: center;
  margin-bottom: 2.5rem;
`;

// --- COMPONENT ---

const shortcuts = [
    { icon: 'users', title: '입주기관 현황', description: '혁신적인 아이디어로 미래를 여는 입주기업들을 만나보세요.', to: '/incubation?tab=tenants' },
    { icon: 'clipboard', title: '지원사업 공고', description: '기업의 성장을 지원하는 다양한 프로그램을 확인하세요.', to: '/announcements' },
    { icon: 'cpu', title: '기술 및 특허', description: '클러스터가 보유한 우수한 기술과 특허를 살펴보세요.', to: '/tech' },
    { icon: 'building', title: '기업 정보', description: '전북 바이오 산업을 이끄는 기업들의 정보를 찾아보세요.', to: '/companies' },
];

const ClusterPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <Header>
          <Title>JB BIO 클러스터</Title>
          <Subtitle>
            전북 바이오 클러스터는 혁신적인 기술과 아이디어가 모여 시너지를 창출하는 대한민국 바이오 산업의 중심입니다.
          </Subtitle>
        </Header>

        <ClusterMap />

        <Section>
            <SectionTitle>주요 기능 바로가기</SectionTitle>
            <Grid cols={4} tabletCols={2} mobileCols={1} gap="2rem">
                {shortcuts.map(card => (
                    <ShortcutCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        to={card.to}
                    />
                ))}
            </Grid>
        </Section>

      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterPage;
