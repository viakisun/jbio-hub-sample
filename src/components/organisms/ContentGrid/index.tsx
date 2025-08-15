import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';
import AnnouncementList from '../AnnouncementList';

// --- STYLED COMPONENTS ---

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const ViewAllButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #4f46e5;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;

const CardContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsCard = styled.div`
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }
`;

const NewsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const NewsCardCategory = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: #6366f1;
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const NewsCardDate = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const NewsCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
`;

const NewsCardSummary = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
`;


// --- DATA MODELS ---

interface AnnouncementFromAPI {
  id: number;
  title: string;
  author: string;
  created_at: string;
}

interface NewsFromAPI {
  id: number;
  title: string;
  content: string;
  category: string;
  created_at: string;
}

interface AnnouncementForList {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  budget: string;
  status: 'active' | 'urgent';
  daysLeft: number;
}

interface NewsForList {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
}

// --- COMPONENT ---

const ContentGrid = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementForList[]>([]);
  const [news, setNews] = useState<NewsForList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsResponse, newsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/announcements?limit=3`),
          fetch(`${process.env.REACT_APP_API_URL}/news?limit=3`)
        ]);

        if (!announcementsResponse.ok || !newsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const announcementsData: AnnouncementFromAPI[] = await announcementsResponse.json();
        const newsData: NewsFromAPI[] = await newsResponse.json();

        const transformedAnnouncements = announcementsData.map(item => ({
          id: item.id,
          title: item.title,
          organization: item.author,
          deadline: new Date(new Date(item.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          budget: 'N/A',
          status: 'active' as 'active',
          daysLeft: 30,
        }));

        const transformedNews = newsData.map(item => ({
          id: item.id,
          title: item.title,
          summary: item.content.substring(0, 100) + '...',
          date: new Date(item.created_at).toLocaleDateString(),
          category: item.category === 'news' ? '산업뉴스' : '공지',
        }));

        setAnnouncements(transformedAnnouncements);
        setNews(transformedNews);

      } catch (error) {
        console.error('Failed to fetch content grid data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid cols={2} tabletCols={2} mobileCols={1} style={{ marginBottom: '4rem' }}>
      {/* 최신 공고 */}
      <Section>
        <SectionHeader>
          <SectionTitle>최신 공고</SectionTitle>
          <ViewAllButton>
            전체보기
            <Icon name="arrowRight" size={16} />
          </ViewAllButton>
        </SectionHeader>

        <CardContainer>
          <AnnouncementList announcements={announcements} />
        </CardContainer>
      </Section>

      {/* 최신 뉴스 */}
      <Section>
        <SectionHeader>
          <SectionTitle>최신 뉴스</SectionTitle>
          <ViewAllButton>
            전체보기
            <Icon name="arrowRight" size={16} />
          </ViewAllButton>
        </SectionHeader>

        <CardContainer>
          {news.map((item) => (
            <NewsCard key={item.id}>
              <NewsCardHeader>
                <NewsCardCategory>{item.category}</NewsCardCategory>
                <NewsCardDate>{item.date}</NewsCardDate>
              </NewsCardHeader>
              <NewsCardTitle>{item.title}</NewsCardTitle>
              <NewsCardSummary>{item.summary}</NewsCardSummary>
            </NewsCard>
          ))}
        </CardContainer>
      </Section>
    </Grid>
  );
};

export default ContentGrid;
