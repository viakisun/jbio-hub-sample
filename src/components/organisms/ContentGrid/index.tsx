import React, { useState, useEffect } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import AnnouncementList from '../AnnouncementList';

// Backend data models
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

// Frontend data models
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

const ContentGrid = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementForList[]>([]);
  const [news, setNews] = useState<NewsForList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching content grid data (announcements and news)...');
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

        console.log('Successfully fetched announcements:', announcementsData);
        console.log('Successfully fetched news:', newsData);

        // Transform data for frontend
        const transformedAnnouncements = announcementsData.map(item => ({
          id: item.id,
          title: item.title,
          organization: item.author,
          deadline: new Date(new Date(item.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), // Mock deadline
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
    <div className="content-grid responsive-grid-2-col">
      {/* 최신 공고 */}
      <section className="content-section">
        <div className="section-header">
          <h2 className="section-title">최신 공고</h2>
          <Button className="section-view-all-button">
            전체보기
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>

        <div className="card-container">
          <AnnouncementList announcements={announcements} />
        </div>
      </section>

      {/* 최신 뉴스 */}
      <section className="content-section">
        <div className="section-header">
          <h2 className="section-title">최신 뉴스</h2>
          <Button className="section-view-all-button">
            전체보기
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>

        <div className="card-container">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-card-header">
                <span className="news-card-category">{item.category}</span>
                <div className="news-card-date">{item.date}</div>
              </div>
              <h4 className="news-card-title">{item.title}</h4>
              <p className="news-card-summary">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentGrid;
