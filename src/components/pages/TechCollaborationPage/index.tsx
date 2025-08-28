import React from 'react';
import MainLayout from '../../templates/MainLayout';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import Grid from '../../atoms/Grid';
import CollaborationCard, { CollaborationCardData } from '../../molecules/CollaborationCard';

const mockCollaborations: CollaborationCardData[] = [
  {
    id: 'collab-1',
    title: '산학협력: AI 기반 암 진단 솔루션 개발',
    summary: '전북대학교 컴퓨터공학부와 바이오젠 테라퓨틱스가 협력하여 딥러닝 기반의 암 조직 이미지 판독 정확도를 98%까지 향상시킨 사례.',
    partners: [
        { name: '전북대학교', logoUrl: 'https://picsum.photos/seed/jbnu/32' },
        { name: '바이오젠', logoUrl: 'https://picsum.photos/seed/logo1/32' },
    ],
    year: 2023,
    fields: ['AI', '진단', '산학협력'],
  },
  {
    id: 'collab-2',
    title: '기업-기업 공동연구: 차세대 백신 플랫폼 개발',
    summary: 'SK바이오사이언스와 GC녹십자가 mRNA 백신 플랫폼 기술 국산화를 위해 R&D 컨소시엄을 구성하여 공동 연구를 진행한 성공 사례.',
    partners: [
        { name: 'SK바이오', logoUrl: 'https://picsum.photos/seed/skbio/32' },
        { name: 'GC녹십자', logoUrl: 'https://picsum.photos/seed/gc/32' },
    ],
    year: 2024,
    fields: ['백신', 'mRNA', '기업간협력'],
  },
];

const TechCollaborationPage = () => {
  return (
    <MainLayout>
      <div className="tech-collaboration-page__wrapper">
        <header className="tech-collaboration-page__header">
          <h1 className="tech-collaboration-page__title">기술 협력 사례</h1>
        </header>

        <div className="tech-collaboration-page__controls">
          <FilterBar />
          <SearchBar />
        </div>

        <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
          {mockCollaborations.map((collab) => (
            <CollaborationCard key={collab.id} collaboration={collab} />
          ))}
        </Grid>

        <Pagination currentPage={1} totalPages={2} />
      </div>
    </MainLayout>
  );
};

export default TechCollaborationPage;
