import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Badge from '../../atoms/Badge';
import InfoTable from '../../molecules/InfoTable';
import useTechnology from '../../../hooks/useTechnology'; // Import the new hook
import { LoadingMessage, ErrorMessage } from '../../organisms/IncubationTabs/shared/StateMessages';

const PageWrapper = styled.div` max-width: 900px; margin: 0 auto; padding: 2rem; `;
const ArticleHeader = styled.header` margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e5e7eb; `;
const Title = styled.h1` font-size: 2.25rem; font-weight: 700; line-height: 1.3; margin-bottom: 1rem; `;
const Section = styled.section` margin-top: 3rem; `;
const SectionTitle = styled.h2` font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb; `;
const Summary = styled.p` line-height: 1.7; font-size: 1rem; color: #374151; margin: 2rem 0;`;

const TechDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tech, loading, error } = useTechnology(id);

  if (loading) return <MainLayout><PageWrapper><LoadingMessage>Loading technology details...</LoadingMessage></PageWrapper></MainLayout>;
  if (error) return <MainLayout><PageWrapper><ErrorMessage>Error: {error.message}</ErrorMessage></PageWrapper></MainLayout>;
  if (!tech) return <MainLayout><PageWrapper><ErrorMessage>Technology not found.</ErrorMessage></PageWrapper></MainLayout>;

  const patentInfo = {
    '개발기관': tech.organization,
    '특허번호': tech.patentNumber || '-',
    '출원일': tech.applicationDate,
    '카테고리': tech.category,
    '이전가능': <Badge $variant={tech.transferable ? 'success' : 'danger'}>{tech.transferable ? '가능' : '불가'}</Badge>,
  };

  return (
    <MainLayout>
      <PageWrapper>
        <ArticleHeader>
          <Title>{tech.title}</Title>
        </ArticleHeader>
        <Section>
          <SectionTitle>기술 개요</SectionTitle>
          <Summary>{tech.summary}</Summary>
        </Section>
        <Section>
          <SectionTitle>기술 정보</SectionTitle>
          <InfoTable title="" data={patentInfo} />
        </Section>
      </PageWrapper>
    </MainLayout>
  );
};

export default TechDetailPage;
