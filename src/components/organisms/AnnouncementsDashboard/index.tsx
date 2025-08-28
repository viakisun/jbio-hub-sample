import React from 'react';

const AnnouncementsDashboard = () => {
  return (
    <div className="announcements-dashboard">
      <h2 className="announcements-dashboard__title">지원사업 현황</h2>
      <div className="announcements-dashboard__stats-grid">
        <div className="announcements-dashboard__stat-card">
          <p className="announcements-dashboard__stat-value">12</p>
          <p className="announcements-dashboard__stat-label">전체 공고</p>
        </div>
        <div className="announcements-dashboard__stat-card">
          <p className="announcements-dashboard__stat-value">3</p>
          <p className="announcements-dashboard__stat-label">마감임박</p>
        </div>
        <div className="announcements-dashboard__stat-card">
          <p className="announcements-dashboard__stat-value">8</p>
          <p className="announcements-dashboard__stat-label">신규 공고 (최근 7일)</p>
        </div>
        <div className="announcements-dashboard__stat-card">
          <p className="announcements-dashboard__stat-value">4</p>
          <p className="announcements-dashboard__stat-label">정부/지자체</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsDashboard;
