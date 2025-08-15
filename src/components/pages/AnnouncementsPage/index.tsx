import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Icon from '../../atoms/Icon';

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
    category: 'rnd-support',
  },
  // Add more mock data as needed
];

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ListItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ListItemWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const StatusBadge = styled.span<{ status: 'active' | 'urgent' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.status === 'active' ? '#10b981' : '#f59e0b'};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const DaysLeft = styled.div<{ days: number }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.days <= 7 ? '#f59e0b' : '#4f46e5'};
  font-size: 0.875rem;
  font-weight: 700;
`;

const ItemTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const Organization = styled.span``;
const Budget = styled.span`
  font-weight: 600;
  color: #111827;
`;


// --- COMPONENT ---

const AnnouncementsPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <PageHeader>
          <PageTitle>JB 지원사업공고</PageTitle>
          <PageSubtitle>전북 바이오산업의 성장을 위한 다양한 지원사업을 확인하세요.</PageSubtitle>
        </PageHeader>
        <ListContainer>
          {mockAnnouncements.map((announcement) => (
            <ListItemLink key={announcement.id} to={`/support/${announcement.category}/${announcement.id}`}>
              <ListItemWrapper>
                <ItemHeader>
                  <StatusBadge status={announcement.status}>
                    {announcement.status === 'active' ? '진행중' : '마감임박'}
                  </StatusBadge>
                  <DaysLeft days={announcement.daysLeft}>
                    <Icon name="clock" size={14} />
                    D-{announcement.daysLeft}
                  </DaysLeft>
                </ItemHeader>
                <ItemTitle>{announcement.title}</ItemTitle>
                <ItemFooter>
                  <Organization>{announcement.organization}</Organization>
                  <Budget>{announcement.budget}</Budget>
                </ItemFooter>
              </ListItemWrapper>
            </ListItemLink>
          ))}
        </ListContainer>
      </PageWrapper>
    </MainLayout>
  );
};

export default AnnouncementsPage;
