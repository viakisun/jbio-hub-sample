import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';

const PageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ClusterOrgsPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <h1>JB 지원기관 현황 (Organizations)</h1>
        <p>Card/Table view will be implemented here.</p>
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterOrgsPage;
