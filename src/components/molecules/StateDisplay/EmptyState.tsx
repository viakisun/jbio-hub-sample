import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9fafb;
  border-radius: 16px;
  color: #6b7280;
`;

const EmptyStateIcon = styled.div`
  margin-bottom: 1.5rem;
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const EmptyStateMessage = styled.p`
  font-size: 1rem;
  max-width: 400px;
`;

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "결과가 없습니다",
  message = "다른 검색어로 다시 시도해보세요."
}) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateIcon>
        <Icon name="search" size={48} color="#9ca3af" />
      </EmptyStateIcon>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateMessage>{message}</EmptyStateMessage>
    </EmptyStateWrapper>
  );
};

export default EmptyState;
