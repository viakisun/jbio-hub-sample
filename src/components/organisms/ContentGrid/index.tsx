import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import NewsCard from '../../molecules/NewsCard';
import EventCard from '../../molecules/EventCard';
import Tabs from '../../molecules/Tabs';
import { useNewsAndEvents } from '../../../hooks/useNewsAndEvents';
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

const ContentGrid = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { data, isLoading, isError } = useNewsAndEvents();

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
      <TabContainer>
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      </TabContainer>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data.</p>}

      {!isLoading && !isError && filteredData.length > 0 && (
        <>
          <Grid>
            {filteredData.map(renderCard)}
          </Grid>
          <LoadMoreContainer>
            <Button variant="secondary" size="lg">더보기</Button>
          </LoadMoreContainer>
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
