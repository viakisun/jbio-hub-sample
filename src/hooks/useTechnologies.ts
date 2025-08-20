import { useState, useEffect } from 'react';
import { Pagination } from './useSupportPrograms'; // Reuse Pagination

// --- TYPE DEFINITIONS ---
// Matches the Technology Pydantic model from the backend.

export interface Technology {
    id: string;
    title: string;
    summary: string;
    organization: string;
    patentNumber: string | null;
    applicationDate: string | null; // ISO Date string
    category: string;
    subCategory: string;
    transferable: boolean;
    thumbnail: string | null;
    createdAt: string; // ISO DateTime string
}

interface TechnologiesResponse {
  data: Technology[];
  pagination: Pagination;
}

interface UseTechnologiesParams {
  page?: number;
  limit?: number;
  keyword?: string;
  organization?: string;
  category?: string;
  transferable?: boolean;
  date_range?: string;
}

const useTechnologies = (params: UseTechnologiesParams = {}) => {
  const [data, setData] = useState<TechnologiesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', String(params.page));
        if (params.limit) queryParams.append('limit', String(params.limit));
        if (params.keyword) queryParams.append('keyword', params.keyword);
        if (params.organization) queryParams.append('organization', params.organization);
        if (params.category) queryParams.append('category', params.category);
        if (params.transferable !== undefined) queryParams.append('transferable', String(params.transferable));
        if (params.date_range) queryParams.append('date_range', params.date_range);

        const queryString = queryParams.toString();
        const response = await fetch(`/api/tech-summary/list?${queryString}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: TechnologiesResponse = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [JSON.stringify(params)]);

  return { data, loading, error };
};

export default useTechnologies;
