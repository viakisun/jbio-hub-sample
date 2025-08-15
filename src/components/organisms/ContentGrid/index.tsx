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
      try {
        const [announcementsResponse, newsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/announcements`),
          fetch(`${process.env.REACT_APP_API_URL}/news`)
        ]);

        if (!announcementsResponse.ok || !newsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const announcementsData: AnnouncementFromAPI[] = await announcementsResponse.json();
        const newsData: NewsFromAPI[] = await newsResponse.json();

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
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: DESIGN_SYSTEM.spacing[8],
      marginBottom: DESIGN_SYSTEM.spacing[16]
    } as React.CSSProperties}>
      {/* 최신 공고 */}
      <section>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: DESIGN_SYSTEM.spacing[6]
        } as React.CSSProperties}>
          <h2 style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
            color: DESIGN_SYSTEM.colors.gray[900],
            margin: 0
          } as React.CSSProperties}>
            최신 공고
          </h2>
          <Button style={{
            display: 'flex',
            alignItems: 'center',
            gap: DESIGN_SYSTEM.spacing[2],
            background: 'none',
            border: 'none',
            color: DESIGN_SYSTEM.colors.primary[600],
            fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
            cursor: 'pointer'
          } as React.CSSProperties}>
            전체보기
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>

        <div style={{
          backgroundColor: DESIGN_SYSTEM.colors.white,
          borderRadius: '20px',
          padding: DESIGN_SYSTEM.spacing[6],
          boxShadow: DESIGN_SYSTEM.shadows.lg,
          border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`
        } as React.CSSProperties}>
          <AnnouncementList announcements={announcements} />
        </div>
      </section>

      {/* 최신 뉴스 */}
      <section>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: DESIGN_SYSTEM.spacing[6]
        } as React.CSSProperties}>
          <h2 style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
            color: DESIGN_SYSTEM.colors.gray[900],
            margin: 0
          } as React.CSSProperties}>
            최신 뉴스
          </h2>
          <Button style={{
            display: 'flex',
            alignItems: 'center',
            gap: DESIGN_SYSTEM.spacing[2],
            background: 'none',
            border: 'none',
            color: DESIGN_SYSTEM.colors.primary[600],
            fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
            cursor: 'pointer'
          } as React.CSSProperties}>
            전체보기
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>

        <div style={{
          backgroundColor: DESIGN_SYSTEM.colors.white,
          borderRadius: '20px',
          padding: DESIGN_SYSTEM.spacing[6],
          boxShadow: DESIGN_SYSTEM.shadows.lg,
          border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`
        } as React.CSSProperties}>
          {news.map((item, index) => (
            <div
              key={item.id}
              style={{
                padding: DESIGN_SYSTEM.spacing[5],
                borderRadius: '12px',
                border: `1px solid ${DESIGN_SYSTEM.colors.gray[200]}`,
                marginBottom: index < news.length - 1 ? DESIGN_SYSTEM.spacing[4] : 0,
                cursor: 'pointer'
              } as React.CSSProperties}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: DESIGN_SYSTEM.spacing[3]
              } as React.CSSProperties}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
                  backgroundColor: DESIGN_SYSTEM.colors.primary[500],
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
                } as React.CSSProperties}>
                  {item.category}
                </span>

                <div style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  color: DESIGN_SYSTEM.colors.gray[500]
                } as React.CSSProperties}>
                  {item.date}
                </div>
              </div>

              <h4 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                color: DESIGN_SYSTEM.colors.gray[900],
                margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                lineHeight: '1.4'
              } as React.CSSProperties}>
                {item.title}
              </h4>

              <p style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                color: DESIGN_SYSTEM.colors.gray[600],
                margin: 0,
                lineHeight: '1.5'
              } as React.CSSProperties}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentGrid;
