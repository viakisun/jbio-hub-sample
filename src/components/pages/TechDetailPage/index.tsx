import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Badge from '../../atoms/Badge';
import InfoTable from '../../molecules/InfoTable';
import useTechnology from '../../../hooks/useTechnology';
import { LoadingMessage, ErrorMessage } from '../../organisms/IncubationTabs/shared/StateMessages';

const TechDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tech, loading, error } = useTechnology(id);

  if (loading) return <MainLayout><div className="tech-detail-page__wrapper"><LoadingMessage>Loading technology details...</LoadingMessage></div></MainLayout>;
  if (error) return <MainLayout><div className="tech-detail-page__wrapper"><ErrorMessage>Error: {error.message}</ErrorMessage></div></MainLayout>;
  if (!tech) return <MainLayout><div className="tech-detail-page__wrapper"><ErrorMessage>Technology not found.</ErrorMessage></div></MainLayout>;

  const patentInfo = {
    '개발기관': tech.organization,
    '특허번호': tech.patentNumber || '-',
    '출원일': tech.applicationDate,
    '카테고리': tech.category,
    '이전가능': <Badge variant={tech.transferable ? 'success' : 'danger'}>{tech.transferable ? '가능' : '불가'}</Badge>,
  };

  return (
    <MainLayout>
      <div className="tech-detail-page__wrapper">
        <header className="tech-detail-page__header">
          <h1 className="tech-detail-page__title">{tech.title}</h1>
        </header>
        <section className="tech-detail-page__section">
          <h2 className="tech-detail-page__section-title">기술 개요</h2>
          <p className="tech-detail-page__summary">{tech.summary}</p>
        </section>
        <section className="tech-detail-page__section">
          <h2 className="tech-detail-page__section-title">기술 정보</h2>
          <InfoTable title="" data={patentInfo} />
        </section>
      </div>
    </MainLayout>
  );
};

export default TechDetailPage;
