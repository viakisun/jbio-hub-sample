import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Icon from '../../atoms/Icon';
import InfoTable from '../../molecules/InfoTable';
import Button from '../../atoms/Button';

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
      <div className="events-detail-page__wrapper">
        <header className="events-detail-page__header">
          <h1 className="events-detail-page__title">{mockEventDetail.title}</h1>
          <p className="events-detail-page__subtitle">{mockEventDetail.subtitle}</p>
          <div className="events-detail-page__badge-container">
            <span className="events-detail-page__badge">{mockEventDetail.locationType}</span>
            <span className="events-detail-page__badge">{mockEventDetail.status}</span>
          </div>
        </header>

        <div className="events-detail-page__action-buttons">
          <Button
            onClick={(e) => { if (!isRegistrationActive) e.preventDefault(); }}
            disabled={!isRegistrationActive}
            variant={isRegistrationActive ? 'primary' : 'secondary'}
          >
            {isRegistrationActive ? '지금 신청하기' : '신청 마감'}
          </Button>
          <Button variant="secondary"><Icon name="share2" size={16}/> 공유하기</Button>
          <Button variant="secondary"><Icon name="calendar" size={16}/> 캘린더에 추가</Button>
        </div>

        {mockEventDetail.posterUrl && <img src={mockEventDetail.posterUrl} alt={`${mockEventDetail.title} Poster`} className="events-detail-page__poster" />}

        <section className="events-detail-page__section">
          <InfoTable title="행사 정보" data={eventInfo} />
        </section>

        <section className="events-detail-page__section">
          <div className="events-detail-page__html-content" dangerouslySetInnerHTML={{ __html: mockEventDetail.descriptionHTML }} />
        </section>

      </div>
    </MainLayout>
  );
};

export default EventsDetailPage;
