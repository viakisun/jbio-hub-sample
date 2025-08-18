import { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS ---
// Matches the IncubationCenter Pydantic model from the backend.

export interface Location {
    latitude: number;
    longitude: number;
}

export interface IncubationCenter {
    id: string;
    name: string;
    totalRooms: number;
    vacantRooms: number;
    occupancyRate: number;
    address: string;
    contact: string | null;
    manager: string | null;
    location: Location;
}

interface UseIncubationCentersParams {
    hasVacancy?: boolean;
    region?: string;
    keyword?: string;
}

const useIncubationCenters = (params: UseIncubationCentersParams = {}) => {
  const [data, setData] = useState<IncubationCenter[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const queryParams = new URLSearchParams();
        if (params.hasVacancy !== undefined) queryParams.append('hasVacancy', String(params.hasVacancy));
        if (params.region) queryParams.append('region', params.region);
        if (params.keyword) queryParams.append('keyword', params.keyword);

        const queryString = queryParams.toString();
        const response = await fetch(`/api/incubation-centers?${queryString}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: IncubationCenter[] = await response.json();
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

export default useIncubationCenters;
