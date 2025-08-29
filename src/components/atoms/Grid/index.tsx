import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, cols, gap, className }) => {
  const baseClass = 'grid';
  const colsClass = cols ? `grid--cols-${cols}` : '';
  const gapClass = gap ? `grid--gap-${gap}` : '';
  const combinedClassName = [baseClass, colsClass, gapClass, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Grid;
