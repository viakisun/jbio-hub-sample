import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const fullWidthClass = fullWidth ? 'btn--full-width' : '';
  const combinedClassName = [baseClass, variantClass, fullWidthClass, className].filter(Boolean).join(' ');

  return (
    <button
      onClick={onClick}
      style={style}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
