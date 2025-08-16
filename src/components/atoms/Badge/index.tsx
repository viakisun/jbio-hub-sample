import React from 'react';
import styled, { css } from 'styled-components';

// --- CONFIG ---

const variants = {
  default: css`
    color: #1f2937; /* gray-800 */
    background-color: #e5e7eb; /* gray-200 */
  `,
  new: css`
    color: #1d4ed8; /* blue-700 */
    background-color: #dbeafe; /* blue-100 */
  `,
  updated: css`
    color: #15803d; /* green-700 */
    background-color: #dcfce7; /* green-100 */
  `,
};

type BadgeVariant = keyof typeof variants;

// --- STYLED COMPONENTS ---

const BadgeWrapper = styled.span<{
  variant: BadgeVariant;
}>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  text-transform: uppercase;
  ${({ variant }) => variants[variant]}
`;

// --- COMPONENT ---

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  return (
    <BadgeWrapper variant={variant} className={className}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;
