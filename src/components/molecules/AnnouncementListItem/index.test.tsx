import React from 'react';
import { render, screen } from '@testing-library/react';
import AnnouncementListItem from './index';
import { SupportProgram } from '../../../hooks/useSupportPrograms';

const mockProgram: SupportProgram = {
  id: '1',
  title: 'Test Program',
  organization: 'Test Org',
  description: 'This is a test program.',
  startDate: '2025-01-01',
  endDate: '2025-12-31',
  status: 'ongoing',
  category: 'Test Category',
  supportType: ['financial'],
  targetCompany: 'Test Company',
  externalUrl: null,
  createdAt: '2025-01-01T00:00:00Z',
};

describe('AnnouncementListItem', () => {
  it('renders the announcement list item with the correct data', () => {
    render(<AnnouncementListItem program={mockProgram} />);

    expect(screen.getByText('Test Program')).toBeInTheDocument();
    expect(screen.getByText('Test Org')).toBeInTheDocument();
    expect(screen.getByText('대상: Test Company')).toBeInTheDocument();
  });
});
