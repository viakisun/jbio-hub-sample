import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../../../types/api';

const CATEGORY_STYLES: { [key in 'news' | 'notice']: { name: string; className: string } } = {
  news: { name: '뉴스', className: 'news-card__category-badge--news' },
  notice: { name: '공지', className: 'news-card__category-badge--notice' },
};

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const categoryStyle = CATEGORY_STYLES[news.category] || CATEGORY_STYLES.news;

  return (
    <Link to={`/news/latest/${news.id}`} className="news-card">
      <div className="news-card__thumbnail-wrapper">
        {news.thumbnailUrl && <img src={news.thumbnailUrl} alt={news.title} loading="lazy" className="news-card__thumbnail" />}
        <span className={`news-card__category-badge ${categoryStyle.className}`}>
          {categoryStyle.name}
        </span>
      </div>
      <div className="news-card__content">
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__summary">{news.summary}</p>
        <div className="news-card__footer">
          <span>{news.sourceName}</span>
          <span>{new Date(news.created_at).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
