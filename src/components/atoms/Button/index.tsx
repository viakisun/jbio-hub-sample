import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  key?: React.Key;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, className, key }) => {
  return (
    <button key={key} onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
