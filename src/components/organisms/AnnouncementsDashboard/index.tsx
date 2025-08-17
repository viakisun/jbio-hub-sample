import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

// --- STYLED COMPONENTS ---

const DashboardWrapper = styled.div`
  background-color: #f9fafb;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  border: 1px solid #e5e7eb;
`;

const DashboardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e5e7eb;
`;

const StatValue = styled.p`
  font-size: 2.25rem;
  font-weight: 800;
  color: #4f46e5;
  margin: 0 0 0.5rem 0;
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

// --- COMPONENT ---

const AnnouncementsDashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardTitle>지원사업 현황</DashboardTitle>
      <StatsGrid>
        <StatCard>
          <StatValue>12</StatValue>
          <StatLabel>전체 공고</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>3</StatValue>
          <StatLabel>마감임박</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>8</StatValue>
          <StatLabel>신규 공고 (최근 7일)</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>4</StatValue>
          <StatLabel>정부/지자체</StatLabel>
        </StatCard>
      </StatsGrid>
    </DashboardWrapper>
  );
};

export default AnnouncementsDashboard;
