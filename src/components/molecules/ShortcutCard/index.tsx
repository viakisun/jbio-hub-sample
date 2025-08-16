import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef2ff;
  color: #4f46e5;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
`;

// --- COMPONENT ---

interface ShortcutCardProps {
  icon: string;
  title: string;
  description: string;
  to: string;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ icon, title, description, to }) => {
  return (
    <CardLink to={to}>
      <CardWrapper>
        <IconWrapper>
          <Icon name={icon} size={24} />
        </IconWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardWrapper>
    </CardLink>
  );
};

export default ShortcutCard;
