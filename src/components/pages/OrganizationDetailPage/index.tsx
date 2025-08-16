import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';

const OrganizationDetailPage = () => {
  const { orgId } = useParams<{ orgId: string }>();

  return (
    <MainLayout>
      <div>
        <h1>기관 상세 페이지</h1>
        <p>기관 ID: {orgId}</p>
        {/* TODO: 기관 상세 정보 구현 */}
      </div>
    </MainLayout>
  );
};

export default OrganizationDetailPage;
