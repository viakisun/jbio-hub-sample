import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyCard from './index';
import { Company } from '../../../types/api';

const mockCompany: Company = {
  id: '1',
  name: 'Test Company',
  logoUrl: 'https://via.placeholder.com/150',
  industry: 'Test Industry',
  region: 'Test Region',
  foundedYear: 2022,
  sizeCategory: 'SME',
  employees: 100,
  description: 'This is a test company.',
  products: ['Product 1', 'Product 2'],
  achievements: [],
  patents: [],
  contact: { name: 'Test Contact', email: 'test@example.com', phone: '123-456-7890' },
  websiteUrl: 'https://example.com',
  relatedArticles: [],
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
