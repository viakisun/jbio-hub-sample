import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/api';
import Button from '../../atoms/Button';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="card-link">
      <div className="card">
        <div className="card__image-container">
          {article.images && article.images[0] ? (
            <img src={article.images[0]} alt={article.title} className="card__image" loading="lazy" />
          ) : (
            <div className="card__image-placeholder">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className="card__content">
          <h3 className="card__title">{article.title}</h3>
          <p className="card__meta">
            {article.author} - {new Date(article.publishDate).toLocaleDateString()}
          </p>
          <div className="card__actions">
            <Button variant="ghost">Read More</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
