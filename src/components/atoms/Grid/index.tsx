import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: string;
  tabletCols?: number;
  mobileCols?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols,
  gap,
  tabletCols,
  mobileCols,
  className,
  style,
}) => {
  const cssVariables = {
    '--grid-cols': cols,
    '--grid-gap': gap,
    '--grid-tablet-cols': tabletCols,
    '--grid-mobile-cols': mobileCols,
  } as React.CSSProperties;

  const combinedClassName = ['grid', className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName} style={{ ...cssVariables, ...style }}>
      {children}
    </div>
  );
};

export default Grid;
