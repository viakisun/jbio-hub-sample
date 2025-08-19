import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompaniesPage from './index';
import { SWRConfig } from 'swr';

// Mock SWR to prevent actual network requests
const swrConfig = {
  provider: () => new Map(),
  shouldRetryOnError: false,
};

test('renders CompaniesPage component and displays heading', () => {
  render(
    <SWRConfig value={swrConfig}>
      <MemoryRouter>
        <CompaniesPage />
      </MemoryRouter>
    </SWRConfig>
  );

  // The page has a main heading "기업 관리", let's check for "기업"
  const headingElement = screen.getByRole('heading', { name: /기업/i });
  expect(headingElement).toBeInTheDocument();
});
