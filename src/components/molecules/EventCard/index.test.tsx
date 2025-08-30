import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventCard from './index';
import { Event } from '../../../types/api';

const mockEvent: Event = {
  id: 1,
  title: 'Test Event',
  summary: 'This is a test event.',
  thumbnailUrl: 'https://via.placeholder.com/150',
  category: 'event',
  eventStartAt: '2025-12-31T09:00:00Z',
  eventEndAt: '2025-12-31T18:00:00Z',
  locationType: 'offline',
  locationName: 'Test Location',
  host: 'Test Host',
  status: '예정',
};

describe('EventCard', () => {
  it('renders the event card with the correct data', () => {
    render(
      <MemoryRouter>
        <EventCard event={mockEvent} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('2025년 12월 31일')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(screen.getByText('예정')).toBeInTheDocument();
  });
});
