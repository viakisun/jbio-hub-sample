import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
import SearchBar from '../../molecules/SearchBar';
import StatCard from '../../molecules/StatCard';
import AnnouncementList from '../../organisms/AnnouncementList';
import MainLayout from '../../templates/MainLayout';

/**
 * ## UI-01-01: Home Page
 * ### Atomic Structure
 * - Template: MainLayout
 * - Organism: HeroSection (to be created)
 * - Organism: StatsSection (to be created)
 * - Organism: ServicesSection (to be created)
 * - Organism: ContentGrid (to be created)
 *
 * @returns {JSX.Element}
 */
const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section style={{
        background: DESIGN_SYSTEM.gradients.hero,
        borderRadius: '24px',
        padding: `${DESIGN_SYSTEM.spacing[20]} ${DESIGN_SYSTEM.spacing[12]}`,
        color: 'white',
        textAlign: 'center',
        marginBottom: DESIGN_SYSTEM.spacing[16],
        position: 'relative',
        overflow: 'hidden'
      } as React.CSSProperties}>
        {/* 배경 패턴 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        } as React.CSSProperties} />

        <div style={{ position: 'relative', zIndex: 1 } as React.CSSProperties}>
          <h1 style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize['6xl'][0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.black,
            margin: `0 0 ${DESIGN_SYSTEM.spacing[6]} 0`,
            lineHeight: '1.1',
            letterSpacing: '-0.025em'
          } as React.CSSProperties}>
            J BIO HUB Platform
          </h1>
          <p style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
            margin: `0 0 ${DESIGN_SYSTEM.spacing[12]} 0`,
            opacity: 0.9,
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          } as React.CSSProperties}>
            전라북도 바이오산업 생태계의 모든 정보를<br />한곳에서 확인하고 관리하세요
          </p>

          {/* 중앙 정렬 검색창 */}
          <SearchBar />
        </div>
      </section>

      {/* 통계 섹션 */}
      <section style={{
        marginBottom: DESIGN_SYSTEM.spacing[16]
      } as React.CSSProperties}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: DESIGN_SYSTEM.spacing[6]
        } as React.CSSProperties}>
          {[
            { label: '등록 기업수', value: '1,247', change: '+5.2%', icon: 'building', color: DESIGN_SYSTEM.colors.primary[500] },
            { label: '진행중 공고', value: '89', change: '+12', icon: 'target', color: DESIGN_SYSTEM.colors.success[500] },
            { label: '기술 보유수', value: '3,456', change: '+8.1%', icon: 'flask', color: DESIGN_SYSTEM.colors.purple[500] },
            { label: '이달 뉴스', value: '145', change: '+23', icon: 'trendingUp', color: DESIGN_SYSTEM.colors.orange[500] }
          ].map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </section>

      {/* 주요 서비스 섹션 */}
      <section style={{
        marginBottom: DESIGN_SYSTEM.spacing[16]
      } as React.CSSProperties}>
        <h2 style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize['3xl'][0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
          color: DESIGN_SYSTEM.colors.gray[900],
          margin: `0 0 ${DESIGN_SYSTEM.spacing[10]} 0`,
          textAlign: 'center',
          letterSpacing: '-0.025em'
        } as React.CSSProperties}>
          주요 서비스
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: DESIGN_SYSTEM.spacing[6]
        } as React.CSSProperties}>
          {[
            {
              title: 'R&D 지원사업',
              description: '연구개발 지원사업 신청 및 관리',
              icon: 'flask',
              gradient: DESIGN_SYSTEM.gradients.primary
            },
            {
              title: '창업보육센터',
              description: '바이오 창업 지원 프로그램',
              icon: 'target',
              gradient: DESIGN_SYSTEM.gradients.accent
            },
            {
              title: '기업 정보',
              description: '전북 바이오 기업 현황',
              icon: 'building',
              gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
            },
            {
              title: '기술 정보',
              description: '최신 바이오 기술 동향',
              icon: 'trendingUp',
              gradient: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)'
            }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: item.gradient,
                borderRadius: '20px',
                padding: DESIGN_SYSTEM.spacing[8],
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              } as React.CSSProperties}
            >
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: DESIGN_SYSTEM.spacing[5],
                backdropFilter: 'blur(10px)'
              } as React.CSSProperties}>
                <Icon name={item.icon} size={32} color="white" />
              </div>

              <h3 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                color: 'white',
                margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                lineHeight: '1.3'
              } as React.CSSProperties}>
                {item.title}
              </h3>

              <p style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                color: 'rgba(255,255,255,0.9)',
                margin: 0,
                lineHeight: '1.5'
              } as React.CSSProperties}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 콘텐츠 그리드 */}
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
            <AnnouncementList announcements={[
              {
                id: 1,
                title: '2024년 바이오헬스 R&D 지원사업',
                organization: '전라북도',
                deadline: '2024-12-31',
                budget: '최대 2억원',
                status: 'active',
                daysLeft: 45
              },
              {
                id: 2,
                title: '첨단의료기기 기술개발 지원',
                organization: 'KIAT',
                deadline: '2024-09-15',
                budget: '최대 10억원',
                status: 'urgent',
                daysLeft: 8
              },
              {
                id: 3,
                title: '바이오 창업기업 육성사업',
                organization: '중소벤처기업부',
                deadline: '2024-10-30',
                budget: '최대 3억원',
                status: 'active',
                daysLeft: 25
              }
            ]} />
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
            {[
              {
                id: 1,
                title: '전북 바이오산업, 2024년 매출 1조원 돌파 전망',
                summary: '전라북도 바이오산업이 올해 사상 최대 실적 기록 예상',
                date: '2024-08-14',
                category: '산업뉴스'
              },
              {
                id: 2,
                title: '전주 바이오밸리, 글로벌 기업 유치 성과',
                summary: '해외 바이오 기업들의 전주 바이오밸리 투자 증가',
                date: '2024-08-13',
                category: '투자뉴스'
              },
              {
                id: 3,
                title: '바이오 인재양성 프로그램 확대 운영',
                summary: '전북대와 원광대 바이오 전문인력 양성과정 확대',
                date: '2024-08-12',
                category: '교육뉴스'
              }
            ].map((news, index) => (
              <div
                key={news.id}
                style={{
                  padding: DESIGN_SYSTEM.spacing[5],
                  borderRadius: '12px',
                  border: `1px solid ${DESIGN_SYSTEM.colors.gray[200]}`,
                  marginBottom: index < 2 ? DESIGN_SYSTEM.spacing[4] : 0,
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
                    {news.category}
                  </span>

                  <div style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    color: DESIGN_SYSTEM.colors.gray[500]
                  } as React.CSSProperties}>
                    {news.date}
                  </div>
                </div>

                <h4 style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                  color: DESIGN_SYSTEM.colors.gray[900],
                  margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                  lineHeight: '1.4'
                } as React.CSSProperties}>
                  {news.title}
                </h4>

                <p style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  color: DESIGN_SYSTEM.colors.gray[600],
                  margin: 0,
                  lineHeight: '1.5'
                } as React.CSSProperties}>
                  {news.summary}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
