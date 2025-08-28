import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import InfoTable from '../../molecules/InfoTable';

const mockTenantDetail = {
  id: 'tenant-1',
  name: '바이오젠 테라퓨틱스',
  logoUrl: 'https://picsum.photos/seed/logo1/96',
  websiteUrl: '#',
  summary: '혁신적인 항체 신약 개발을 통해 난치성 질환 극복에 도전하는 바이오 벤처입니다.',
  region: '전주',
  centerName: '전북바이오융합원 본원',
  fieldTags: ['신약개발', '항체', '바이오의약품'],
  targetCriteria: '창업 3년 미만, 기술보증기금 10억 이상',
  moveInDate: '2023-05-01',
  status: '입주중',
  contactName: '이대표',
  contactPhone: '063-222-3333',
  contactEmail: 'contact@biogen-thera.com',
  supportPrograms: ['R&D 지원', '사업화 컨설팅', '투자 연계'],
};

const TenantDetailPage = () => {
  const { orgId } = useParams();

  const tenantInfo = {
    '입주 센터': mockTenantDetail.centerName,
    '입주 일자': mockTenantDetail.moveInDate,
    '입주 상태': mockTenantDetail.status,
    '입주 대상': mockTenantDetail.targetCriteria,
  };

  const contactInfo = {
    '담당자': mockTenantDetail.contactName,
    '연락처': mockTenantDetail.contactPhone,
    '이메일': mockTenantDetail.contactEmail,
    '웹사이트': <a href={mockTenantDetail.websiteUrl} target="_blank" rel="noopener noreferrer">{mockTenantDetail.websiteUrl}</a>,
  };

  return (
    <MainLayout>
      <div className="tenant-detail-page__wrapper">
        <header className="tenant-detail-page__header">
          <img src={mockTenantDetail.logoUrl} alt={`${mockTenantDetail.name} Logo`} className="tenant-detail-page__logo" />
          <div className="tenant-detail-page__header-content">
            <h1 className="tenant-detail-page__title">{mockTenantDetail.name}</h1>
            <p className="tenant-detail-page__summary">{mockTenantDetail.summary}</p>
          </div>
        </header>

        <section className="tenant-detail-page__section">
          <h2 className="tenant-detail-page__section-title">기업 정보</h2>
          <InfoTable title="" data={tenantInfo} />
        </section>

        <section className="tenant-detail-page__section">
          <h2 className="tenant-detail-page__section-title">주요 분야</h2>
          <div className="tenant-detail-page__tag-container">
            {mockTenantDetail.fieldTags.map(tag => <span key={tag} className="tenant-detail-page__tag">{tag}</span>)}
          </div>
        </section>

        <section className="tenant-detail-page__section">
          <h2 className="tenant-detail-page__section-title">연락처 정보</h2>
          <InfoTable title="" data={contactInfo} />
        </section>

      </div>
    </MainLayout>
  );
};

export default TenantDetailPage;
