import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  tabletCols?: number;
  mobileCols?: number;
  gap?: number | string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, cols, tabletCols, mobileCols, gap, className }) => {
  const baseClass = 'grid';
  const colsClass = cols ? `grid--cols-${cols}` : '';
  const tabletColsClass = tabletCols ? `grid--tablet-cols-${tabletCols}` : '';
  const mobileColsClass = mobileCols ? `grid--mobile-cols-${mobileCols}` : '';
  const gapStyle = typeof gap === 'string' ? { gap } : {};
  const gapClass = typeof gap === 'number' ? `grid--gap-${gap}` : '';
  const combinedClassName = [baseClass, colsClass, tabletColsClass, mobileColsClass, gapClass, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName} style={gapStyle}>
      {children}
    </div>
  );
};

export default Grid;
