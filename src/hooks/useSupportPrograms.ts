import { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS ---
// These match the SupportProgram Pydantic model.

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export type SupportProgramStatus = 'upcoming' | 'ongoing' | 'closed';

export interface SupportProgram {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string; // ISO Date string
  endDate: string; // ISO Date string
  status: SupportProgramStatus;
  category: string;
  supportType: string[];
  targetCompany: string;
  externalUrl: string | null;
  createdAt: string; // ISO DateTime string
}

interface SupportProgramsResponse {
  data: SupportProgram[];
  pagination: Pagination;
}

interface UseSupportProgramsParams {
  page?: number;
  limit?: number;
  status?: SupportProgramStatus;
  organization?: string;
  keyword?: string;
  category?: string; // Adding category to params based on page component
}

const useSupportPrograms = (params: UseSupportProgramsParams = {}) => {
  const [data, setData] = useState<SupportProgramsResponse | null>(null);
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
        if (params.status) queryParams.append('status', params.status);
        if (params.organization) queryParams.append('organization', params.organization);
        if (params.keyword) queryParams.append('keyword', params.keyword);
        if (params.category) queryParams.append('category', params.category);

        const queryString = queryParams.toString();
        // UPDATED URL
        const response = await fetch(`/api/support-programs?${queryString}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: SupportProgramsResponse = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // Using JSON.stringify to prevent re-renders on object reference changes
  }, [JSON.stringify(params)]);

  return { data, loading, error };
};

export default useSupportPrograms;
