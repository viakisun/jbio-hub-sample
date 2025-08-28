import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useCompany from '../../../hooks/useCompany';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const CompanyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: company, loading, error } = useCompany(id || null);

  if (loading) return <MainLayout><LoadingSkeleton count={8} /></MainLayout>;
  if (error) return <MainLayout><ErrorState message={error.message} /></MainLayout>;
  if (!company) return <MainLayout><ErrorState message="기업 정보를 찾을 수 없습니다." /></MainLayout>;

  return (
    <MainLayout>
      <div className="company-detail-page__layout">
        <main className="company-detail-page__main-content">
          <header className="company-detail-page__header">
            <img src={company.logoUrl || `https://ui-avatars.com/api/?name=${company.name}&background=random`} alt={`${company.name} logo`} className="company-detail-page__logo" />
            <div className="company-detail-page__title-group">
              <h1 className="company-detail-page__name">{company.name}</h1>
              <div className="flex gap-2 mt-2">
                <Badge>{company.industry}</Badge>
                <Badge variant="secondary">{company.region}</Badge>
              </div>
            </div>
          </header>

          <section className="company-detail-page__section">
            <h2 className="company-detail-page__section-title">기업 소개</h2>
            <p className="text-gray-700 leading-relaxed">{company.description}</p>
          </section>

          {company.products.length > 0 && (
            <section className="company-detail-page__section">
              <h2 className="company-detail-page__section-title">주요 제품</h2>
              <ul className="list-disc list-inside space-y-2">
                {company.products.map(p => <li key={p}>{p}</li>)}
              </ul>
            </section>
          )}

          {company.achievements.length > 0 && (
            <section className="company-detail-page__section">
              <h2 className="company-detail-page__section-title">주요 활동</h2>
              <ul className="list-disc list-inside space-y-2">
                {company.achievements.map(a => <li key={a}>{a}</li>)}
              </ul>
            </section>
          )}

          {company.patents.length > 0 && (
            <section className="company-detail-page__section">
              <h2 className="company-detail-page__section-title">보유 특허</h2>
              <ul className="list-disc list-inside space-y-2">
                {company.patents.map(p => <li key={p}>{p}</li>)}
              </ul>
            </section>
          )}
        </main>

        <aside className="company-detail-page__sidebar">
          <div className="company-detail-page__info-card">
            <h2 className="company-detail-page__section-title">기본 정보</h2>
            <ul className="company-detail-page__info-list">
              <li className="company-detail-page__info-item"><span>설립년도</span> <strong>{company.foundedYear}</strong></li>
              <li className="company-detail-page__info-item"><span>기업규모</span> <strong>{company.sizeCategory}</strong></li>
              <li className="company-detail-page__info-item"><span>직원 수</span> <strong>{company.employees}명</strong></li>
            </ul>

            <h2 className="company-detail-page__section-title mt-6">담당자 정보</h2>
            <ul className="company-detail-page__info-list">
              <li className="company-detail-page__info-item"><span>이름</span> <strong>{company.contact.name}</strong></li>
              <li className="company-detail-page__info-item"><span>이메일</span> <a href={`mailto:${company.contact.email}`} className="text-indigo-600 hover:underline">{company.contact.email}</a></li>
              <li className="company-detail-page__info-item"><span>연락처</span> <strong>{company.contact.phone}</strong></li>
            </ul>

            {company.websiteUrl && (
              <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg mt-6 hover:bg-indigo-700">
                웹사이트 방문
              </a>
            )}
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default CompanyDetailPage;
