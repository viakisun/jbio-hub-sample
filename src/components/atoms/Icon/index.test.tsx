import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index';

describe('Icon', () => {
  it('renders the icon with the correct name', () => {
    const { container } = render(<Icon name="test" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies the correct size', () => {
    const { container } = render(<Icon name="test" size={24} />);
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('applies the correct className', () => {
    const { container } = render(<Icon name="test" className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });
});
