import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useArticle from '../../../hooks/useArticle';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, loading, error } = useArticle(id || null);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-4">
          <LoadingSkeleton className="h-12 w-3/4 mx-auto" />
          <LoadingSkeleton className="h-6 w-1/2 mx-auto" />
          <LoadingSkeleton className="h-96 w-full" />
          <LoadingSkeleton className="h-6 w-full" />
          <LoadingSkeleton className="h-6 w-5/6" />
        </div>
      );
    }
    if (error) return <ErrorState message={error.message} />;
    if (!article) return <ErrorState message="기사를 찾을 수 없습니다." />;

    return (
      <article className="article-detail-page__wrapper">
        <header className="article-detail-page__header">
          <h1 className="article-detail-page__title">{article.title}</h1>
          <div className="article-detail-page__meta">
            <span>작성자: {article.author}</span>
            <span>발행일: {new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
        </header>

        <div className="article-detail-page__content" dangerouslySetInnerHTML={{ __html: article.contentHTML }} />

        {article.relatedCompanies && article.relatedCompanies.length > 0 && (
          <div className="article-detail-page__related-section">
            <h3 className="article-detail-page__related-title">관련 기업</h3>
            <div className="article-detail-page__related-list">
              {article.relatedCompanies.map(companyId => (
                <Link key={companyId} to={`/companies/${companyId}`}>
                  <Badge variant="primary">{companyId}</Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    );
  }

  return (
    <MainLayout>
      {renderContent()}
    </MainLayout>
  );
};

export default ArticleDetailPage;
