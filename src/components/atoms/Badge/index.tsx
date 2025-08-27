import React from 'react';
import clsx from 'clsx';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const badgeClasses = clsx(
    'badge',
    `badge--${variant}`,
    className
  );

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;
