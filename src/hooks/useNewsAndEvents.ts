import useSWR from 'swr';
import { ContentItem, News, Event } from '../types/api';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface UseNewsAndEventsOptions {
  limit?: number;
}

export function useNewsAndEvents({ limit }: UseNewsAndEventsOptions = {}) {
  const newsUrl = limit ? `/api/news?limit=${limit}` : '/api/news';
  const eventsUrl = limit ? `/api/events?limit=${limit}` : '/api/events';

  const { data: newsData, error: newsError } = useSWR<News[]>(newsUrl, fetcher);
  const { data: eventsData, error: eventsError } = useSWR<Event[]>(eventsUrl, fetcher);

  const data = newsData && eventsData ? [...newsData, ...eventsData] : undefined;
  const error = newsError || eventsError;

  // Sort data by date (newest first)
  if (data) {
    data.sort((a, b) => {
      const dateA = new Date('created_at' in a ? a.created_at : a.eventStartAt);
      const dateB = new Date('created_at' in b ? b.created_at : b.eventStartAt);
      return dateB.getTime() - dateA.getTime();
    });
  }

  return {
    data: data as ContentItem[] | undefined,
    isLoading: !error && !data,
    isError: error,
  };
}
