import React from 'react';
import MainLayout from '../../templates/MainLayout';
import { useParams } from 'react-router-dom';

const TechDetailPage = () => {
  const { type, id } = useParams();
  return (
    <MainLayout>
      <h1>Technology Detail Page</h1>
      <p>Details for type: <strong>{type}</strong>, ID: <strong>{id}</strong></p>
    </MainLayout>
  );
};

export default TechDetailPage;
