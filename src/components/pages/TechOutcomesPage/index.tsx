import React from 'react';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import OutcomeCard, { OutcomeCardData } from '../../molecules/OutcomeCard';

const mockOutcomes: OutcomeCardData[] = [
  {
    id: 'outcome-1',
    title: '고효율 페로브스카이트 태양전지 안정성 향상 기술',
    summary: '기존 페로브스카이트 태양전지의 단점인 수분 및 열에 대한 안정성을 획기적으로 개선한 신규 소재 및 공정 기술.',
    orgName: '한국화학연구원',
    fields: ['에너지', '소재'],
    publishedAt: '2024-08-10',
    attachments: [{ type: 'PDF' }],
  },
  {
    id: 'outcome-2',
    title: 'AI 기반 희귀질환 유전자 변이 분석 플랫폼',
    summary: '대규모 유전체 데이터를 딥러닝으로 분석하여 희귀질환의 원인 유전자 변이를 신속하고 정확하게 발굴하는 플랫폼 기술.',
    orgName: '서울대학교병원',
    fields: ['AI', '의료', '유전체'],
    publishedAt: '2024-08-05',
  },
];

const TechOutcomesPage = () => {
  return (
    <MainLayout>
      <div className="tech-outcomes-page__wrapper">
        <header className="tech-outcomes-page__header">
          <h1 className="tech-outcomes-page__title">최신 연구성과</h1>
        </header>

        <div className="tech-outcomes-page__controls">
          <FilterBar />
          <SearchBar />
        </div>

        <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
          {mockOutcomes.map((outcome) => (
            <OutcomeCard key={outcome.id} outcome={outcome} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={8} />
      </div>
    </MainLayout>
  );
};

export default TechOutcomesPage;
