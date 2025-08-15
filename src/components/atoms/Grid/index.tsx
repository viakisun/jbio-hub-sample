import styled from 'styled-components';

interface GridProps {
  cols?: number;
  gap?: string;
  tabletCols?: number;
  mobileCols?: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 4}, 1fr);
  gap: ${props => props.gap || '2rem'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(${props => props.tabletCols || 2}, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.mobileCols || 1}, 1fr);
  }
`;

export default Grid;
