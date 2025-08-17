export interface News {
  id: number;
  title: string;
  summary?: string;
  content: string;
  category: 'news' | 'notice';
  created_at: string; // ISO 8601 date string
  sourceName?: string;
  thumbnailUrl?: string;
}

export interface Event {
  id: number;
  title: string;
  summary?: string;
  thumbnailUrl?: string;
  category: 'event';
  eventStartAt: string; // ISO 8601 date string
  eventEndAt: string; // ISO 8601 date string
  locationType: 'online' | 'offline' | 'hybrid';
  locationName?: string;
  host: string;
  registerDeadline?: string; // ISO 8601 date string
  status: '예정' | '진행중' | '마감';
}

export type ContentItem = News | Event;
