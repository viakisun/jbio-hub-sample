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
          status: index === 0 ? 'urgent' : 'active', // Mock status
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

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    borderRadius: '20px',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    margin: 0,
  };

  const itemStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '1rem 1.25rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: '#111827',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  return (
    <section style={{ marginBottom: '4rem', backgroundColor: '#eef2ff', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="2rem">
          {/* 최신 공고 */}
          <div style={cardStyle}>
            <div style={headerStyle}>
              <h2 style={titleStyle}>최신 공고</h2>
              <Link to="/announcements">
                <Button $variant="primary">전체보기</Button>
              </Link>
            </div>
            <div style={{flexGrow: 1}}>
              {announcements.map((item) => (
                <Link to={`/support/all/${item.id}`} key={item.id} style={{...itemStyle, borderLeft: `4px solid ${item.status === 'urgent' ? '#ef4444' : '#3b82f6'}`}}>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.organization}</div>
                    </div>
                    <Icon name="arrowRight" size={20} color="#9ca3af" />
                </Link>
              ))}
            </div>
          </div>

          {/* 최신 뉴스 */}
          <div style={cardStyle}>
            <div style={headerStyle}>
              <h2 style={titleStyle}>최신 뉴스</h2>
              <Link to="/news/latest">
                <Button $variant="primary">전체보기</Button>
              </Link>
            </div>
            <div style={{flexGrow: 1}}>
              {news.map((item) => (
                <Link to={`/news/latest/${item.id}`} key={item.id} style={itemStyle}>
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
