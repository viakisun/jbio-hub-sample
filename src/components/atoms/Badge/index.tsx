import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const BadgeWrapper = styled.span<{
  color?: string;
  backgroundColor?: string;
}>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  color: ${props => props.color || '#1f2937'}; /* gray-800 */
  background-color: ${props => props.backgroundColor || '#e5e7eb'}; /* gray-200 */
`;

// --- COMPONENT ---

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color, backgroundColor, className }) => {
  return (
    <BadgeWrapper color={color} backgroundColor={backgroundColor} className={className}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;
