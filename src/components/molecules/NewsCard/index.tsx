import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;

  /* Ellipsis for single line */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Summary = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  flex-grow: 1;

  /* Ellipsis for 2 lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
`;

const Source = styled.span`
  font-weight: 500;
`;

// --- COMPONENT ---

export interface NewsCardData {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl?: string;
  sourceName: string;
  publishedAt: string;
}

interface NewsCardProps {
  news: NewsCardData;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <CardLink to={`/news/latest/${news.id}`}>
      <CardWrapper>
        {news.thumbnailUrl && <Thumbnail src={news.thumbnailUrl} alt={news.title} />}
        <ContentWrapper>
          <Title>{news.title}</Title>
          <Summary>{news.summary}</Summary>
          <Footer>
            <Source>{news.sourceName}</Source>
            <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
          </Footer>
        </ContentWrapper>
      </CardWrapper>
    </CardLink>
  );
};

export default NewsCard;
