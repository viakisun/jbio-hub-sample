import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';

interface StyledButtonProps {
  variant: ButtonVariant;
  fullWidth?: boolean;
}

const variants = {
  primary: css`
    background-color: #2563eb; /* blue-600 */
    color: white;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: #1d4ed8; /* blue-700 */
    }
  `,
  secondary: css`
    background-color: white;
    color: #4b5563; /* gray-600 */
    border: 1px solid #d1d5db; /* gray-300 */

    &:hover:not(:disabled) {
      background-color: #f9fafb; /* gray-50 */
    }
  `,
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ variant }) => variants[variant]}
`;

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
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      style={style}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
