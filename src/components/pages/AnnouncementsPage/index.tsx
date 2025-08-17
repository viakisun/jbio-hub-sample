import React, { useState } from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import MainLayout from '../../templates/MainLayout';
import AnnouncementList from '../../organisms/AnnouncementList';
import AnnouncementsDashboard from '../../organisms/AnnouncementsDashboard';
import Tabs from '../../molecules/Tabs';

// --- DATA MODELS ---
interface Announcement {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  budget: string;
  status: 'active' | 'urgent';
  daysLeft: number;
  category: string;
}

// --- MOCK DATA ---
const mockAnnouncements: Announcement[] = [
  {
    id: 1,
    title: '[JB-Bio] 2024년 바이오 스타트업 성장 지원 프로그램 참여기업 모집',
    organization: '전북바이오융합산업진흥원',
    deadline: '2024-08-20',
    budget: '5,000만원',
    status: 'urgent',
    daysLeft: 5,
    category: 'startup-support',
  },
  {
    id: 2,
    title: '글로벌 바이오 기술 이전 설명회 개최 안내',
    organization: '한국생명공학연구원',
    deadline: '2024-08-25',
    budget: 'N/A',
    status: 'active',
    daysLeft: 10,
    category: 'tech-transfer',
  },
  {
    id: 3,
    title: '2024년 3분기 연구장비 공동활용 지원사업 공고',
    organization: '과학기술정보통신부',
    deadline: '2024-09-10',
    budget: '1억원',
    status: 'active',
    daysLeft: 26,
    category: 'rnd',
  },
  {
    id: 4,
    title: '정부 R&D 특허전략 지원사업 참여기업 모집',
    organization: '특허청',
    deadline: '2024-09-15',
    budget: '3,000만원',
    status: 'active',
    daysLeft: 31,
    category: 'government',
  },
];

const TABS = [
  { id: 'all', label: '전체' },
  { id: 'government', label: '정부/지자체' },
  { id: 'customized', label: '기업 맞춤형 지원사업' },
  { id: 'rnd', label: '연구개발(R&D)' },
  { id: 'startup-support', label: '창업 및 기술이전' },
];


// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    padding: 1.5rem 1rem;
  }
`;

const PageHeader = styled.header`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

// --- COMPONENT ---

const AnnouncementsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredAnnouncements =
    activeTab === 'all'
      ? mockAnnouncements
      : mockAnnouncements.filter((announcement) => announcement.category === activeTab);

  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>JB 지원사업공고</PageTitle>
          <PageSubtitle>전북 바이오산업의 성장을 위한 다양한 지원사업을 확인하세요.</PageSubtitle>
        </PageHeader>
        <AnnouncementsDashboard />
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
        <AnnouncementList announcements={filteredAnnouncements} />
      </PageWrapper>
    </MainLayout>
  );
};

export default AnnouncementsPage;
