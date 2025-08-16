import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  key?: React.Key;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, className, key, disabled }) => {
  return (
    <button key={key} onClick={onClick} style={style} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
