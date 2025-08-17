import { useState, useEffect } from 'react';
import useClusterFiltersStore from '../stores/useClusterFiltersStore';

// --- TYPE DEFINITIONS ---

export interface Organization {
  id: string;
  name: string;
  type: string;
  region: string;
  fields: string[];
  services: string[];
  summary: string;
}

interface OrganizationsResponse {
  organizations: Organization[];
  totalCount: number;
}

// --- HOOK ---

const useOrganizations = () => {
  const [data, setData] = useState<OrganizationsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Get filters from global store
  const { region, field, orgType, keyword } = useClusterFiltersStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Build query string from filters
        const params = new URLSearchParams();
        if (region) params.append('region', region);
        if (field) params.append('field', field);
        if (orgType) params.append('type', orgType);
        if (keyword) params.append('query', keyword);

        const apiUrl = process.env.REACT_APP_API_URL || '';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '';
        const response = await fetch(`${apiUrl}${apiPrefix}/cluster/organizations?${params.toString()}`);
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다.');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [region, field, orgType, keyword]); // Re-fetch when any filter changes

  return { data, loading, error };
};

export default useOrganizations;
