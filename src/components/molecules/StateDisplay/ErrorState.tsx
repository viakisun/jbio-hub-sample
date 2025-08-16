import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const ErrorStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fef2f2; /* red-50 */
  border-radius: 16px;
  color: #991b1b; /* red-800 */
  border: 1px solid #fecaca; /* red-200 */
`;

const ErrorStateIcon = styled.div`
  margin-bottom: 1.5rem;
`;

const ErrorStateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b91c1c; /* red-700 */
  margin-bottom: 0.5rem;
`;

const ErrorStateMessage = styled.p`
  font-size: 1rem;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

const RetryButton = styled(Button)`
  background-color: #ef4444; /* red-500 */
  color: white;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #dc2626; /* red-600 */
  }
`;

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "오류가 발생했습니다",
  message = "데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.",
  onRetry
}) => {
  return (
    <ErrorStateWrapper>
      <ErrorStateIcon>
        <Icon name="alertTriangle" size={48} color="#ef4444" />
      </ErrorStateIcon>
      <ErrorStateTitle>{title}</ErrorStateTitle>
      <ErrorStateMessage>{message}</ErrorStateMessage>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          재시도
        </RetryButton>
      )}
    </ErrorStateWrapper>
  );
};

export default ErrorState;
