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

  return (
    <section className="content-grid-sample-4">
      <Grid cols={2} tabletCols={1} mobileCols={1} gap="2rem">
        <div className="content-grid-sample-4__panel">
          <div className="content-grid-sample-4__header">
            <h2 className="content-grid-sample-4__title">Latest Announcements</h2>
            <Link to="/announcements" className="content-grid-sample-1__view-all-link" style={{color: '#90d8ff'}}>
              View All
            </Link>
          </div>
          <div>
            {announcements.map((item) => (
              <Link to={`/support/all/${item.id}`} key={item.id} className="content-grid-sample-4__item">
                <span>{item.title}</span>
                <Icon name="arrowRight" size={16} />
              </Link>
            ))}
          </div>
        </div>
        <div className="content-grid-sample-4__panel">
          <div className="content-grid-sample-4__header">
            <h2 className="content-grid-sample-4__title">Latest News</h2>
            <Link to="/news/latest" className="content-grid-sample-1__view-all-link" style={{color: '#90d8ff'}}>
              View All
            </Link>
          </div>
          <div>
            {news.map((item) => (
              <Link to={`/news/latest/${item.id}`} key={item.id} className="content-grid-sample-4__item">
                <span>{item.title}</span>
                <span className="content-grid-sample-4__category">{item.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default ContentGridSample4;
