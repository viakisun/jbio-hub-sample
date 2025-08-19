import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// The default styles for the skeleton item
const StyledSkeleton = styled.div`
  height: 1rem; /* default height */
  background: #f3f4f6;
  background-image: linear-gradient(to right, #f3f4f6 0%, #e5e7eb 20%, #f3f4f6 40%, #f3f4f6 100%);
  background-repeat: no-repeat;
  background-size: 2000px 104px;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
`;

interface LoadingSkeletonProps {
    count?: number;
    className?: string; // Allows passing Tailwind classes like h-4, w-full, etc.
}

/**
 * A flexible loading skeleton component.
 * It can be used to render multiple skeleton bars, and its appearance
 * can be customized by passing Tailwind CSS classes via the `className` prop.
 */
export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ count = 1, className }) => {
  if (count > 1) {
    return (
      <div className="w-full space-y-2">
        {[...Array(count)].map((_, i) => (
          <StyledSkeleton key={i} className={className || 'h-4'} />
        ))}
      </div>
    );
  }

  return <StyledSkeleton className={className} />;
};
