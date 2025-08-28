import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';

interface ExplorationCardProps {
  title: string;
  description: string;
  buttonText: string;
  to: string;
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({ title, description, buttonText, to }) => {
  return (
    <Link to={to} className="exploration-card">
      <div className="exploration-card__wrapper">
        <div>
          <h3 className="exploration-card__title">{title}</h3>
          <p className="exploration-card__description">{description}</p>
        </div>
        <Button variant="primary" fullWidth>{buttonText}</Button>
      </div>
    </Link>
  );
};

export default ExplorationCard;
