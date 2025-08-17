import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';

interface Announcement {
  id: number;
  title: string;
}

interface News {
  id: number;
  title: string;
  category: string;
}

const ContentGridSample4 = () => {
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

        const announcementsData = await announcementsResponse.json();
        const newsData = await newsResponse.json();

        setAnnouncements(announcementsData);
        setNews(newsData);
      } catch (error) {
        console.error('Failed to fetch content grid data:', error);
      }
    };

    fetchData();
  }, []);

  const panelStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '2rem',
    color: 'white',
    height: '100%',
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
    textShadow: '0 0 5px rgba(255, 255, 255, 0.2)',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '12px',
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.85)',
    transition: 'background-color 0.2s, color 0.2s',
  };

  return (
    <section style={{ marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <Grid $cols={2} $tabletCols={1} $mobileCols={1} $gap="2rem">
        <div style={panelStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>Latest Announcements</h2>
            <Link to="/announcements" style={{color: '#90d8ff', textDecoration: 'none', fontWeight: 'bold'}}>
              View All
            </Link>
          </div>
          <div>
            {announcements.map((item) => (
              <Link to={`/support/all/${item.id}`} key={item.id} style={listItemStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'; }}
              >
                <span>{item.title}</span>
                <Icon name="arrowRight" size={16} />
              </Link>
            ))}
          </div>
        </div>
        <div style={panelStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>Latest News</h2>
            <Link to="/news/latest" style={{color: '#90d8ff', textDecoration: 'none', fontWeight: 'bold'}}>
              View All
            </Link>
          </div>
          <div>
            {news.map((item) => (
              <Link to={`/news/latest/${item.id}`} key={item.id} style={listItemStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'; }}
              >
                <span>{item.title}</span>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  opacity: 0.8
                }}>{item.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default ContentGridSample4;
