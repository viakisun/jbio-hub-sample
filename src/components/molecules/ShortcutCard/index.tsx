import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';

interface ShortcutCardProps {
  icon: string;
  title: string;
  description: string;
  to: string;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ icon, title, description, to }) => {
  return (
    <Link to={to} className="shortcut-card">
      <div className="shortcut-card__wrapper">
        <div className="shortcut-card__icon-wrapper">
          <Icon name={icon} size={24} />
        </div>
        <h3 className="shortcut-card__title">{title}</h3>
        <p className="shortcut-card__description">{description}</p>
      </div>
    </Link>
  );
};

export default ShortcutCard;
