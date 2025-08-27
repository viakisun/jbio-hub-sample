import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../../../types/api';

const STATUS_STYLES: { [key: string]: { className: string } } = {
  '예정': { className: 'event-card__status-badge--planned' },
  '진행중': { className: 'event-card__status-badge--in-progress' },
  '마감': { className: 'event-card__status-badge--closed' },
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const statusStyle = STATUS_STYLES[event.status] || STATUS_STYLES['마감'];

  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-card__thumbnail-wrapper">
        {event.thumbnailUrl && <img src={event.thumbnailUrl} alt={event.title} loading="lazy" className="event-card__thumbnail" />}
        <span className="event-card__category-badge">
          행사
        </span>
      </div>
      <div className="event-card__content">
        <h3 className="event-card__title">{event.title}</h3>
        {event.summary && <p className="event-card__summary">{event.summary}</p>}
        <div className="event-card__footer">
          <span>{event.host}</span>
          <span className={`event-card__status-badge ${statusStyle.className}`}>{event.status}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
