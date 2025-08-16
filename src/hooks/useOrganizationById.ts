import { useState, useEffect } from 'react';
import { Organization } from './useOrganizations';

const useOrganizationById = (id: string | null) => {
  const [data, setData] = useState<Organization | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/cluster/organizations/${id}`);
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
  }, [id]);

  return { data, loading, error };
};

export default useOrganizationById;
