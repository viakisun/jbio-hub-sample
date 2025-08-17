import { useState, useEffect } from 'react';

// 데이터 타입 정의 (API 응답에 맞춰서)
interface Kpi {
  title: string;
  value: string;
  change: string;
}

interface LatestUpdate {
  id: string;
  name: string;
  date: string;
  status: 'NEW' | 'UPDATED';
}

interface DashboardData {
  kpis: Kpi[];
  latestOrgs: LatestUpdate[];
  latestPolicies: LatestUpdate[];
}

const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.REACT_APP_API_URL || '';
        const apiPrefix = process.env.REACT_APP_API_PREFIX || '';
        const response = await fetch(`${apiUrl}${apiPrefix}/cluster/dashboard`);
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
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return { data, loading, error };
};

export default useDashboardData;
