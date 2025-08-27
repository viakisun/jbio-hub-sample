import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import NewsCard from '../../molecules/NewsCard';
import EventCard from '../../molecules/EventCard';
import Tabs from '../../molecules/Tabs';
// import { useNewsAndEvents } from '../../../hooks/useNewsAndEvents';
import { ContentItem, News, Event } from '../../../types/api';
import Button from '../../atoms/Button';

// --- STYLED COMPONENTS ---

const SectionWrapper = styled.section`
  padding: ${DESIGN_SYSTEM.spacing['3xl']} ${DESIGN_SYSTEM.spacing.md};
  background-color: ${DESIGN_SYSTEM.colors.gray[50]};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${DESIGN_SYSTEM.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  background: ${DESIGN_SYSTEM.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.lg} 0;
`;

const SectionSubtitle = styled.p`
  font-size: 20px;
  color: ${DESIGN_SYSTEM.colors.gray[600]};
  max-width: 600px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spacing.xl};
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoadMoreContainer = styled.div`
  text-align: center;
  margin-top: ${DESIGN_SYSTEM.spacing['2xl']};
`;

const EmptyStateContainer = styled.div`
  text-align: center;
  padding: ${DESIGN_SYSTEM.spacing['3xl']} 0;
  color: ${DESIGN_SYSTEM.colors.gray[500]};
`;

// --- COMPONENT ---

interface ContentGridProps {
  limit?: number;
  showTabs?: boolean;
  showLoadMore?: boolean;
}

const ContentGrid: React.FC<ContentGridProps> = ({
  limit,
  showTabs = true,
  showLoadMore = true,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  // const { data, isLoading, isError } = useNewsAndEvents({ limit });

  const mockData: ContentItem[] = [
    { id: 1, title: '전북 바이오 특화단지 유치 성공', summary: '정부가 전북을 바이오 특화단지로 최종 선정했습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-12T11:00:00Z', sourceName: '전북도청', thumbnailUrl: 'https://picsum.photos/seed/news1/400/225' },
    { id: 1, title: '제12회 국제 바이오산업 컨퍼런스', summary: '글로벌 바이오 산업의 최신 동향과 미래 전망을 논의합니다.', thumbnailUrl: 'https://picsum.photos/seed/event1/400/225', eventStartAt: '2025-09-05T09:00:00Z', eventEndAt: '2025-09-06T18:00:00Z', locationType: 'offline', locationName: '전주 컨벤션센터', host: '전북바이오융합산업진흥원', registerDeadline: '2025-08-31T23:59:59Z', status: '예정', category: 'event' },
    { id: 2, title: '시스템 점검 안내 (09/01 02:00 ~ 04:00)', summary: '더 나은 서비스 제공을 위해 시스템 정기 점검을 실시합니다.', content: '상세 내용...', category: 'notice', created_at: '2025-08-11T17:00:00Z', sourceName: '관리팀', thumbnailUrl: 'https://picsum.photos/seed/notice1/400/225' },
    { id: 2, title: 'AI 기반 신약 개발 온라인 세미나', summary: '인공지능을 활용한 신약 개발의 최신 사례와 기술을 소개합니다.', thumbnailUrl: 'https://picsum.photos/seed/event2/400/225', eventStartAt: '2025-08-25T14:00:00Z', eventEndAt: '2025-08-25T16:00:00Z', locationType: 'online', host: '한국생명공학연구원', registerDeadline: '2025-08-24T18:00:00Z', status: '진행중', category: 'event' },
    { id: 3, title: '익산 국가식품클러스터, K-푸드 전진기지로 발돋움', summary: '익산 국가식품클러스터가 국내외 식품 시장에서 주목받고 있습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-15T09:00:00Z', sourceName: '농림축산식품부', thumbnailUrl: 'https://picsum.photos/seed/news2/400/225' },
    { id: 3, title: '농생명 기술 투자유치 설명회(IR)', summary: '유망 농생명 기술을 보유한 스타트업 및 중소기업을 위한 투자유치 설명회입니다.', thumbnailUrl: 'https://picsum.photos/seed/event3/400/225', eventStartAt: '2025-08-01T10:00:00Z', eventEndAt: '2025-08-01T17:00:00Z', locationType: 'hybrid', locationName: '전북창조경제혁신센터', host: '농업기술실용화재단', registerDeadline: '2025-07-25T18:00:00Z', status: '마감', category: 'event' },
    { id: 4, title: '정읍 방사선융합기술원, 신약 개발 새 지평 열어', summary: '방사선 기술을 이용한 혁신적인 신약 개발에 성공했습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-14T14:00:00Z', sourceName: '한국원자력연구원', thumbnailUrl: 'https://picsum.photos/seed/news3/400/225' },
    { id: 4, title: '제약바이오 채용박람회 2024', summary: '국내 최대 규모의 제약바이오 분야 채용 박람회.', thumbnailUrl: 'https://picsum.photos/seed/event4/400/225', eventStartAt: '2025-09-20T10:00:00Z', eventEndAt: '2025-09-21T17:00:00Z', locationType: 'offline', locationName: '코엑스, 서울', host: '한국제약바이오협회', registerDeadline: '2025-09-15T18:00:00Z', status: '예정', category: 'event' },
  ];

  const data = limit ? mockData.slice(0, limit) : mockData;
  const isLoading = false;
  const isError = false;

  const TABS = [
    { id: 'all', label: '전체' },
    { id: 'news', label: '뉴스' },
    { id: 'event', label: '행사' },
    { id: 'notice', label: '공지' },
  ];

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (activeTab === 'all') return data;
    if (activeTab === 'notice') {
      return data.filter(item => 'category' in item && item.category === 'notice');
    }
    return data.filter(item => item.category === activeTab);
  }, [data, activeTab]);

  const renderCard = (item: ContentItem) => {
    if (item.category === 'event') {
      return <EventCard key={`event-${item.id}`} event={item as Event} />;
    }
    return <NewsCard key={`news-${item.id}`} news={item as News} />;
  };

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>News & Events</SectionTitle>
        <SectionSubtitle>
          전북 바이오 산업의 최신 소식과 동향을 한눈에 확인하세요.
        </SectionSubtitle>
      </SectionHeader>
      {showTabs && (
        <TabContainer>
          <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
        </TabContainer>
      )}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data.</p>}

      {!isLoading && !isError && filteredData.length > 0 && (
        <>
          <Grid>
            {filteredData.map(renderCard)}
          </Grid>
          {showLoadMore && (
            <LoadMoreContainer>
              <Button variant="secondary">더보기</Button>
            </LoadMoreContainer>
          )}
        </>
      )}

      {!isLoading && !isError && filteredData.length === 0 && (
        <EmptyStateContainer>
          <p>표시할 콘텐츠가 없습니다.</p>
        </EmptyStateContainer>
      )}
    </SectionWrapper>
  );
};

export default ContentGrid;
