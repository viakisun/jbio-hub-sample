import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../../../types/api';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.eventStartAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const statusMap = {
    '예정': 'upcoming',
    '진행중': 'active',
    '마감': 'closed',
  };
  const statusClass = statusMap[event.status] || 'closed';

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
          <span>{event.locationName}</span>
          <span className={`event-card__status-badge event-card__status-badge--${statusClass}`}>{event.status}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
