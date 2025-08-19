import { useState, useEffect } from 'react';
import { Company } from '../types/api';

const useCompany = (id: string | null) => {
  const [data, setData] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setData(null);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
        const response = await fetch(`${apiUrl}${apiPrefix}/companies/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Company = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useCompany;
