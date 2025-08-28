import React from 'react';
import Icon from '../../atoms/Icon';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "결과가 없습니다",
  message = "다른 검색어로 다시 시도해보세요."
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <Icon name="search" size={48} />
      </div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__message">{message}</p>
    </div>
  );
};

export default EmptyState;
