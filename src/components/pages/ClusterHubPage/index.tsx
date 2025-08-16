import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';

const PageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ClusterHubPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <h1>JB BIO클러스터 (Hub)</h1>
        <p>Map/List view will be implemented here.</p>
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterHubPage;
