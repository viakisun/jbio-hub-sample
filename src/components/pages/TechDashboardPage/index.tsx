import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Grid from '../../atoms/Grid';
import KPIGroup from '../../organisms/KPIGroup';
import OutcomeCard, { OutcomeCardData } from '../../molecules/OutcomeCard';
import TransferCard, { TransferCardData } from '../../molecules/TransferCard';
import CollaborationCard, { CollaborationCardData } from '../../molecules/CollaborationCard';
import Badge from '../../atoms/Badge';

const kpiData = [
  { label: '신규 연구성과 (30일)', value: 12 },
  { label: '기술이전(모집중)', value: 8 },
  { label: '금주 등록 특허', value: 5 },
  { label: '누적 협력 사례', value: 45 },
];

const mockOutcomes: OutcomeCardData[] = [
  { id: 'outcome-1', title: '고효율 페로브스카이트 태양전지 안정성 향상 기술', summary: '', orgName: '한국화학연구원', fields: ['에너지', '소재'], publishedAt: '2024-08-10' },
  { id: 'outcome-2', title: 'AI 기반 희귀질환 유전자 변이 분석 플랫폼', summary: '', orgName: '서울대학교병원', fields: ['AI', '의료', '유전체'], publishedAt: '2024-08-05' },
];
const mockTransfers: TransferCardData[] = [
  { id: 'transfer-1', title: '고효율 태양전지용 투명 전극 기술', summary: '', ownerOrg: '한국화학연구원', status: 'open', deadline: '2024-10-31' },
  { id: 'transfer-2', title: '미세먼지 제거용 광촉매 필터 기술', summary: '', ownerOrg: '한국에너지기술연구원', status: 'closing-soon', deadline: '2024-08-30' },
];
const mockPatents = [
  { id: 'patent-1', status: 'granted', title: '페로브스카이트 안정화 첨가제', number: '10-2023-0012345', applicant: '한국화학연구원' },
  { id: 'patent-2', status: 'published', title: 'AI 기반 진단 보조 시스템', number: '10-2023-0067890', applicant: '메디퓨처' },
];
const mockCollaborations: CollaborationCardData[] = [
  { id: 'collab-1', title: '산학협력: AI 기반 암 진단 솔루션 개발', summary: '', partners: [{ name: '전북대학교' }, { name: '바이오젠' }], year: 2023, fields: ['AI', '진단'] },
];

const TechDashboardPage = () => {
  return (
    <MainLayout>
      <div className="tech-dashboard-page__wrapper">
        <header className="tech-dashboard-page__header">
          <h1 className="tech-dashboard-page__title">기술 및 특허</h1>
        </header>
        <Grid cols={1} gap="3rem">
          <KPIGroup kpis={kpiData} />
          <Grid cols={4} tabletCols={2} mobileCols={1} gap="2rem">
            <section className="tech-dashboard-page__section">
              <div className="tech-dashboard-page__section-header"><h2 className="tech-dashboard-page__section-title">최신 연구성과</h2><Link to="/tech/outcomes" className="tech-dashboard-page__view-all-link">전체보기</Link></div>
              <div className="tech-dashboard-page__list">{mockOutcomes.map(item => <OutcomeCard key={item.id} outcome={item} />)}</div>
            </section>
            <section className="tech-dashboard-page__section">
              <div className="tech-dashboard-page__section-header"><h2 className="tech-dashboard-page__section-title">기술 이전</h2><Link to="/tech/transfer" className="tech-dashboard-page__view-all-link">전체보기</Link></div>
              <div className="tech-dashboard-page__list">{mockTransfers.map(item => <TransferCard key={item.id} transfer={item} />)}</div>
            </section>
            <section className="tech-dashboard-page__section">
              <div className="tech-dashboard-page__section-header"><h2 className="tech-dashboard-page__section-title">특허 현황</h2><Link to="/tech/patents" className="tech-dashboard-page__view-all-link">전체보기</Link></div>
              <div className="tech-dashboard-page__list">
                {mockPatents.map(item => (
                  <Link key={item.id} to={`/tech/patents/${item.id}`} className="tech-dashboard-page__patent-item">
                    <span>{item.title}</span>
                    <Badge>{item.status}</Badge>
                  </Link>
                ))}
              </div>
            </section>
            <section className="tech-dashboard-page__section">
              <div className="tech-dashboard-page__section-header"><h2 className="tech-dashboard-page__section-title">협력 사례</h2><Link to="/tech/collaboration" className="tech-dashboard-page__view-all-link">전체보기</Link></div>
              <div className="tech-dashboard-page__list">{mockCollaborations.map(item => <CollaborationCard key={item.id} collaboration={item} />)}</div>
            </section>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default TechDashboardPage;
