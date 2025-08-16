import React from 'react';
import MainLayout from '../../templates/MainLayout';
import { useParams } from 'react-router-dom';

const TenantDetailPage = () => {
  const { orgId } = useParams();
  return (
    <MainLayout>
      <h1>Tenant Detail Page</h1>
      <p>Details for Tenant ID: {orgId}</p>
    </MainLayout>
  );
};

export default TenantDetailPage;
