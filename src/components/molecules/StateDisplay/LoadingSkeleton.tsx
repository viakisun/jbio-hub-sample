import React from 'react';

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
          <div key={i} className={`skeleton ${className || 'h-4'}`} />
        ))}
      </div>
    );
  }

  return <div className={`skeleton ${className}`} />;
};
