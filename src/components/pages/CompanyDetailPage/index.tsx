import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useCompany from '../../../hooks/useCompany';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import { ErrorState } from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const DetailLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 2rem 0;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.main``;
const Sidebar = styled.aside``;

const CompanyHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  object-fit: cover;
`;

const TitleGroup = styled.div`
  flex-grow: 1;
`;

const CompanyName = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
`;

const InfoCard = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  position: sticky;
  top: 2rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`;

const CompanyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: company, loading, error } = useCompany(id);

  if (loading) return <MainLayout><LoadingSkeleton count={8} /></MainLayout>;
  if (error) return <MainLayout><ErrorState message={error.message} /></MainLayout>;
  if (!company) return <MainLayout><ErrorState message="기업 정보를 찾을 수 없습니다." /></MainLayout>;

  return (
    <MainLayout>
      <DetailLayout>
        <MainContent>
          <CompanyHeader>
            <Logo src={company.logoUrl || `https://ui-avatars.com/api/?name=${company.name}&background=random`} alt={`${company.name} logo`} />
            <TitleGroup>
              <CompanyName>{company.name}</CompanyName>
              <div className="flex gap-2 mt-2">
                <Badge>{company.industry}</Badge>
                <Badge variant="secondary">{company.region}</Badge>
              </div>
            </TitleGroup>
          </CompanyHeader>

          <Section>
            <SectionTitle>기업 소개</SectionTitle>
            <p className="text-gray-700 leading-relaxed">{company.description}</p>
          </Section>

          {company.products.length > 0 && (
            <Section>
              <SectionTitle>주요 제품</SectionTitle>
              <ul className="list-disc list-inside space-y-2">
                {company.products.map(p => <li key={p}>{p}</li>)}
              </ul>
            </Section>
          )}

          {company.achievements.length > 0 && (
            <Section>
              <SectionTitle>주요 활동</SectionTitle>
              <ul className="list-disc list-inside space-y-2">
                {company.achievements.map(a => <li key={a}>{a}</li>)}
              </ul>
            </Section>
          )}

          {company.patents.length > 0 && (
            <Section>
              <SectionTitle>보유 특허</SectionTitle>
              <ul className="list-disc list-inside space-y-2">
                {company.patents.map(p => <li key={p}>{p}</li>)}
              </ul>
            </Section>
          )}
        </MainContent>

        <Sidebar>
          <InfoCard>
            <SectionTitle>기본 정보</SectionTitle>
            <InfoList>
              <InfoItem><span>설립년도</span> <strong>{company.foundedYear}</strong></InfoItem>
              <InfoItem><span>기업규모</span> <strong>{company.sizeCategory}</strong></InfoItem>
              <InfoItem><span>직원 수</span> <strong>{company.employees}명</strong></InfoItem>
            </InfoList>

            <SectionTitle className="mt-6">담당자 정보</SectionTitle>
            <InfoList>
              <InfoItem><span>이름</span> <strong>{company.contact.name}</strong></InfoItem>
              <InfoItem><span>이메일</span> <a href={`mailto:${company.contact.email}`} className="text-indigo-600 hover:underline">{company.contact.email}</a></InfoItem>
              <InfoItem><span>연락처</span> <strong>{company.contact.phone}</strong></InfoItem>
            </InfoList>

            {company.websiteUrl && (
              <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg mt-6 hover:bg-indigo-700">
                웹사이트 방문
              </a>
            )}
          </InfoCard>
        </Sidebar>
      </DetailLayout>
    </MainLayout>
  );
};

export default CompanyDetailPage;
