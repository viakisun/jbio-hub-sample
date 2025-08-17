import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import NewsCard, { NewsCardData } from '../../molecules/NewsCard';
import Tabs from '../../molecules/Tabs';

// --- MOCK DATA ---
const mockNewsData: NewsCardData[] = [
  {
    id: 'news-1',
    title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향',
    summary: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다. 국내외 연구진들의 최신 연구 결과와 임상 현황을 집중 조명한다.',
    thumbnailUrl: 'https://picsum.photos/seed/news1/400/225',
    sourceName: '바이오타임즈',
    publishedAt: '2024-08-14',
    category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] },
  },
  {
    id: 'news-2',
    title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명',
    summary: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다. 개발 기간 단축과 비용 절감 효과는?',
    thumbnailUrl: 'https://picsum.photos/seed/news2/400/225',
    sourceName: '메디컬 투데이',
    publishedAt: '2024-08-13',
    category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] },
  },
  {
    id: 'news-3',
    title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래',
    summary: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거.',
    thumbnailUrl: 'https://picsum.photos/seed/news3/400/225',
    sourceName: '사이언스 포커스',
    publishedAt: '2024-08-12',
    category: { name: '행사', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.success[600] },
  },
];

// --- STYLED COMPONENTS ---

const SectionWrapper = styled.section`
  margin-bottom: ${DESIGN_SYSTEM.spacing['3xl']};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${DESIGN_SYSTEM.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-weight: 900;
  background: ${DESIGN_SYSTEM.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.lg} 0;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 32px;
  }
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;

const SectionSubtitle = styled.p`
  color: ${DESIGN_SYSTEM.colors.gray[600]};
  max-width: 600px;
  margin: 0 auto;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

const TabContainer = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spacing.xl};
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${DESIGN_SYSTEM.spacing.lg};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${DESIGN_SYSTEM.spacing.xl};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// --- COMPONENT ---

const ContentGrid = () => {
  const [activeTab, setActiveTab] = useState('all');
  const TABS = [
    { id: 'all', label: '전체' },
    { id: 'news', label: '뉴스' },
    { id: 'event', label: '행사' },
    { id: 'announcement', label: '공지' },
  ];

  // In a real app, this would filter the data based on the activeTab
  const filteredData = mockNewsData;

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>News & Events</SectionTitle>
        <SectionSubtitle>
          전북 바이오 산업의 최신 소식과 동향을 한눈에 확인하세요.
        </SectionSubtitle>
      </SectionHeader>
      <TabContainer>
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      </TabContainer>

      <Grid>
        {filteredData.map(item => (
          <NewsCard key={item.id} news={item} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ContentGrid;
