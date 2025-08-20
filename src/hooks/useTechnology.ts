import { useState, useEffect } from 'react';
import { Technology } from './useTechnologies'; // Reuse Technology type

const useTechnology = (id: string | undefined) => {
  const [data, setData] = useState<Technology | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/tech-summary/detail/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Technology = await response.json();
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

export default useTechnology;
