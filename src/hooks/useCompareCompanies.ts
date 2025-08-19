import { useState, useEffect } from 'react';
import { Company } from '../types/api';

const useCompareCompanies = (ids: string[]) => {
  const [data, setData] = useState<Company[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const idsJson = JSON.stringify(ids);

  useEffect(() => {
    // Convert back to array for the check
    const idArray = JSON.parse(idsJson);
    if (!idArray || idArray.length === 0) {
      setLoading(false);
      setData([]);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        params.append('ids', idArray.join(','));

        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
        const response = await fetch(`${apiUrl}${apiPrefix}/companies/compare?${params.toString()}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Company[] = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idsJson]);

  return { data, loading, error };
};

export default useCompareCompanies;
