import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import InfoTable from '../../molecules/InfoTable';
import AttachmentList from '../../molecules/AttachmentList';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const mockAnnouncement = {
  announcementTitle: '[JB-Bio] 2024년 바이오 스타트업 성장 지원 프로그램 참여기업 모집',
  industryField: '바이오/헬스케어',
  businessType: '기술개발',
  companyType: '예비창업자, 스타트업',
  announcementDate: '2024-07-15',
  applicationStartDate: '2024-07-20 09:00',
  applicationEndDate: '2024-08-20 18:00',
  productCode: 'JB-BIO-2024-001',
  organizationName: '전북바이오융합산업진흥원',
  organizationDept: '기업지원단',
  contactName: '김담당',
  contactPhone: '063-123-4567',
  descriptionHTML: `
    <h2>사업목적</h2>
    <p>도내 바이오 스타트업의 성장을 촉진하고, 글로벌 경쟁력을 갖춘 기업으로 육성하기 위함.</p>
    <br/>
    <h2>지원내용</h2>
    <p>1. 사업화 자금 지원 (최대 5,000만원)</p>
    <p>2. 전문 멘토링 및 컨설팅</p>
    <p>3. 전북바이오융합산업진흥원 인프라(장비, 시설) 이용 지원</p>
    <br/>
    <p>자세한 내용은 첨부된 공고문을 확인해주시기 바랍니다.</p>
    <p>관련 링크: <a href="https://www.jif.re.kr/" target="_blank" rel="noopener noreferrer">전북바이오융합산업진흥원 홈페이지</a></p>
    <img src="https://via.placeholder.com/800x400.png?text=Sample+Image" alt="Sample Image" style="max-width: 100%; border-radius: 8px; margin-top: 1rem;" />
  `,
  attachments: [
    { fileName: '2024년 바이오 스타트업 성장 지원 프로그램 공고문.hwp', fileUrl: '#', fileSize: '1.2MB' },
    { fileName: '사업계획서 양식.zip', fileUrl: '#', fileSize: '850KB' },
    { fileName: '제출서류 목록.pdf', fileUrl: '#', fileSize: '300KB' },
  ],
};

const AnnouncementDetailPage = () => {
  const { category, announcementId } = useParams();
  const navigate = useNavigate();

  const announcementInfo = {
    '산업분야': mockAnnouncement.industryField,
    '사업구분': mockAnnouncement.businessType,
    '기업유형': mockAnnouncement.companyType,
    '공고일': mockAnnouncement.announcementDate,
    '신청기간': `${mockAnnouncement.applicationStartDate} ~ ${mockAnnouncement.applicationEndDate}`,
    '품목코드': mockAnnouncement.productCode,
  };

  const organizationInfo = {
    '전담기관': mockAnnouncement.organizationName,
    '전담부서': mockAnnouncement.organizationDept,
    '담당자명': mockAnnouncement.contactName,
    '담당자 연락처': mockAnnouncement.contactPhone,
  };

  return (
    <MainLayout>
      <div className="announcement-detail-page">
        <nav className="announcement-detail-page__breadcrumb">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <Link to="/announcements">{category}</Link>
          <span>&gt;</span>
          <span>{mockAnnouncement.announcementTitle}</span>
        </nav>

        <h1 className="announcement-detail-page__title">{mockAnnouncement.announcementTitle}</h1>

        <section className="announcement-detail-page__section">
          <InfoTable title="공고 정보" data={announcementInfo} />
        </section>

        <section className="announcement-detail-page__section">
          <InfoTable title="전담기관 정보" data={organizationInfo} />
        </section>

        <section className="announcement-detail-page__section">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>상세 정보</h3>
          <div className="announcement-detail-page__html-content" dangerouslySetInnerHTML={{ __html: mockAnnouncement.descriptionHTML }} />
        </section>

        <section className="announcement-detail-page__section">
          <AttachmentList title="첨부문서" attachments={mockAnnouncement.attachments} />
        </section>

        <div className="announcement-detail-page__info-text">
          <p>※ 사업안내 내용을 반드시 숙지하시고 사업 신청을 하시기 바랍니다.</p>
          <p>※ 본 사업은 기업 회원만 신청 가능합니다. 로그인 후 신청해주세요.</p>
        </div>

        <div className="announcement-detail-page__button-container">
          <Button onClick={() => navigate(-1)} variant="secondary">
            <Icon name="arrowLeft" size={16} />
            <span style={{ marginLeft: '0.5rem' }}>뒤로가기</span>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnnouncementDetailPage;
