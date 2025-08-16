import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import NewsCard, { NewsCardData } from '../../molecules/NewsCard';

// --- MOCK DATA ---
const mockNewsList: NewsCardData[] = [
  {
    id: 'news-1',
    title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향',
    summary: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다. 국내외 연구진들의 최신 연구 결과와 임상 현황을 집중 조명한다.',
    thumbnailUrl: 'https://picsum.photos/seed/news1/400/225',
    sourceName: '바이오타임즈',
    publishedAt: '2024-08-14',
  },
  {
    id: 'news-2',
    title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명',
    summary: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다. 개발 기간 단축과 비용 절감 효과는?',
    thumbnailUrl: 'https://picsum.photos/seed/news2/400/225',
    sourceName: '메디컬 투데이',
    publishedAt: '2024-08-13',
  },
  {
    id: 'news-3',
    title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래',
    summary: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거.',
    thumbnailUrl: 'https://picsum.photos/seed/news3/400/225',
    sourceName: '사이언스 포커스',
    publishedAt: '2024-08-12',
  },
  { id: 'news-4', title: '마이크로바이옴, 제2의 게놈 프로젝트로 부상', summary: '장내 미생물 생태계, 마이크로바이옴이 난치병 치료의 새로운 해법으로 떠오르고 있다. 관련 시장 동향 분석.', thumbnailUrl: 'https://picsum.photos/seed/news4/400/225', sourceName: '헬스조선', publishedAt: '2024-08-11' },
  { id: 'news-5', title: '디지털 치료제(DTx), 미래 의료의 핵심으로', summary: '소프트웨어를 이용해 질병을 치료하는 디지털 치료제(DTx) 시장이 본격 개화하고 있다. 국내 규제 현황과 전망은?', thumbnailUrl: 'https://picsum.photos/seed/news5/400/225', sourceName: '약업신문', publishedAt: '2024-08-10' },
  { id: 'news-6', title: '뇌-컴퓨터 인터페이스(BCI), 상용화 어디까지 왔나', summary: '일론 머스크의 뉴럴링크를 비롯한 BCI 기술의 발전 현황과 윤리적 과제를 짚어본다.', thumbnailUrl: 'https://picsum.photos/seed/news6/400/225', sourceName: '테크월드', publishedAt: '2024-08-09' },
];


// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

// --- COMPONENT ---

const NewsListPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>최신 뉴스</PageTitle>
          <SearchBar />
        </PageHeader>

        <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
          {mockNewsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={10} />
      </PageWrapper>
    </MainLayout>
  );
};

export default NewsListPage;
