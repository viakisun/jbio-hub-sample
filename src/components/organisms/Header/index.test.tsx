import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  it('renders the header with the logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('JB SQUARE')).toBeInTheDocument();
    expect(screen.getByText("Jeonbuk's Business QUARTER")).toBeInTheDocument();
    expect(screen.getByText('JB BIO 클러스터')).toBeInTheDocument();
    expect(screen.getByText('JB 지원사업공고')).toBeInTheDocument();
    expect(screen.getByText('JB 창업보육센터')).toBeInTheDocument();
    expect(screen.getByText('바이오 뉴스/행사')).toBeInTheDocument();
    expect(screen.getByText('JB 기업정보')).toBeInTheDocument();
    expect(screen.getByText('JB 기술/특허')).toBeInTheDocument();
  });
});
