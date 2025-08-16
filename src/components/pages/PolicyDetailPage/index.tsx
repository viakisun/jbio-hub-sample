import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';

const PolicyDetailPage = () => {
  const { policyId } = useParams<{ policyId: string }>();

  return (
    <MainLayout>
      <div>
        <h1>정책 상세 페이지</h1>
        <p>정책 ID: {policyId}</p>
        {/* TODO: 정책 상세 정보 구현 */}
      </div>
    </MainLayout>
  );
};

export default PolicyDetailPage;
