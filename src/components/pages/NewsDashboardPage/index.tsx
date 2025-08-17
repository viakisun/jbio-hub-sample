import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Grid from '../../atoms/Grid';
import NewsCard, { NewsCardData } from '../../molecules/NewsCard';
import EventCard, { EventCardData } from '../../molecules/EventCard';

// --- MOCK DATA ---
import { DESIGN_SYSTEM } from '../../../styles/tokens';

const mockNewsPreview: NewsCardData[] = [
  { id: 'news-1', title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향', summary: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다.', thumbnailUrl: 'https://picsum.photos/seed/news1/400/225', sourceName: '바이오타임즈', publishedAt: '2024-08-14', category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] } },
  { id: 'news-2', title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명', summary: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다.', thumbnailUrl: 'https://picsum.photos/seed/news2/400/225', sourceName: '메디컬 투데이', publishedAt: '2024-08-13', category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] } },
  { id: 'news-3', title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래', summary: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거.', thumbnailUrl: 'https://picsum.photos/seed/news3/400/225', sourceName: '사이언스 포커스', publishedAt: '2024-08-12', category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] } },
  { id: 'news-4', title: '마이크로바이옴, 제2의 게놈 프로젝트로 부상', summary: '장내 미생물 생태계, 마이크로바이옴이 난치병 치료의 새로운 해법으로 떠오르고 있다.', thumbnailUrl: 'https://picsum.photos/seed/news4/400/225', sourceName: '헬스조선', publishedAt: '2024-08-11', category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] } },
  { id: 'news-5', title: '디지털 치료제(DTx), 미래 의료의 핵심으로', summary: '소프트웨어를 이용해 질병을 치료하는 디지털 치료제(DTx) 시장이 본격 개화하고 있다.', thumbnailUrl: 'https://picsum.photos/seed/news5/400/225', sourceName: '약업신문', publishedAt: '2024-08-10', category: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] } },
];

const mockEventsPreview: EventCardData[] = [
  { id: 'event-1', title: '2024 글로벌 바이오 컨퍼런스 (GBC)', thumbnailUrl: 'https://picsum.photos/seed/event1/400/225', eventStartAt: '2024-09-01', eventEndAt: '2024-09-03', locationType: 'offline', locationName: '코엑스, 서울', host: '식품의약품안전처', registerDeadline: '2024-08-25' },
  { id: 'event-2', title: '온라인 바이오 기술 투자 설명회', thumbnailUrl: 'https://picsum.photos/seed/event2/400/225', eventStartAt: '2024-09-10', eventEndAt: '2024-09-10', locationType: 'online', host: '한국바이오협회', registerDeadline: '2024-09-08' },
  { id: 'event-3', title: '디지털 헬스케어 미래 전략 세미나', thumbnailUrl: 'https://picsum.photos/seed/event3/400/225', eventStartAt: '2024-09-15', eventEndAt: '2024-09-15', locationType: 'hybrid', locationName: '판교 스타트업캠퍼스', host: '디지털헬스케어파트너스', registerDeadline: '2024-09-12' },
  { id: 'event-4', title: '제약바이오 채용박람회 2024', thumbnailUrl: 'https://picsum.photos/seed/event4/400/225', eventStartAt: '2024-09-20', eventEndAt: '2024-09-21', locationType: 'offline', locationName: 'AT센터, 서울', host: '한국제약바이오협회', registerDeadline: '2024-09-18' },
  { id: 'event-5', title: '의료기기 규제 및 인허가 과정 웨비나', thumbnailUrl: 'https://picsum.photos/seed/event5/400/225', eventStartAt: '2024-09-25', eventEndAt: '2024-09-25', locationType: 'online', host: 'KMDIA', registerDeadline: '2024-09-23' },
];


// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Section = styled.section`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ViewAllLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4f46e5;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const ItemGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


// --- COMPONENT ---

const NewsDashboardPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>뉴스 & 행사</PageTitle>
        </PageHeader>

        <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="2rem">
          <Section>
            <SectionHeader>
              <SectionTitle>최신 뉴스</SectionTitle>
              <ViewAllLink to="/news/latest">전체 보기</ViewAllLink>
            </SectionHeader>
            <ItemGrid>
              {mockNewsPreview.map(news => <NewsCard key={news.id} news={news} />)}
            </ItemGrid>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>바이오 행사</SectionTitle>
              <ViewAllLink to="/events">전체 보기</ViewAllLink>
            </SectionHeader>
            <ItemGrid>
              {mockEventsPreview.map(event => <EventCard key={event.id} event={event} />)}
            </ItemGrid>
          </Section>
        </Grid>

      </PageWrapper>
    </MainLayout>
  );
};

export default NewsDashboardPage;
