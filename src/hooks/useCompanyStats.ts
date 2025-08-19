import { useState, useEffect } from 'react';
import { CompanyStats } from '../types/api';

const useCompanyStats = () => {
  const [data, setData] = useState<CompanyStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
        const response = await fetch(`${apiUrl}${apiPrefix}/companies/stats`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: CompanyStats = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch only once on component mount

  return { data, loading, error };
};

export default useCompanyStats;
