import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Grid from '../../atoms/Grid';
import { ApiAnnouncement, ApiNews } from '../../../types/api';

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
          daysLeft: 30,
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
    <section className="content-grid-sample-1">
      <Grid cols={2} tabletCols={1} mobileCols={1} gap="3rem">
        <div>
          <div className="content-grid-sample-1__section-header">
            <h2 className="content-grid-sample-1__section-title">최신 공고</h2>
            <Link to="/announcements" className="content-grid-sample-1__view-all-link">
              전체보기 <Icon name="arrowRight" size={14} />
            </Link>
          </div>
          <div>
            {announcements.map((item, index) => (
              <Link to={`/support/all/${item.id}`} key={index} className="content-grid-sample-1__item-link">
                <div className="content-grid-sample-1__list-item">
                  <span className="content-grid-sample-1__title">{item.title}</span>
                  <div className="content-grid-sample-1__meta">
                    {item.organization}<br/>
                    D-{item.daysLeft}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="content-grid-sample-1__section-header">
            <h2 className="content-grid-sample-1__section-title">최신 뉴스</h2>
            <Link to="/news/latest" className="content-grid-sample-1__view-all-link">
              전체보기 <Icon name="arrowRight" size={14} />
            </Link>
          </div>
          <div>
            {news.map((item, index) => (
              <Link to={`/news/latest/${item.id}`} key={index} className="content-grid-sample-1__item-link">
                <div className="content-grid-sample-1__list-item">
                  <div>
                    <span className="content-grid-sample-1__title" style={{ display: 'block', marginBottom: '0.25rem'}}>{item.title}</span>
                    <span className="content-grid-sample-1__meta" style={{ fontSize: '0.8rem', textAlign: 'left'}}>{item.category}</span>
                  </div>
                  <span className="content-grid-sample-1__meta">{item.date}</span>
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
