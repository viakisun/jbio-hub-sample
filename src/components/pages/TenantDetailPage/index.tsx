import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import InfoTable from '../../molecules/InfoTable';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
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

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

const HeaderContent = styled.div``;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const Summary = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #eef2ff;
  color: #4338ca;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

// --- COMPONENT ---

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
      <PageWrapper>
        <Header>
          <Logo src={mockTenantDetail.logoUrl} alt={`${mockTenantDetail.name} Logo`} />
          <HeaderContent>
            <Title>{mockTenantDetail.name}</Title>
            <Summary>{mockTenantDetail.summary}</Summary>
          </HeaderContent>
        </Header>

        <Section>
          <SectionTitle>기업 정보</SectionTitle>
          <InfoTable title="" data={tenantInfo} />
        </Section>

        <Section>
          <SectionTitle>주요 분야</SectionTitle>
          <TagContainer>
            {mockTenantDetail.fieldTags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </TagContainer>
        </Section>

        <Section>
          <SectionTitle>연락처 정보</SectionTitle>
          <InfoTable title="" data={contactInfo} />
        </Section>

      </PageWrapper>
    </MainLayout>
  );
};

export default TenantDetailPage;
