import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyCard from './index';
import { Company } from '../../../types/api';

const mockCompany: Company = {
  id: 1,
  name: 'Test Company',
  description: 'This is a test company.',
  logoUrl: 'https://via.placeholder.com/150',
  industry: 'Test Industry',
  website: 'https://example.com',
  foundedYear: 2022,
  employees: 100,
  sizeCategory: 'SME',
  products: ['Product 1', 'Product 2', 'Product 3'],
};

describe('CompanyCard', () => {
  it('renders the company card with the correct data', () => {
    render(
      <MemoryRouter>
        <CompanyCard company={mockCompany} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('This is a test company.')).toBeInTheDocument();
    expect(screen.getByText('Test Industry · 2022')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('renders the correct number of products', () => {
    render(
      <MemoryRouter>
        <CompanyCard company={mockCompany} />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Product/)).toHaveLength(2);
  });
});
