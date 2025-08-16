import React from 'react';
import MainLayout from '../../templates/MainLayout';
import { useParams } from 'react-router-dom';

const EventsDetailPage = () => {
  const { eventId } = useParams();
  return (
    <MainLayout>
      <h1>Event Detail Page</h1>
      <p>Details for event item: {eventId}</p>
    </MainLayout>
  );
};

export default EventsDetailPage;
