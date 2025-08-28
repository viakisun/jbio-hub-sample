import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../../atoms/Grid';
import KPIGroup from '../KPIGroup';
import IncubationCenterCard from '../../molecules/IncubationCenterCard';
import NoticeCard, { NoticeCardData } from '../../molecules/NoticeCard';
import useIncubationCenters from '../../../hooks/useIncubationCenters';
import { LoadingMessage, ErrorMessage } from './shared/StateMessages';

const kpiData = [
  { label: '총 입주기관', value: 88 },
  { label: '입주율', value: '92%' },
  { label: '총 공실', value: 7 },
  { label: '모집중 공고', value: 2 },
];

const mockNotices: NoticeCardData[] = [
    { id: 'notice-1', title: '2024년 하반기 신규 입주기업 모집 공고', targetCriteria: '창업 7년 미만 바이오 기업', periodEnd: '2024-09-30', applyUrl: '#' },
    { id: 'notice-2', title: '1인 창조기업 지원실 입주기업 모집', targetCriteria: '1인 창조기업 및 예비창업자', periodEnd: '2024-10-15', applyUrl: '#' },
];

const mockVacancyPreview = [
    { centerId: 'center-1', centerName: '전북바이오융합원 본원', vacancyUnits: 3, types: ['랩', '사무실'] },
    { centerId: 'center-2', centerName: '익산 BI 센터', vacancyUnits: 1, types: ['사무실'] },
    { centerId: 'center-3', centerName: '정읍 BI 센터', vacancyUnits: 1, types: ['랩'] },
];

const DashboardView = () => {
  const { data: centers, loading, error } = useIncubationCenters({ limit: 6 });

  return (
    <div className="incubation-tab-view dashboard-view">
      <Grid cols={1} gap="3rem">
        <KPIGroup kpis={kpiData} />

        <Grid cols={2} tabletCols={1} mobileCols={1} gap="2rem">
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">공실 현황</h2>
              <Link to="/incubation?tab=vacancy" className="view-all-link">전체 보기</Link>
            </div>
            <div className="list">
              {mockVacancyPreview.map(item => (
                  <Link key={item.centerId} to={`/incubation?tab=vacancy&centerId=${item.centerId}`} className="vacancy-card-link">
                      <div className="vacancy-header">
                          <span>{item.centerName}</span>
                          <strong>{item.vacancyUnits}개</strong>
                      </div>
                      <div className="vacancy-types">{item.types.join(', ')}</div>
                  </Link>
              ))}
            </div>
          </section>
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">모집중 공고</h2>
              <Link to="/incubation?tab=apply" className="view-all-link">전체 보기</Link>
            </div>
            <div className="list">
              {mockNotices.map(notice => <NoticeCard key={notice.id} notice={notice} />)}
            </div>
          </section>
        </Grid>

        <section className="section full-width-section">
          <div className="section-header">
              <h2 className="section-title">주요 창업보육센터</h2>
              <Link to="/incubation?tab=tenants" className="view-all-link">전체 보기</Link>
          </div>
          {loading && <LoadingMessage>센터 정보를 불러오는 중...</LoadingMessage>}
          {error && <ErrorMessage>오류: {error.message}</ErrorMessage>}
          {centers && (
            <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
                {centers.map(center => <IncubationCenterCard key={center.id} center={center} />)}
            </Grid>
          )}
        </section>
      </Grid>
    </div>
  );
};

export default DashboardView;
