import React from 'react';
import { Link } from 'react-router-dom';
import useCompanyStats from '../../../hooks/useCompanyStats';
import KPIGroup from '../../organisms/KPIGroup';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import MainLayout from '../../templates/MainLayout';

const CompanyDashboardPage: React.FC = () => {
  const { data, loading, error } = useCompanyStats();

  const kpis = data
    ? [
        { label: '총 등록 기업 수', value: data.totalCount },
        { label: '스타트업', value: data.sizeDistribution.startup },
        { label: '중견기업', value: data.sizeDistribution.sme },
        { label: '대기업', value: data.sizeDistribution.large },
      ]
    : [];

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">기업 정보 대시보드</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">핵심 지표</h2>
        {loading && <LoadingSkeleton count={4} />}
        {error && <ErrorState message={error.message} />}
        {data && <KPIGroup kpis={kpis} />}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">지역 기업정보</h2>
          <div className="p-8 border rounded-lg bg-gray-50 text-center hover:shadow-lg transition-shadow">
            <p className="mb-4 text-gray-600">지역별, 산업분야별 기업 정보를 찾아보세요.</p>
            <Link to="/companies" className="font-bold text-indigo-600 hover:underline">
              기업 목록 보러가기 &rarr;
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">인터뷰 & 기획기사</h2>
          <div className="p-8 border rounded-lg bg-gray-50 text-center hover:shadow-lg transition-shadow">
            <p className="mb-4 text-gray-600">전북 바이오 기업들의 생생한 이야기를 만나보세요.</p>
            <Link to="/articles" className="font-bold text-indigo-600 hover:underline">
              기사 목록 보러가기 &rarr;
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CompanyDashboardPage;
