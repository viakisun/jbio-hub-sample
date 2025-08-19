import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useArticle from '../../../hooks/useArticle';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const ArticleWrapper = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const ArticleHeader = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;
  margin-bottom: 1rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const Content = styled.div`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.8;

  h1, h2, h3 {
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3;
  }
  p {
    margin-bottom: 1.5em;
  }
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 2em 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  a {
    color: #4f46e5;
    text-decoration: underline;
  }
`;

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
      <ArticleWrapper>
        <ArticleHeader>
          <Title>{article.title}</Title>
          <Meta>
            <span>작성자: {article.author}</span>
            <span>발행일: {new Date(article.publishDate).toLocaleDateString()}</span>
          </Meta>
        </ArticleHeader>

        <Content dangerouslySetInnerHTML={{ __html: article.contentHTML }} />

        {article.relatedCompanies && article.relatedCompanies.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">관련 기업</h3>
            <div className="flex gap-2">
              {article.relatedCompanies.map(companyId => (
                // In a real app, you'd fetch company name for the badge
                <Link key={companyId} to={`/companies/${companyId}`}>
                  <Badge $variant="primary">{companyId}</Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </ArticleWrapper>
    );
  }

  return (
    <MainLayout>
      {renderContent()}
    </MainLayout>
  );
};

export default ArticleDetailPage;
