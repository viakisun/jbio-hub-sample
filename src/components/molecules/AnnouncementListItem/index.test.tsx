import React from 'react';
import { render, screen } from '@testing-library/react';
import AnnouncementListItem from './index';
import { SupportProgram } from '../../../hooks/useSupportPrograms';

const mockProgram: SupportProgram = {
  id: 1,
  title: 'Test Program',
  organization: 'Test Org',
  targetCompany: 'Test Company',
  endDate: '2025-12-31',
  status: 'ongoing',
};

describe('AnnouncementListItem', () => {
  it('renders the announcement list item with the correct data', () => {
    render(<AnnouncementListItem program={mockProgram} />);

    expect(screen.getByText('Test Program')).toBeInTheDocument();
    expect(screen.getByText('Test Org')).toBeInTheDocument();
    expect(screen.getByText('대상: Test Company')).toBeInTheDocument();
  });
});
