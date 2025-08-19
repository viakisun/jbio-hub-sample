import { useState, useEffect } from 'react';
import { Article, PaginatedResponse } from '../types/api';

// --- TYPE DEFINITIONS ---

interface ArticlesFilters {
  page?: number;
  limit?: number;
  tag?: string;
  publishDate?: string; // YYYY-MM
  sort?: 'latest' | 'popularity';
}

// --- HOOK ---

const useArticles = (filters: ArticlesFilters) => {
  const [data, setData] = useState<PaginatedResponse<Article> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const filtersJson = JSON.stringify(filters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        Object.entries(JSON.parse(filtersJson)).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            params.append(key, String(value));
          }
        });

        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
        const response = await fetch(`${apiUrl}${apiPrefix}/articles?${params.toString()}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: PaginatedResponse<Article> = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filtersJson]);

  return { data, loading, error };
};

export default useArticles;
