import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Grid from '../../atoms/Grid';
import NewsCard from '../../molecules/NewsCard';
import EventCard from '../../molecules/EventCard';
import { News, Event } from '../../../types/api';

const mockNewsPreview: News[] = [
  { id: 1, title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향', summary: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다.', content: '...', thumbnailUrl: 'https://picsum.photos/seed/news1/400/225', sourceName: '바이오타임즈', created_at: '2024-08-14', category: 'news' },
  { id: 2, title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명', summary: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다.', content: '...', thumbnailUrl: 'https://picsum.photos/seed/news2/400/225', sourceName: '메디컬 투데이', created_at: '2024-08-13', category: 'news' },
  { id: 3, title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래', summary: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거.', content: '...', thumbnailUrl: 'https://picsum.photos/seed/news3/400/225', sourceName: '사이언스 포커스', created_at: '2024-08-12', category: 'news' },
  { id: 4, title: '마이크로바이옴, 제2의 게놈 프로젝트로 부상', summary: '장내 미생물 생태계, 마이크로바이옴이 난치병 치료의 새로운 해법으로 떠오르고 있다.', content: '...', thumbnailUrl: 'https://picsum.photos/seed/news4/400/225', sourceName: '헬스조선', created_at: '2024-08-11', category: 'news' },
  { id: 5, title: '디지털 치료제(DTx), 미래 의료의 핵심으로', summary: '소프트웨어를 이용해 질병을 치료하는 디지털 치료제(DTx) 시장이 본격 개화하고 있다.', content: '...', thumbnailUrl: 'https://picsum.photos/seed/news5/400/225', sourceName: '약업신문', created_at: '2024-08-10', category: 'news' },
];

const mockEventsPreview: Event[] = [
  { id: 1, title: '2024 글로벌 바이오 컨퍼런스 (GBC)', summary: '글로벌 바이오 산업의 미래 조망', category: 'event', status: '예정', thumbnailUrl: 'https://picsum.photos/seed/event1/400/225', eventStartAt: '2024-09-01', eventEndAt: '2024-09-03', locationType: 'offline', locationName: '코엑스, 서울', host: '식품의약품안전처', registerDeadline: '2024-08-25' },
  { id: 2, title: '온라인 바이오 기술 투자 설명회', summary: '유망 바이오 스타트업과 투자자 연결', category: 'event', status: '예정', thumbnailUrl: 'https://picsum.photos/seed/event2/400/225', eventStartAt: '2024-09-10', eventEndAt: '2024-09-10', locationType: 'online', host: '한국바이오협회', registerDeadline: '2024-09-08' },
  { id: 3, title: '디지털 헬스케어 미래 전략 세미나', summary: 'AI, 빅데이터 기반 기술 동향 논의', category: 'event', status: '진행중', thumbnailUrl: 'https://picsum.photos/seed/event3/400/225', eventStartAt: '2024-09-15', eventEndAt: '2024-09-15', locationType: 'hybrid', locationName: '판교 스타트업캠퍼스', host: '디지털헬스케어파트너스', registerDeadline: '2024-09-12' },
  { id: 4, title: '제약바이오 채용박람회 2024', summary: '국내 최대 제약바이오 분야 채용 행사', category: 'event', status: '마감', thumbnailUrl: 'https://picsum.photos/seed/event4/400/225', eventStartAt: '2024-09-20', eventEndAt: '2024-09-21', locationType: 'offline', locationName: 'AT센터, 서울', host: '한국제약바이오협회', registerDeadline: '2024-09-18' },
  { id: 5, title: '의료기기 규제 및 인허가 과정 웨비나', summary: '의료기기 시장 진출을 위한 필수 전략', category: 'event', status: '마감', thumbnailUrl: 'https://picsum.photos/seed/event5/400/225', eventStartAt: '2024-09-25', eventEndAt: '2024-09-25', locationType: 'online', host: 'KMDIA', registerDeadline: '2024-09-23' },
];

const NewsDashboardPage = () => {
  return (
    <MainLayout>
      <div className="news-dashboard-page__wrapper">
        <header className="news-dashboard-page__header">
          <h1 className="news-dashboard-page__title">뉴스 & 행사</h1>
        </header>

        <Grid cols={2} tabletCols={1} mobileCols={1} gap="2rem">
          <section className="news-dashboard-page__section">
            <div className="news-dashboard-page__section-header">
              <h2 className="news-dashboard-page__section-title">최신 뉴스</h2>
              <Link to="/news/latest" className="news-dashboard-page__view-all-link">전체 보기</Link>
            </div>
            <div className="news-dashboard-page__item-grid">
              {mockNewsPreview.map(news => <NewsCard key={news.id} news={news} />)}
            </div>
          </section>

          <section className="news-dashboard-page__section">
            <div className="news-dashboard-page__section-header">
              <h2 className="news-dashboard-page__section-title">바이오 행사</h2>
              <Link to="/events" className="news-dashboard-page__view-all-link">전체 보기</Link>
            </div>
            <div className="news-dashboard-page__item-grid">
              {mockEventsPreview.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          </section>
        </Grid>

      </div>
    </MainLayout>
  );
};

export default NewsDashboardPage;
