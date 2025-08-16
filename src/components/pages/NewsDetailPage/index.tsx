import React from 'react';
import MainLayout from '../../templates/MainLayout';
import { useParams } from 'react-router-dom';

const NewsDetailPage = () => {
  const { newsId } = useParams();
  return (
    <MainLayout>
      <h1>News Detail Page</h1>
      <p>Details for news item: {newsId}</p>
    </MainLayout>
  );
};

export default NewsDetailPage;
