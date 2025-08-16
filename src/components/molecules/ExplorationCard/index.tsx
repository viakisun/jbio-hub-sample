import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`;

interface ExplorationCardProps {
  title: string;
  description: string;
  buttonText: string;
  to: string;
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({ title, description, buttonText, to }) => {
  return (
    <CardLink to={to}>
      <CardWrapper>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Button variant="primary" $fullWidth>{buttonText}</Button>
      </CardWrapper>
    </CardLink>
  );
};

export default ExplorationCard;
