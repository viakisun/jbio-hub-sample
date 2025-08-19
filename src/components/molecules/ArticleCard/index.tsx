import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/api';
import Badge from '../../atoms/Badge';

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 0.75rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-grow: 1;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  padding-top: 1rem;
  margin-top: auto;
  border-top: 1px solid #f3f4f6;
`;

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <CardLink to={`/articles/${article.id}`}>
      <CardWrapper>
        <ThumbnailWrapper>
          {article.images && article.images[0] ? (
            <Thumbnail src={article.images[0]} alt={article.title} loading="lazy" />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#9ca3af' }}>
              <span>No Image</span>
            </div>
          )}
        </ThumbnailWrapper>
        <ContentWrapper>
          <Title>{article.title}</Title>
          <TagList>
            {article.tags.slice(0, 3).map(tag => (
      <Badge key={tag} $variant="secondary">{tag}</Badge>
            ))}
          </TagList>
          <Footer>
            <span>{article.author}</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </Footer>
        </ContentWrapper>
      </CardWrapper>
    </CardLink>
  );
};

export default ArticleCard;
