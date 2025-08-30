import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleCard from './index';
import { Article } from '../../../types/api';

const mockArticle: Article = {
  id: '1',
  title: 'Test Article',
  author: 'Test Author',
  publishDate: '2025-01-01T00:00:00Z',
  tags: ['tag1', 'tag2', 'tag3'],
  contentHTML: '<p>This is a test article.</p>',
  images: ['https://via.placeholder.com/150'],
  relatedCompanies: [],
};

describe('ArticleCard', () => {
  it('renders the article card with the correct data', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('2025년 1월 1일')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(screen.getAllByText(/tag/)).toHaveLength(3);
  });
});
