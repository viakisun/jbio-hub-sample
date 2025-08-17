import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';
import { ApiAnnouncement, ApiNews } from '../../../types/api';

// Simplified data models for this component
interface Announcement {
  id: number;
  title: string;
  organization: string;
  daysLeft: number;
}

interface News {
  id: number;
  title: string;
  category: string;
  date: string;
}

const ContentGridSample1 = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsResponse, newsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/announcements?limit=3`),
          fetch(`${process.env.REACT_APP_API_URL}/api/news?limit=3`)
        ]);

        if (!announcementsResponse.ok || !newsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const announcementsData: ApiAnnouncement[] = await announcementsResponse.json();
        const newsData: ApiNews[] = await newsResponse.json();

        setAnnouncements(announcementsData.map((item: ApiAnnouncement) => ({
          id: item.id,
          title: item.title,
          organization: item.author,
          daysLeft: 30, // Mock data
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

  const listItemStyle: React.CSSProperties = {
    padding: '1rem 0',
    borderBottom: '1px solid #e9ecef',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#212529',
    fontWeight: '500',
    textDecoration: 'none',
  };

  const metaStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#6c757d',
    textAlign: 'right',
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto 4rem auto', padding: '0 1rem' }}>
      <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="3rem">
        {/* 최신 공고 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>최신 공고</h2>
            <Link to="/announcements" style={{ textDecoration: 'none', color: '#495057', fontSize: '0.9rem' }}>
              전체보기 <Icon name="arrowRight" size={14} />
            </Link>
          </div>
          <div>
            {announcements.map((item, index) => (
              <Link to={`/support/all/${item.id}`} key={index} style={{ textDecoration: 'none' }}>
                <div style={listItemStyle}>
                  <span style={titleStyle}>{item.title}</span>
                  <div style={metaStyle}>
                    {item.organization}<br/>
                    D-{item.daysLeft}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 최신 뉴스 */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>최신 뉴스</h2>
            <Link to="/news/latest" style={{ textDecoration: 'none', color: '#495057', fontSize: '0.9rem' }}>
              전체보기 <Icon name="arrowRight" size={14} />
            </Link>
          </div>
          <div>
            {news.map((item, index) => (
              <Link to={`/news/latest/${item.id}`} key={index} style={{ textDecoration: 'none' }}>
                <div style={listItemStyle}>
                  <div>
                    <span style={{...titleStyle, display: 'block', marginBottom: '0.25rem'}}>{item.title}</span>
                    <span style={{...metaStyle, fontSize: '0.8rem', textAlign: 'left'}}>{item.category}</span>
                  </div>
                  <span style={metaStyle}>{item.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default ContentGridSample1;
