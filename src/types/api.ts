// Types for legacy components that were using the old API structure
export interface ApiAnnouncement {
  id: number;
  title: string;
  author: string;
  [key: string]: any;
}

export interface ApiNews {
  id: number;
  title: string;
  category: string;
  created_at: string;
  [key: string]: any;
}

export interface ApiStat {
  label: string;
  value: string;
  change: string;
  icon: string;
  [key: string]: any;
}

// --- New, strongly-typed models for the News & Events page ---

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
