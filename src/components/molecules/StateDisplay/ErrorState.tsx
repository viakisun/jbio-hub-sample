import React from 'react';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

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
    <div className="error-state">
      <div className="error-state__icon">
        <Icon name="alertTriangle" size={48} />
      </div>
      <h3 className="error-state__title">{title}</h3>
      <p className="error-state__message">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="danger">
          재시도
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
