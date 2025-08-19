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

// ===== Types for Company & Article Features =====

export interface CompanyContact {
  name: string;
  email: string;
  phone: string;
}

export type SizeCategory = "Startup" | "SME" | "Large";

export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  industry: string;
  region: string;
  foundedYear: number;
  sizeCategory: SizeCategory;
  employees: number;
  description: string;
  products: string[];
  achievements: string[];
  patents: string[];
  contact: CompanyContact;
  websiteUrl?: string;
  relatedArticles: string[];
}

export interface Article {
  id: string;
  title: string;
  author: string;
  publishDate: string; // ISO 8601 date string
  tags: string[];
  contentHTML: string;
  images: string[];
  relatedCompanies: string[];
}

export interface CompanyStats {
  totalCount: number;
  regionDistribution: Record<string, number>;
  sizeDistribution: {
    startup: number;
    sme: number;
    large: number;
  };
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
