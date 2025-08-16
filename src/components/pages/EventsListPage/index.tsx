import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import EventCard, { EventCardData } from '../../molecules/EventCard';

// --- MOCK DATA ---
const mockEventsList: EventCardData[] = [
  {
    id: 'event-1',
    title: '2024 글로벌 바이오 컨퍼런스 (GBC)',
    summary: '전 세계 바이오 산업의 미래를 조망하고, 최신 기술과 규제 동향을 공유하는 아시아 최대 규모의 컨퍼런스입니다.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    eventStartAt: '2024-09-01',
    eventEndAt: '2024-09-03',
    locationType: 'offline',
    locationName: '코엑스, 서울',
    host: '식품의약품안전처',
    registerDeadline: '2024-08-25',
  },
  {
    id: 'event-2',
    title: '온라인 바이오 기술 투자 설명회',
    summary: '유망 바이오 스타트업과 투자자를 연결하는 온라인 IR 행사. 실시간 Q&A 세션 포함.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    eventStartAt: '2024-09-10',
    eventEndAt: '2024-09-10',
    locationType: 'online',
    host: '한국바이오협회',
    registerDeadline: '2024-09-08',
  },
  {
    id: 'event-3',
    title: '디지털 헬스케어 미래 전략 세미나',
    summary: 'AI, 빅데이터 기반의 디지털 헬스케어 기술 동향과 비즈니스 모델을 논의합니다.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587825140708-df876c1b5df1?q=80&w=800&auto=format&fit=crop',
    eventStartAt: '2024-09-15',
    eventEndAt: '2024-09-15',
    locationType: 'hybrid',
    locationName: '판교 스타트업캠퍼스',
    host: '디지털헬스케어파트너스',
    registerDeadline: '2024-09-12',
  },
  // Add more mock events as needed
];

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;


// --- COMPONENT ---

const EventsListPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>바이오 행사</PageTitle>
        </PageHeader>

        <ControlsWrapper>
          <FilterBar />
          <SearchBar />
        </ControlsWrapper>

        <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
          {mockEventsList.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={5} />
      </PageWrapper>
    </MainLayout>
  );
};

export default EventsListPage;
