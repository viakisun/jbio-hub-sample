import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="secondary">Click me</Button>);
    expect(container.firstChild).toHaveClass('btn--secondary');
  });

  it('applies the fullWidth class when fullWidth is true', () => {
    const { container } = render(<Button fullWidth>Click me</Button>);
    expect(container.firstChild).toHaveClass('btn--full-width');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
