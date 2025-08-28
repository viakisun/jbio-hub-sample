import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';
import Button from '../../atoms/Button';
import { ApiAnnouncement, ApiNews } from '../../../types/api';

interface Announcement {
  id: number;
  title: string;
  organization: string;
  status: 'active' | 'urgent';
}

interface News {
  id: number;
  title: string;
  category: string;
  date: string;
}

const ContentGridSample2 = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsResponse, newsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/announcements?limit=4`),
          fetch(`${process.env.REACT_APP_API_URL}/api/news?limit=4`)
        ]);

        if (!announcementsResponse.ok || !newsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const announcementsData: ApiAnnouncement[] = await announcementsResponse.json();
        const newsData: ApiNews[] = await newsResponse.json();

        setAnnouncements(announcementsData.map((item: ApiAnnouncement, index: number) => ({
          id: item.id,
          title: item.title,
          organization: item.author,
          status: index === 0 ? 'urgent' : 'active',
        })));
        setNews(newsData.map((item: ApiNews) => ({
          id: item.id,
          title: item.title,
          category: item.category === 'news' ? '산업뉴스' : '공지',
          date: new Date(item.created_at).toLocaleDateString(),
        })));
      } catch (error) {
        console.error('Failed to fetch content grid data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="content-grid-sample-2">
      <div className="content-grid-sample-2__wrapper">
        <Grid cols={2} tabletCols={1} mobileCols={1} gap="2rem">
          <div className="content-grid-sample-2__card">
            <div className="content-grid-sample-2__header">
              <h2 className="content-grid-sample-2__title">최신 공고</h2>
              <Link to="/announcements">
                <Button variant="primary">전체보기</Button>
              </Link>
            </div>
            <div style={{flexGrow: 1}}>
              {announcements.map((item) => (
                <Link to={`/support/all/${item.id}`} key={item.id} className="content-grid-sample-2__item" style={{borderLeft: `4px solid ${item.status === 'urgent' ? '#ef4444' : '#3b82f6'}`}}>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.organization}</div>
                    </div>
                    <Icon name="arrowRight" size={20} color="#9ca3af" />
                </Link>
              ))}
            </div>
          </div>

          <div className="content-grid-sample-2__card">
            <div className="content-grid-sample-2__header">
              <h2 className="content-grid-sample-2__title">최신 뉴스</h2>
              <Link to="/news/latest">
                <Button variant="primary">전체보기</Button>
              </Link>
            </div>
            <div style={{flexGrow: 1}}>
              {news.map((item) => (
                <Link to={`/news/latest/${item.id}`} key={item.id} className="content-grid-sample-2__item">
                  <div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                      <span style={{backgroundColor: '#e0e7ff', color: '#4338ca', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600'}}>{item.category}</span>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.date}</div>
                    </div>
                    <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                  </div>
                  <Icon name="arrowRight" size={20} color="#9ca3af" />
                </Link>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </section>
  );
};

export default ContentGridSample2;
