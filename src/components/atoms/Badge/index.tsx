import React from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  children: React.ReactNode;
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const badgeVariants = {
  primary: css`
    background-color: #e0e7ff;
    color: #4338ca;
  `,
  secondary: css`
    background-color: #f3f4f6;
    color: #4b5563;
  `,
  success: css`
    background-color: #d1fae5;
    color: #065f46;
  `,
  warning: css`
    background-color: #fef3c7;
    color: #92400e;
  `,
  danger: css`
    background-color: #fee2e2;
    color: #991b1b;
  `,
};

const StyledBadge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  white-space: nowrap;
  ${({ $variant }) => badgeVariants[$variant || 'primary']}
`;

const Badge: React.FC<BadgeProps> = ({ children, $variant = 'primary' }) => {
  return <StyledBadge $variant={$variant}>{children}</StyledBadge>;
};

export default Badge;
