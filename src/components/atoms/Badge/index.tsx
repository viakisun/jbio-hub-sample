import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className }) => {
  const baseClass = 'badge';
  const variantClass = `badge--${variant}`;
  const combinedClassName = [baseClass, variantClass, className].filter(Boolean).join(' ');

  return <span className={combinedClassName}>{children}</span>;
};

export default Badge;
