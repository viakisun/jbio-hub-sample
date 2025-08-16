import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Summary = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const Badge = styled.span<{ type: 'online' | 'offline' | 'hybrid' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
  background-color: ${props => props.type === 'online' ? '#dbeafe' : '#fee2e2'};
  color: ${props => props.type === 'online' ? '#1e40af' : '#991b1b'};
`;

// --- COMPONENT ---

export interface EventCardData {
  id: string;
  title: string;
  summary?: string;
  thumbnailUrl?: string;
  eventStartAt: string;
  eventEndAt: string;
  locationType: 'online' | 'offline' | 'hybrid';
  locationName?: string;
  host: string;
  registerDeadline?: string;
}

interface EventCardProps {
  event: EventCardData;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString();

  const dDay = event.registerDeadline ? Math.ceil((new Date(event.registerDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <CardLink to={`/events/${event.id}`}>
      <CardWrapper>
        {event.thumbnailUrl && <Thumbnail src={event.thumbnailUrl} alt={event.title} />}
        <ContentWrapper>
          <Title>{event.title}</Title>
          <InfoRow>
            <span>🗓️</span>
            <span>{formatDate(event.eventStartAt)} ~ {formatDate(event.eventEndAt)}</span>
          </InfoRow>
          <InfoRow>
            <span>📍</span>
            <span>{event.locationType === 'online' ? '온라인' : event.locationName}</span>
          </InfoRow>
          {event.summary && <Summary>{event.summary}</Summary>}
          <Footer>
            <span>{event.host}</span>
            {dDay !== null && dDay >= 0 && <Badge type={event.locationType}>D-{dDay}</Badge>}
            {dDay !== null && dDay < 0 && <Badge type='offline'>마감</Badge>}
          </Footer>
        </ContentWrapper>
      </CardWrapper>
    </CardLink>
  );
};

export default EventCard;
