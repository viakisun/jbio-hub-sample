import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './index';

describe('Grid', () => {
  it('renders the grid with the correct children', () => {
    render(<Grid><div>Child 1</div><div>Child 2</div></Grid>);
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies the correct class based on columns', () => {
    const { container } = render(<Grid cols={3}><div>Child</div></Grid>);
    expect(container.firstChild).toHaveClass('grid--cols-3');
  });

  it('applies the correct class based on gap', () => {
    const { container } = render(<Grid gap={4}><div>Child</div></Grid>);
    expect(container.firstChild).toHaveClass('grid--gap-4');
  });
});
