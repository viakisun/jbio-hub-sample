import { useState, useEffect } from 'react';
import { Company, PaginatedResponse, SizeCategory } from '../types/api';

// --- TYPE DEFINITIONS ---

interface CompaniesFilters {
  page?: number;
  limit?: number;
  region?: string;
  industry?: string;
  sizeCategory?: SizeCategory;
  hasInvestment?: boolean;
  sort?: 'latest' | 'name' | 'investmentSize';
  keyword?: string;
}

// --- HOOK ---

const useCompanies = (filters: CompaniesFilters) => {
  const [data, setData] = useState<PaginatedResponse<Company> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // A more stable dependency for useEffect
  const filtersJson = JSON.stringify(filters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            params.append(key, String(value));
          }
        });

        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
        const response = await fetch(`${apiUrl}${apiPrefix}/companies?${params.toString()}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: PaginatedResponse<Company> = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filtersJson]); // Re-fetch only when filters actually change

  return { data, loading, error };
};

export default useCompanies;
