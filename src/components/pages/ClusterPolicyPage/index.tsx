import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../templates/MainLayout';

const PageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ClusterPolicyPage = () => {
  return (
    <MainLayout>
      <PageWrapper>
        <h1>JB 바이오지원정책 (Policy)</h1>
        <p>Eligibility Quiz and policy list will be implemented here.</p>
      </PageWrapper>
    </MainLayout>
  );
};

export default ClusterPolicyPage;
