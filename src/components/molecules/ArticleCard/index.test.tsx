import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleCard from './index';
import { Article } from '../../../types/api';

const mockArticle: Article = {
  id: 1,
  title: 'Test Article',
  summary: 'This is a test article.',
  thumbnailUrl: 'https://via.placeholder.com/150',
  category: 'Test Category',
  tags: ['tag1', 'tag2', 'tag3'],
};

describe('ArticleCard', () => {
  it('renders the article card with the correct data', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is a test article.')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('renders the correct number of tags', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/tag/)).toHaveLength(3);
  });
});
