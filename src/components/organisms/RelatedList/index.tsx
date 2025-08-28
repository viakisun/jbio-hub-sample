import React from 'react';
import { Link } from 'react-router-dom';

export interface RelatedItem {
  id: string;
  title: string;
  url: string;
}

interface RelatedListProps {
  title: string;
  items: RelatedItem[];
}

const RelatedList: React.FC<RelatedListProps> = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="related-list">
      <h2 className="related-list__title">{title}</h2>
      <ul className="related-list__list">
        {items.map(item => (
          <li key={item.id} className="related-list__list-item">
            <Link to={item.url} className="related-list__item-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedList;
