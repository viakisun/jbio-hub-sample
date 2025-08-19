import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import NewsCard from '../../molecules/NewsCard';
import { News } from '../../../types/api';
import NewsHero from '../../organisms/NewsHero';

// --- MOCK DATA ---
const mockNewsList: News[] = [
  // (mock data is the same as before)
  {
    id: 1,
    title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향',
    summary: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다. 국내외 연구진들의 최신 연구 결과와 임상 현황을 집중 조명한다.',
    content: 'CAR-T 세포 치료가 혈액암을 넘어 고형암 정복에 나섰다. 국내외 연구진들의 최신 연구 결과와 임상 현황을 집중 조명한다. (상세 내용)',
    thumbnailUrl: 'https://picsum.photos/seed/news1/400/225',
    sourceName: '바이오타임즈',
    created_at: '2024-08-14',
    category: 'news',
  },
  {
    id: 2,
    title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명',
    summary: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다. 개발 기간 단축과 비용 절감 효과는?',
    content: '단백질 구조 예측 AI 알파폴드2가 신약 개발 패러다임을 바꾸고 있다. 개발 기간 단축과 비용 절감 효과는? (상세 내용)',
    thumbnailUrl: 'https://picsum.photos/seed/news2/400/225',
    sourceName: '메디컬 투데이',
    created_at: '2024-08-13',
    category: 'news',
  },
  {
    id: 3,
    title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래',
    summary: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거.',
    content: '3세대 유전자 가위 기술 크리스퍼-카스9의 오프타겟(off-target) 문제를 해결하기 위한 국내 연구진의 쾌거. (상세 내용)',
    thumbnailUrl: 'https://picsum.photos/seed/news3/400/225',
    sourceName: '사이언스 포커스',
    created_at: '2024-08-12',
    category: 'news',
  },
  { id: 4, title: '마이크로바이옴, 제2의 게놈 프로젝트로 부상', summary: '장내 미생물 생태계, 마이크로바이옴이 난치병 치료의 새로운 해법으로 떠오르고 있다. 관련 시장 동향 분석.', content: '상세 내용...', thumbnailUrl: 'https://picsum.photos/seed/news4/400/225', sourceName: '헬스조선', created_at: '2024-08-11', category: 'news' },
  { id: 5, title: '디지털 치료제(DTx), 미래 의료의 핵심으로', summary: '소프트웨어를 이용해 질병을 치료하는 디지털 치료제(DTx) 시장이 본격 개화하고 있다. 국내 규제 현황과 전망은?', content: '상세 내용...', thumbnailUrl: 'https://picsum.photos/seed/news5/400/225', sourceName: '약업신문', created_at: '2024-08-10', category: 'news' },
  { id: 6, title: '뇌-컴퓨터 인터페이스(BCI), 상용화 어디까지 왔나', summary: '일론 머스크의 뉴럴링크를 비롯한 BCI 기술의 발전 현황과 윤리적 과제를 짚어본다.', content: '상세 내용...', thumbnailUrl: 'https://picsum.photos/seed/news6/400/225', sourceName: '테크월드', created_at: '2024-08-09', category: 'news' },
];

// --- STYLED COMPONENTS ---

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: 0 1rem 1.5rem;
  }
`;

const SearchBarContainer = styled.div`
  margin-bottom: 2.5rem;
`;

// --- COMPONENT ---

const NewsListPage = () => {
  return (
    <MainLayout>
      <NewsHero />
      <ContentWrapper>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
          {mockNewsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={10} />
      </ContentWrapper>
    </MainLayout>
  );
};

export default NewsListPage;
