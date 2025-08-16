import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Grid from '../../atoms/Grid';
import KPIGroup from '../../organisms/KPIGroup';
import OutcomeCard, { OutcomeCardData } from '../../molecules/OutcomeCard';
import TransferCard, { TransferCardData } from '../../molecules/TransferCard';
import CollaborationCard, { CollaborationCardData } from '../../molecules/CollaborationCard';
import Badge from '../../atoms/Badge';

// --- MOCK DATA ---
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


// --- STYLED COMPONENTS ---
const PageWrapper = styled.div` max-width: 1280px; margin: 0 auto; padding: 2rem; `;
const PageHeader = styled.header` text-align: center; margin-bottom: 3rem; `;
const PageTitle = styled.h1` font-size: 2.5rem; font-weight: 700; `;
const Section = styled.section` background-color: #f9fafb; padding: 2rem; border-radius: 16px; display: flex; flex-direction: column; border: 1px solid #e5e7eb;`;
const SectionHeader = styled.div` display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; `;
const SectionTitle = styled.h2` font-size: 1.5rem; font-weight: 600; `;
const ViewAllLink = styled(Link)` font-size: 0.875rem; font-weight: 500; color: #4f46e5; text-decoration: none; &:hover { text-decoration: underline; } `;
const List = styled.div` display: flex; flex-direction: column; gap: 1rem; `;
const PatentItem = styled(Link)` display: flex; justify-content: space-between; padding: 1rem; border-radius: 8px; text-decoration: none; color: inherit; &:hover { background-color: #eef2ff; }`;

// --- COMPONENT ---

const TechDashboardPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>기술 및 특허</PageTitle>
        </PageHeader>
        <Grid $cols={1} $gap="3rem">
          <KPIGroup kpis={kpiData} />
          <Grid $cols={4} $tabletCols={2} $mobileCols={1} $gap="2rem">
            <Section>
              <SectionHeader><SectionTitle>최신 연구성과</SectionTitle><ViewAllLink to="/tech/outcomes">전체보기</ViewAllLink></SectionHeader>
              <List>{mockOutcomes.map(item => <OutcomeCard key={item.id} outcome={item} />)}</List>
            </Section>
            <Section>
              <SectionHeader><SectionTitle>기술 이전</SectionTitle><ViewAllLink to="/tech/transfer">전체보기</ViewAllLink></SectionHeader>
              <List>{mockTransfers.map(item => <TransferCard key={item.id} transfer={item} />)}</List>
            </Section>
            <Section>
              <SectionHeader><SectionTitle>특허 현황</SectionTitle><ViewAllLink to="/tech/patents">전체보기</ViewAllLink></SectionHeader>
              <List>
                {mockPatents.map(item => (
                  <PatentItem key={item.id} to={`/tech/patents/${item.id}`}>
                    <span>{item.title}</span>
                    <Badge>{item.status}</Badge>
                  </PatentItem>
                ))}
              </List>
            </Section>
            <Section>
              <SectionHeader><SectionTitle>협력 사례</SectionTitle><ViewAllLink to="/tech/collaboration">전체보기</ViewAllLink></SectionHeader>
              <List>{mockCollaborations.map(item => <CollaborationCard key={item.id} collaboration={item} />)}</List>
            </Section>
          </Grid>
        </Grid>
      </PageWrapper>
    </MainLayout>
  );
};

export default TechDashboardPage;
