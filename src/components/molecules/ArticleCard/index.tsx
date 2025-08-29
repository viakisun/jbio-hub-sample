import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/api';
import Badge from '../../atoms/Badge';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formattedDate = new Date(article.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <div className="article-card__wrapper">
        <div className="article-card__thumbnail-wrapper">
          {article.thumbnailUrl ? (
            <img src={article.thumbnailUrl} alt={article.title} className="article-card__thumbnail" />
          ) : (
            <div className="article-card__no-image"><span>No Image</span></div>
          )}
        </div>
        <div className="article-card__content">
          <p className="article-card__category">{article.category}</p>
          <h3 className="article-card__title">{article.title}</h3>
          <p className="article-card__summary">{article.summary}</p>
          <div className="article-card__tags">
            {(article.tags || []).slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="article-card__footer">
            <span>{article.sourceName}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
