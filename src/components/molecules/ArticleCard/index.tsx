import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/api';
import Badge from '../../atoms/Badge';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <div className="article-card__wrapper">
        <div className="article-card__thumbnail-wrapper">
          {article.images && article.images[0] ? (
            <img src={article.images[0]} alt={article.title} loading="lazy" className="article-card__thumbnail" />
          ) : (
            <div className="article-card__no-image">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className="article-card__content">
          <h3 className="article-card__title">{article.title}</h3>
          <div className="article-card__tags">
            {article.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="article-card__footer">
            <span>{article.author}</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
