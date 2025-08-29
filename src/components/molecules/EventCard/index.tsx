import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../../../types/api';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const getStatus = () => {
    const today = new Date();
    const eventDate = new Date(event.date);
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    if (eventDate < today) return { text: '종료', className: 'event-card__status-badge--closed' };
    if (eventDate > today) return { text: '예정', className: 'event-card__status-badge--upcoming' };
    return { text: '진행중', className: 'event-card__status-badge--active' };
  };

  const status = getStatus();

  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-card__thumbnail-wrapper">
        <img src={event.thumbnailUrl} alt={event.title} className="event-card__thumbnail" loading="lazy" />
        <span className="event-card__category-badge">행사</span>
      </div>
      <div className="event-card__content">
        <h3 className="event-card__title">{event.title}</h3>
        <div className="event-card__footer">
          <span>{formattedDate}</span>
          <span>{event.location}</span>
          <span className={`event-card__status-badge ${status.className}`}>{status.text}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
