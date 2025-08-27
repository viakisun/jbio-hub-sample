import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  style,
  className,
  disabled,
}) => {
  const buttonClasses = clsx(
    'btn',
    `btn--${variant}`,
    { 'w-full': fullWidth },
    className
  );

  return (
    <button
      onClick={onClick}
      style={style}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
