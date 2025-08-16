import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '../../atoms/Grid';
import KPIGroup from '../KPIGroup';
import TenantCard, { TenantCardData } from '../../molecules/TenantCard';
import NoticeCard, { NoticeCardData } from '../../molecules/NoticeCard';

// --- MOCK DATA ---
const kpiData = [
  { label: '총 입주기관', value: 88 },
  { label: '입주율', value: '92%' },
  { label: '총 공실', value: 7 },
  { label: '모집중 공고', value: 2 },
];

const mockNotices: NoticeCardData[] = [
    { id: 'notice-1', title: '2024년 하반기 신규 입주기업 모집 공고', targetCriteria: '창업 7년 미만 바이오 기업', periodEnd: '2024-09-30', applyUrl: '#' },
    { id: 'notice-2', title: '1인 창조기업 지원실 입주기업 모집', targetCriteria: '1인 창조기업 및 예비창업자', periodEnd: '2024-10-15', applyUrl: '#' },
];

const mockVacancyPreview = [
    { centerId: 'center-1', centerName: '전북바이오융합원 본원', vacancyUnits: 3, types: ['랩', '사무실'] },
    { centerId: 'center-2', centerName: '익산 BI 센터', vacancyUnits: 1, types: ['사무실'] },
    { centerId: 'center-3', centerName: '정읍 BI 센터', vacancyUnits: 1, types: ['랩'] },
];

const mockTenants: TenantCardData[] = [
  { id: 'tenant-1', name: '바이오젠 테라퓨틱스', logoUrl: 'https://picsum.photos/seed/logo1/48', centerName: '전북바이오융합원 본원', fieldTags: ['신약개발', '항체'] },
  { id: 'tenant-2', name: '메디퓨처', logoUrl: 'https://picsum.photos/seed/logo2/48', centerName: '전북바이오융합원 본원', fieldTags: ['의료기기', '진단'] },
  { id: 'tenant-3', name: '그린사이언스', logoUrl: 'https://picsum.photos/seed/logo3/48', centerName: '익산 BI 센터', fieldTags: ['건강기능식품'] },
  { id: 'tenant-4', name: '뉴로링크 AI', logoUrl: 'https://picsum.photos/seed/logo4/48', centerName: '정읍 BI 센터', fieldTags: ['AI', '뇌과학'] },
  { id: 'tenant-5', name: '셀큐어', logoUrl: 'https://picsum.photos/seed/logo5/48', centerName: '전북바이오융합원 본원', fieldTags: ['세포치료제'] },
  { id: 'tenant-6', name: '팜캐드', logoUrl: 'https://picsum.photos/seed/logo6/48', centerName: '익산 BI 센터', fieldTags: ['AI', '신약개발'] },
];

// --- STYLED COMPONENTS ---

const Section = styled.section`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VacancyCard = styled(Link)`
    display: block;
    padding: 1rem;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    background-color: white;
    border: 1px solid #e5e7eb;
    transition: box-shadow 0.2s, border-color 0.2s;
    &:hover {
        border-color: #d1d5db;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }
`;

const VacancyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const VacancyTypes = styled.div`
    font-size: 0.875rem;
    color: #6b7280;
`;

const FullWidthSection = styled(Section)`
  grid-column: 1 / -1;
`;

// --- COMPONENT ---

const DashboardView = () => {
  return (
    <Grid $cols={1} $gap="3rem">
      <KPIGroup kpis={kpiData} />

      <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="2rem">
        <Section>
          <SectionHeader>
            <SectionTitle>공실 현황</SectionTitle>
            <ViewAllLink to="/incubation?tab=vacancy">전체 보기</ViewAllLink>
          </SectionHeader>
          <List>
            {mockVacancyPreview.map(item => (
                <VacancyCard key={item.centerId} to={`/incubation?tab=vacancy&centerId=${item.centerId}`}>
                    <VacancyHeader>
                        <span>{item.centerName}</span>
                        <strong>{item.vacancyUnits}개</strong>
                    </VacancyHeader>
                    <VacancyTypes>{item.types.join(', ')}</VacancyTypes>
                </VacancyCard>
            ))}
          </List>
        </Section>
        <Section>
          <SectionHeader>
            <SectionTitle>모집중 공고</SectionTitle>
            <ViewAllLink to="/incubation?tab=apply">전체 보기</ViewAllLink>
          </SectionHeader>
          <List>
            {mockNotices.map(notice => <NoticeCard key={notice.id} notice={notice} />)}
          </List>
        </Section>
      </Grid>

      <FullWidthSection>
        <SectionHeader>
            <SectionTitle>입주기관</SectionTitle>
            <ViewAllLink to="/incubation?tab=tenants">전체 보기</ViewAllLink>
        </SectionHeader>
        <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
            {mockTenants.slice(0, 6).map(tenant => <TenantCard key={tenant.id} tenant={tenant} />)}
        </Grid>
      </FullWidthSection>
    </Grid>
  );
};

export default DashboardView;
