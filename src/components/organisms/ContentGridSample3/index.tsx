import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';
import { ApiAnnouncement, ApiNews } from '../../../types/api';

interface Announcement {
  id: number;
  title: string;
  organization: string;
  deadline: string;
}

interface News {
  id: number;
  title: string;
  category: string;
  date: string;
}

const ContentGridSample3 = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsResponse, newsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/announcements?limit=5`),
          fetch(`${process.env.REACT_APP_API_URL}/api/news?limit=5`)
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
          deadline: new Date(new Date(item.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
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

  const sectionStyle: React.CSSProperties = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '16px',
    border: '1px solid #dee2e6',
    height: '100%',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #dee2e6'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1d3557',
    margin: 0,
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #e9ecef',
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <section style={{ marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem auto', padding: '0 1rem' }}>
      <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="2rem">
        {/* 최신 공고 */}
        <div style={sectionStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>최신 공고</h2>
            <Link to="/announcements" style={{ textDecoration: 'none', color: '#1d3557', fontWeight: 500 }}>
              전체보기 <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div>
            {announcements.map((item) => (
              <Link to={`/support/all/${item.id}`} key={item.id} style={itemStyle}>
                <span style={{ fontWeight: 500, color: '#212529' }}>{item.title}</span>
                <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>{item.deadline}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 최신 뉴스 */}
        <div style={sectionStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>최신 뉴스</h2>
            <Link to="/news/latest" style={{ textDecoration: 'none', color: '#1d3557', fontWeight: 500 }}>
              전체보기 <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div>
            {news.map((item) => (
               <Link to={`/news/latest/${item.id}`} key={item.id} style={itemStyle}>
                <span style={{ fontWeight: 500, color: '#212529' }}>{item.title}</span>
                <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>{item.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default ContentGridSample3;
