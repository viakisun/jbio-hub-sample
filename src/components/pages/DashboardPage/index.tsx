import React, { useState, useEffect } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
import SearchBar from '../../molecules/SearchBar';
import StatCard from '../../molecules/StatCard';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const DashboardPage = () => {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [announcementsRes, newsRes, companiesRes, techsRes] = await Promise.all([
          fetch('http://localhost:8000/announcements'),
          fetch('http://localhost:8000/news'),
          fetch('http://localhost:8000/companies'),
          fetch('http://localhost:8000/techs'),
        ]);

        const announcementsData = await announcementsRes.json();
        const newsData = await newsRes.json();
        const companiesData = await companiesRes.json();
        const techsData = await techsRes.json();

        setAnnouncements(announcementsData.slice(0, 3)); // Show first 3
        setNews(newsData.slice(0, 3)); // Show first 3

        // Update stats based on fetched data
        setStats([
          { label: '등록 기업수', value: companiesData.length, change: '+2', icon: 'building', color: DESIGN_SYSTEM.colors.primary[500] },
          { label: '진행중 공고', value: announcementsData.length, change: `+${announcementsData.length}`, icon: 'target', color: DESIGN_SYSTEM.colors.success[500] },
          { label: '기술 보유수', value: techsData.length, change: '+1', icon: 'flask', color: DESIGN_SYSTEM.colors.purple[500] },
          { label: '이달 뉴스', value: newsData.length, change: `+${newsData.length}`, icon: 'trendingUp', color: DESIGN_SYSTEM.colors.orange[500] }
        ]);

      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: DESIGN_SYSTEM.colors.gray[50],
      fontFamily: DESIGN_SYSTEM.typography.fontFamily.sans
    } as React.CSSProperties}>
      <Header />

      <main style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `${DESIGN_SYSTEM.spacing[12]} ${DESIGN_SYSTEM.spacing[6]}`
      } as React.CSSProperties}>

        <section style={{
          background: DESIGN_SYSTEM.gradients.hero,
          borderRadius: '24px',
          padding: `${DESIGN_SYSTEM.spacing[20]} ${DESIGN_SYSTEM.spacing[12]}`,
          color: 'white',
          textAlign: 'center',
          marginBottom: DESIGN_SYSTEM.spacing[16],
        }}>
            <h1 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize['6xl'][0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.black,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[6]} 0`,
            }}>
              J BIO HUB Platform
            </h1>
            <p style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
              margin: `0 0 ${DESIGN_SYSTEM.spacing[12]} 0`,
              opacity: 0.9,
              maxWidth: '720px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              전라북도 바이오산업 생태계의 모든 정보를<br />한곳에서 확인하고 관리하세요
            </p>
            <SearchBar />
        </section>

        <section style={{ marginBottom: DESIGN_SYSTEM.spacing[16] }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: DESIGN_SYSTEM.spacing[6]
          }}>
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} style={{ height: '120px', backgroundColor: DESIGN_SYSTEM.colors.gray[200], borderRadius: '20px' }}></div>
              ))
            ) : (
              stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))
            )}
          </div>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: DESIGN_SYSTEM.spacing[8],
          marginBottom: DESIGN_SYSTEM.spacing[16]
        }}>
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: DESIGN_SYSTEM.spacing[6] }}>
              <h2 style={{ fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0], fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold, color: DESIGN_SYSTEM.colors.gray[900], margin: 0 }}>
                최신 공고
              </h2>
              <Button>전체보기 <Icon name="arrowRight" size={16} /></Button>
            </div>
            <div style={{ backgroundColor: DESIGN_SYSTEM.colors.white, borderRadius: '20px', padding: DESIGN_SYSTEM.spacing[6], boxShadow: DESIGN_SYSTEM.shadows.lg }}>
              {loading ? <p>Loading...</p> : announcements.map((announcement, index) => (
                <div key={announcement.id} style={{ padding: DESIGN_SYSTEM.spacing[5], borderBottom: index < announcements.length - 1 ? `1px solid ${DESIGN_SYSTEM.colors.gray[200]}` : 'none' }}>
                  <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
                      backgroundColor: DESIGN_SYSTEM.colors.success[500],
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
                  }}>
                    진행중
                  </span>
                  <h4 style={{ margin: `${DESIGN_SYSTEM.spacing[3]} 0`, fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold }}>{announcement.title}</h4>
                  <p style={{ color: DESIGN_SYSTEM.colors.gray[600], fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0] }}>{announcement.author}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: DESIGN_SYSTEM.spacing[6] }}>
              <h2 style={{ fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0], fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold, color: DESIGN_SYSTEM.colors.gray[900], margin: 0 }}>
                최신 뉴스
              </h2>
              <Button>전체보기 <Icon name="arrowRight" size={16} /></Button>
            </div>
            <div style={{ backgroundColor: DESIGN_SYSTEM.colors.white, borderRadius: '20px', padding: DESIGN_SYSTEM.spacing[6], boxShadow: DESIGN_SYSTEM.shadows.lg }}>
              {loading ? <p>Loading...</p> : news.map((newsItem, index) => (
                <div key={newsItem.id} style={{ padding: DESIGN_SYSTEM.spacing[5], borderBottom: index < news.length - 1 ? `1px solid ${DESIGN_SYSTEM.colors.gray[200]}` : 'none' }}>
                   <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
                      backgroundColor: DESIGN_SYSTEM.colors.primary[500],
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
                  }}>{newsItem.category}</span>
                  <h4 style={{ margin: `${DESIGN_SYSTEM.spacing[3]} 0`, fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold }}>{newsItem.title}</h4>
                  <p style={{ color: DESIGN_SYSTEM.colors.gray[600], fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],  overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{newsItem.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;
