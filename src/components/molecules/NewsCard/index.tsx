import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

// --- STYLED COMPONENTS ---

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid ${DESIGN_SYSTEM.colors.gray[200]};
  box-shadow: ${DESIGN_SYSTEM.shadows.sm};
  transition: all 0.3s ease;
  min-width: 280px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${DESIGN_SYSTEM.shadows.lg};
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${DESIGN_SYSTEM.colors.gray[100]};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryBadge = styled.span<{ color: string, bgColor: string }>`
  position: absolute;
  top: ${DESIGN_SYSTEM.spacing.md};
  left: ${DESIGN_SYSTEM.spacing.md};
  padding: ${DESIGN_SYSTEM.spacing.xs} ${DESIGN_SYSTEM.spacing.sm};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  padding: ${DESIGN_SYSTEM.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.sm} 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Summary = styled.p`
  font-size: 14px;
  color: ${DESIGN_SYSTEM.colors.gray[600]};
  line-height: 1.6;
  margin: 0 0 ${DESIGN_SYSTEM.spacing.md} 0;
  flex-grow: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${DESIGN_SYSTEM.colors.gray[500]};
  padding-top: ${DESIGN_SYSTEM.spacing.sm};
  border-top: 1px solid ${DESIGN_SYSTEM.colors.gray[100]};
`;

// --- COMPONENT ---

import { News } from '../../../../types/api';

const CATEGORY_STYLES = {
  news: { name: '뉴스', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.primary[600] },
  notice: { name: '공지', color: '#FFFFFF', bgColor: DESIGN_SYSTEM.colors.gray[600] },
};

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const categoryStyle = CATEGORY_STYLES[news.category] || CATEGORY_STYLES.news;

  return (
    <CardLink to={`/news/latest/${news.id}`}>
      <CardWrapper>
        <ThumbnailWrapper>
          {news.thumbnailUrl && <Thumbnail src={news.thumbnailUrl} alt={news.title} loading="lazy" />}
          <CategoryBadge color={categoryStyle.color} bgColor={categoryStyle.bgColor}>
            {categoryStyle.name}
          </CategoryBadge>
        </ThumbnailWrapper>
        <ContentWrapper>
          <Title>{news.title}</Title>
          <Summary>{news.summary}</Summary>
          <Footer>
            <span>{news.sourceName}</span>
            <span>{new Date(news.created_at).toLocaleDateString()}</span>
          </Footer>
        </ContentWrapper>
      </CardWrapper>
    </CardLink>
  );
};

export default NewsCard;
