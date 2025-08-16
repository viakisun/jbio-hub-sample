import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Icon from '../../atoms/Icon';
import InfoTable from '../../molecules/InfoTable';

// --- MOCK DATA ---
const mockEventDetail = {
  id: 'event-1',
  title: '2024 글로벌 바이오 컨퍼런스 (GBC)',
  subtitle: '아시아 최대 규모의 바이오 산업 교류의 장',
  status: 'upcoming',
  locationType: 'offline',
  eventStartAt: '2024-09-01T09:00:00Z',
  eventEndAt: '2024-09-03T18:00:00Z',
  registrationStartAt: '2024-07-01T09:00:00Z',
  registrationEndAt: '2024-08-25T18:00:00Z',
  host: '식품의약품안전처',
  locationName: '코엑스, 서울',
  categories: ["컨퍼런스", "글로벌"],
  fields: ["산업일반", "의료"],
  registerUrl: '#',
  fee: '유료(사전등록 10만원)',
  posterUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  descriptionHTML: `
    <h2>행사 소개</h2>
    <p>글로벌 바이오 컨퍼런스(GBC)는 바이오의약품 분야의 규제기관, 제약업계, 학계 등 전문가들이 모여 최신 개발 동향과 규제 조화 등을 논의하는 국제 행사입니다.</p>
    <br/>
    <h2>주요 프로그램</h2>
    <ul>
      <li>기조강연: 노벨상 수상자 초청 강연</li>
      <li>세션 1: 세포·유전자치료제 개발 동향</li>
      <li>세션 2: 백신 플랫폼 기술의 미래</li>
      <li>비즈니스 파트너링</li>
    </ul>
    <br/>
    <h2>유의사항</h2>
    <p>사전 등록 시 할인 혜택이 제공됩니다. 현장 등록은 조기 마감될 수 있습니다.</p>
  `
};

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const ArticleHeader = styled.header`
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 16px;
  background-color: #f9fafb;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  background-color: #e0e7ff;
  color: #3730a3;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
`;

const SectionWrapper = styled.div`
  margin: 3rem 0;
`;

const HtmlContent = styled.div`
  line-height: 1.7;
  font-size: 1rem;
  h2 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
  ul { list-style-position: inside; padding-left: 1rem; margin-bottom: 1rem; }
  li { margin-bottom: 0.5rem; }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;

  &.primary {
    background-color: #4f46e5;
    color: white;
    &:hover { background-color: #4338ca; }
  }

  &.secondary {
    background-color: #e5e7eb;
    color: #374151;
    &:hover { background-color: #d1d5db; }
  }

  &.disabled {
    background-color: #9ca3af;
    color: #e5e7eb;
    cursor: not-allowed;
  }
`;


// --- COMPONENT ---

const EventsDetailPage = () => {
  const { eventId } = useParams();

  const isRegistrationActive = mockEventDetail.registerUrl && new Date(mockEventDetail.registrationEndAt!) > new Date();

  const eventInfo = {
    '주최': mockEventDetail.host,
    '장소': mockEventDetail.locationType === 'offline' ? mockEventDetail.locationName : '온라인',
    '행사종류': mockEventDetail.categories?.join(', '),
    '분야': mockEventDetail.fields?.join(', '),
    '접수기간': `${new Date(mockEventDetail.registrationStartAt!).toLocaleDateString()} ~ ${new Date(mockEventDetail.registrationEndAt!).toLocaleDateString()}`,
    '행사일시': `${new Date(mockEventDetail.eventStartAt).toLocaleDateString()} ~ ${new Date(mockEventDetail.eventEndAt).toLocaleDateString()}`,
    '참가비': mockEventDetail.fee,
  };

  return (
    <MainLayout>
      <PageWrapper>
        <ArticleHeader>
          <Title>{mockEventDetail.title}</Title>
          <Subtitle>{mockEventDetail.subtitle}</Subtitle>
          <BadgeContainer>
            <Badge>{mockEventDetail.locationType}</Badge>
            <Badge>{mockEventDetail.status}</Badge>
          </BadgeContainer>
        </ArticleHeader>

        <ActionButtons>
          <ActionButton
            href={isRegistrationActive ? mockEventDetail.registerUrl : undefined}
            className={isRegistrationActive ? 'primary' : 'disabled'}
            onClick={(e) => !isRegistrationActive && e.preventDefault()}
          >
            {isRegistrationActive ? '지금 신청하기' : '신청 마감'}
          </ActionButton>
          <ActionButton href="#" className="secondary"><Icon name="share2" size={16}/> 공유하기</ActionButton>
          <ActionButton href="#" className="secondary"><Icon name="calendar" size={16}/> 캘린더에 추가</ActionButton>
        </ActionButtons>

        {mockEventDetail.posterUrl && <Poster src={mockEventDetail.posterUrl} alt={`${mockEventDetail.title} Poster`} />}

        <SectionWrapper>
          <InfoTable title="행사 정보" data={eventInfo} />
        </SectionWrapper>

        <SectionWrapper>
          <HtmlContent dangerouslySetInnerHTML={{ __html: mockEventDetail.descriptionHTML }} />
        </SectionWrapper>

      </PageWrapper>
    </MainLayout>
  );
};

export default EventsDetailPage;
