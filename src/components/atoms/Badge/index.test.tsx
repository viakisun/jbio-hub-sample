import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './index';

describe('Badge', () => {
  it('renders the badge with the correct text', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Badge variant="secondary">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass('badge--secondary');
  });
});
