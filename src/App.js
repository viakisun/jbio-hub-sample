import React, { useState } from 'react';

// ===== 미국 스타트업 스타일 디자인 시스템 =====
const DESIGN_SYSTEM = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87'
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    },
    white: '#ffffff',
    black: '#000000'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)',
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    card: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    accent: 'linear-gradient(135deg, #a855f7 0%, #f97316 100%)'
  },
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  },
  spacing: {
    px: '1px',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px'
  },
  typography: {
    fontFamily: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'JetBrains Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '1'],
      '6xl': ['60px', '1'],
      '7xl': ['72px', '1'],
      '8xl': ['96px', '1'],
      '9xl': ['128px', '1']
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    }
  }
};

// ===== 전문가급 SVG 아이콘 컴포넌트 =====
const Icon = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const icons = {
    logo: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#logoGradient)"/>
        <path d="M8 12h6v8h-6zm10-4h6v12h-6z" fill="white" opacity="0.9"/>
        <path d="M8 8h6v2h-6zm10 16h6v2h-6z" fill="white" opacity="0.7"/>
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9"/>
            <stop offset="100%" stopColor="#22c55e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    notification: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
    ),
    user: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    chevronDown: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
    building: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
        <path d="M6 12h12"/>
        <path d="M6 8h6"/>
        <path d="M6 16h6"/>
      </svg>
    ),
    target: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    flask: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v7l4 9H5l4-9V3z"/>
        <path d="M7 13h10"/>
      </svg>
    ),
    trendingUp: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,6 13.5,15.5 8.5,10.5 2,17"/>
        <polyline points="16,6 22,6 22,12"/>
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    calendar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4"/>
        <path d="M16 2v4"/>
        <rect width="18" height="18" x="3" y="4" rx="2"/>
        <path d="M3 10h18"/>
      </svg>
    ),
    arrowRight: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    ),
    externalLink: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6"/>
        <path d="M10 14 21 3"/>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    phone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    mapPin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  };

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {icons[name] || icons.target}
    </span>
  );
};

// ===== 메인 대시보드 컴포넌트 =====
const JBioHubDashboard = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: DESIGN_SYSTEM.colors.gray[50],
      fontFamily: DESIGN_SYSTEM.typography.fontFamily.sans
    }}>
      {/* 헤더 */}
      <header style={{
        backgroundColor: DESIGN_SYSTEM.colors.white,
        borderBottom: `1px solid ${DESIGN_SYSTEM.colors.gray[200]}`,
        boxShadow: DESIGN_SYSTEM.shadows.sm,
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: `0 ${DESIGN_SYSTEM.spacing[6]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* 로고 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: DESIGN_SYSTEM.spacing[3]
          }}>
            <Icon name="logo" size={40} />
            <div>
              <div style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                color: DESIGN_SYSTEM.colors.gray[900],
                lineHeight: DESIGN_SYSTEM.typography.fontSize.xl[1]
              }}>
                J BIO HUB
              </div>
              <div style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                color: DESIGN_SYSTEM.colors.gray[500],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium
              }}>
                Jeonbuk Bio Platform
              </div>
            </div>
          </div>

          {/* 네비게이션 */}
          <nav style={{
            display: 'flex',
            gap: DESIGN_SYSTEM.spacing[8]
          }}>
            {['공고/사업', '창업보육센터', '기업정보', 'JB기술', '소식/뉴스'].map((item, index) => (
              <button
                key={index}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
                  color: DESIGN_SYSTEM.colors.gray[700],
                  cursor: 'pointer',
                  padding: `${DESIGN_SYSTEM.spacing[2]} ${DESIGN_SYSTEM.spacing[4]}`,
                  borderRadius: '8px',
                  transition: 'none'
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* 우측 액션 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: DESIGN_SYSTEM.spacing[4]
          }}>
            <button style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              padding: DESIGN_SYSTEM.spacing[2],
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <Icon name="notification" size={20} color={DESIGN_SYSTEM.colors.gray[600]} />
              <div style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                backgroundColor: DESIGN_SYSTEM.colors.orange[500],
                borderRadius: '50%'
              }} />
            </button>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: DESIGN_SYSTEM.spacing[3],
              padding: `${DESIGN_SYSTEM.spacing[2]} ${DESIGN_SYSTEM.spacing[4]}`,
              backgroundColor: DESIGN_SYSTEM.colors.gray[100],
              borderRadius: '12px',
              cursor: 'pointer'
            }}>
              <Icon name="user" size={18} color={DESIGN_SYSTEM.colors.gray[600]} />
              <span style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
                color: DESIGN_SYSTEM.colors.gray[700]
              }}>
                김바이오
              </span>
              <Icon name="chevronDown" size={16} color={DESIGN_SYSTEM.colors.gray[500]} />
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `${DESIGN_SYSTEM.spacing[12]} ${DESIGN_SYSTEM.spacing[6]}`
      }}>
        
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
        }}>
          {/* 배경 패턴 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize['6xl'][0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.black,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[6]} 0`,
              lineHeight: '1.1',
              letterSpacing: '-0.025em'
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
              lineHeight: '1.6'
            }}>
              전라북도 바이오산업 생태계의 모든 정보를<br />한곳에서 확인하고 관리하세요
            </p>
            
            {/* 중앙 정렬 검색창 */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: DESIGN_SYSTEM.colors.white,
                borderRadius: '16px',
                boxShadow: DESIGN_SYSTEM.shadows['2xl'],
                overflow: 'hidden',
                border: `2px solid ${DESIGN_SYSTEM.colors.primary[100]}`
              }}>
                <div style={{
                  padding: `0 ${DESIGN_SYSTEM.spacing[5]}`,
                  color: DESIGN_SYSTEM.colors.gray[400]
                }}>
                  <Icon name="search" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="공고, 기업, 기술정보를 검색하세요"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  style={{
                    flex: 1,
                    padding: `${DESIGN_SYSTEM.spacing[5]} 0`,
                    border: 'none',
                    outline: 'none',
                    fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                    fontFamily: DESIGN_SYSTEM.typography.fontFamily.sans,
                    backgroundColor: 'transparent',
                    color: DESIGN_SYSTEM.colors.gray[900]
                  }}
                />
                <button style={{
                  background: DESIGN_SYSTEM.gradients.primary,
                  color: 'white',
                  border: 'none',
                  padding: `${DESIGN_SYSTEM.spacing[4]} ${DESIGN_SYSTEM.spacing[8]}`,
                  margin: DESIGN_SYSTEM.spacing[1],
                  borderRadius: '12px',
                  fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                  cursor: 'pointer',
                  minWidth: '100px'
                }}>
                  검색
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section style={{
          marginBottom: DESIGN_SYSTEM.spacing[16]
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: DESIGN_SYSTEM.spacing[6]
          }}>
            {[
              { label: '등록 기업수', value: '1,247', change: '+5.2%', icon: 'building', color: DESIGN_SYSTEM.colors.primary[500] },
              { label: '진행중 공고', value: '89', change: '+12', icon: 'target', color: DESIGN_SYSTEM.colors.success[500] },
              { label: '기술 보유수', value: '3,456', change: '+8.1%', icon: 'flask', color: DESIGN_SYSTEM.colors.purple[500] },
              { label: '이달 뉴스', value: '145', change: '+23', icon: 'trendingUp', color: DESIGN_SYSTEM.colors.orange[500] }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: DESIGN_SYSTEM.gradients.card,
                  borderRadius: '20px',
                  padding: DESIGN_SYSTEM.spacing[8],
                  boxShadow: DESIGN_SYSTEM.shadows.lg,
                  border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* 배경 그라데이션 */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: `${stat.color}10`,
                  borderRadius: '50%',
                  transform: 'translate(25%, -25%)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: DESIGN_SYSTEM.spacing[4]
                  }}>
                    <div style={{
                      padding: DESIGN_SYSTEM.spacing[3],
                      backgroundColor: `${stat.color}15`,
                      borderRadius: '12px'
                    }}>
                      <Icon name={stat.icon} size={24} color={stat.color} />
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[1],
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                      color: DESIGN_SYSTEM.colors.success[600]
                    }}>
                      <Icon name="trendingUp" size={14} />
                      {stat.change}
                    </div>
                  </div>
                  
                  <div style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize['4xl'][0],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.black,
                    color: DESIGN_SYSTEM.colors.gray[900],
                    marginBottom: DESIGN_SYSTEM.spacing[2],
                    fontFamily: DESIGN_SYSTEM.typography.fontFamily.mono,
                    lineHeight: '1'
                  }}>
                    {stat.value}
                  </div>
                  
                  <div style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    color: DESIGN_SYSTEM.colors.gray[600],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 주요 서비스 섹션 */}
        <section style={{
          marginBottom: DESIGN_SYSTEM.spacing[16]
        }}>
          <h2 style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize['3xl'][0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
            color: DESIGN_SYSTEM.colors.gray[900],
            margin: `0 0 ${DESIGN_SYSTEM.spacing[10]} 0`,
            textAlign: 'center',
            letterSpacing: '-0.025em'
          }}>
            주요 서비스
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: DESIGN_SYSTEM.spacing[6]
          }}>
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
                }}
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
                }}>
                  <Icon name={item.icon} size={32} color="white" />
                </div>
                
                <h3 style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                  color: 'white',
                  margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
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
        }}>
          {/* 최신 공고 */}
          <section>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: DESIGN_SYSTEM.spacing[6]
            }}>
              <h2 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                color: DESIGN_SYSTEM.colors.gray[900],
                margin: 0
              }}>
                최신 공고
              </h2>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: DESIGN_SYSTEM.spacing[2],
                background: 'none',
                border: 'none',
                color: DESIGN_SYSTEM.colors.primary[600],
                fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
                cursor: 'pointer'
              }}>
                전체보기
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
            
            <div style={{
              backgroundColor: DESIGN_SYSTEM.colors.white,
              borderRadius: '20px',
              padding: DESIGN_SYSTEM.spacing[6],
              boxShadow: DESIGN_SYSTEM.shadows.lg,
              border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`
            }}>
              {[
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
              ].map((announcement, index) => (
                <div
                  key={announcement.id}
                  style={{
                    padding: DESIGN_SYSTEM.spacing[5],
                    borderRadius: '12px',
                    border: `1px solid ${DESIGN_SYSTEM.colors.gray[200]}`,
                    marginBottom: index < 2 ? DESIGN_SYSTEM.spacing[4] : 0,
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: DESIGN_SYSTEM.spacing[3]
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
                      backgroundColor: announcement.status === 'active' ? DESIGN_SYSTEM.colors.success[500] : DESIGN_SYSTEM.colors.orange[500],
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
                    }}>
                      {announcement.status === 'active' ? '진행중' : '마감임박'}
                    </span>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[1],
                      color: announcement.daysLeft <= 7 ? DESIGN_SYSTEM.colors.orange[500] : DESIGN_SYSTEM.colors.primary[600],
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold
                    }}>
                      <Icon name="clock" size={14} />
                      D-{announcement.daysLeft}
                    </div>
                  </div>
                  
                  <h4 style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                    color: DESIGN_SYSTEM.colors.gray[900],
                    margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                    lineHeight: '1.4'
                  }}>
                    {announcement.title}
                  </h4>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    color: DESIGN_SYSTEM.colors.gray[600]
                  }}>
                    <span>{announcement.organization}</span>
                    <span style={{ 
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                      color: DESIGN_SYSTEM.colors.gray[900]
                    }}>
                      {announcement.budget}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 최신 뉴스 */}
          <section>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: DESIGN_SYSTEM.spacing[6]
            }}>
              <h2 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                color: DESIGN_SYSTEM.colors.gray[900],
                margin: 0
              }}>
                최신 뉴스
              </h2>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: DESIGN_SYSTEM.spacing[2],
                background: 'none',
                border: 'none',
                color: DESIGN_SYSTEM.colors.primary[600],
                fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
                cursor: 'pointer'
              }}>
                전체보기
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
            
            <div style={{
              backgroundColor: DESIGN_SYSTEM.colors.white,
              borderRadius: '20px',
              padding: DESIGN_SYSTEM.spacing[6],
              boxShadow: DESIGN_SYSTEM.shadows.lg,
              border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`
            }}>
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
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: DESIGN_SYSTEM.spacing[3]
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
                      backgroundColor: DESIGN_SYSTEM.colors.primary[500],
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold
                    }}>
                      {news.category}
                    </span>
                    
                    <div style={{
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      color: DESIGN_SYSTEM.colors.gray[500]
                    }}>
                      {news.date}
                    </div>
                  </div>
                  
                  <h4 style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                    color: DESIGN_SYSTEM.colors.gray[900],
                    margin: `0 0 ${DESIGN_SYSTEM.spacing[3]} 0`,
                    lineHeight: '1.4'
                  }}>
                    {news.title}
                  </h4>
                  
                  <p style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    color: DESIGN_SYSTEM.colors.gray[600],
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {news.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* 전문가급 푸터 */}
      <footer style={{
        backgroundColor: DESIGN_SYSTEM.colors.gray[900],
        color: DESIGN_SYSTEM.colors.gray[300]
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: `${DESIGN_SYSTEM.spacing[16]} ${DESIGN_SYSTEM.spacing[6]} ${DESIGN_SYSTEM.spacing[8]}`
        }}>
          {/* 메인 푸터 콘텐츠 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: DESIGN_SYSTEM.spacing[12],
            marginBottom: DESIGN_SYSTEM.spacing[12]
          }}>
            {/* 기관 정보 */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: DESIGN_SYSTEM.spacing[3],
                marginBottom: DESIGN_SYSTEM.spacing[6]
              }}>
                <Icon name="logo" size={48} />
                <div>
                  <div style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                    color: DESIGN_SYSTEM.colors.white
                  }}>
                    J BIO HUB
                  </div>
                  <div style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    color: DESIGN_SYSTEM.colors.gray[400]
                  }}>
                    Jeonbuk Technopark
                  </div>
                </div>
              </div>
              
              <div style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                lineHeight: '1.6',
                color: DESIGN_SYSTEM.colors.gray[400],
                marginBottom: DESIGN_SYSTEM.spacing[6]
              }}>
                전라북도 바이오산업의 혁신과 성장을 이끄는<br />
                대한민국 최고의 바이오 플랫폼입니다.
              </div>

              {/* 연락처 정보 */}
              <div style={{ marginBottom: DESIGN_SYSTEM.spacing[6] }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: DESIGN_SYSTEM.spacing[3],
                  marginBottom: DESIGN_SYSTEM.spacing[3]
                }}>
                  <Icon name="phone" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                  <span style={{ fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0] }}>
                    063-219-3000
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: DESIGN_SYSTEM.spacing[3],
                  marginBottom: DESIGN_SYSTEM.spacing[3]
                }}>
                  <Icon name="mail" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                  <span style={{ fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0] }}>
                    info@jbtp.or.kr
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: DESIGN_SYSTEM.spacing[3]
                }}>
                  <Icon name="mapPin" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                  <span style={{ 
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    lineHeight: '1.5'
                  }}>
                    전북 전주시 덕진구 첨단로 255<br />
                    전북테크노파크 바이오융합센터
                  </span>
                </div>
              </div>
            </div>

            {/* 플랫폼 서비스 */}
            <div>
              <h4 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                color: DESIGN_SYSTEM.colors.white,
                margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
              }}>
                플랫폼 서비스
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  '연구개발 지원사업',
                  '창업보육센터',
                  '기업정보 데이터베이스',
                  '기술정보 플랫폼',
                  '투자유치 지원',
                  '글로벌 진출 지원'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] }}>
                    <a
                      href="#"
                      style={{
                        color: DESIGN_SYSTEM.colors.gray[400],
                        textDecoration: 'none',
                        fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                        display: 'flex',
                        alignItems: 'center',
                        gap: DESIGN_SYSTEM.spacing[2]
                      }}
                    >
                      <Icon name="arrowRight" size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 산업 분야 */}
            <div>
              <h4 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                color: DESIGN_SYSTEM.colors.white,
                margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
              }}>
                바이오 산업분야
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  '바이오의약품',
                  '의료기기',
                  '바이오소재',
                  '기능성 화장품',
                  '바이오에너지',
                  '농생명과학'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] }}>
                    <a
                      href="#"
                      style={{
                        color: DESIGN_SYSTEM.colors.gray[400],
                        textDecoration: 'none',
                        fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                        display: 'flex',
                        alignItems: 'center',
                        gap: DESIGN_SYSTEM.spacing[2]
                      }}
                    >
                      <Icon name="arrowRight" size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 기관 안내 */}
            <div>
              <h4 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                color: DESIGN_SYSTEM.colors.white,
                margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
              }}>
                기관 안내
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  '테크노파크 소개',
                  '조직도',
                  '찾아오시는 길',
                  '채용정보',
                  '입찰공고',
                  '보도자료'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] }}>
                    <a
                      href="#"
                      style={{
                        color: DESIGN_SYSTEM.colors.gray[400],
                        textDecoration: 'none',
                        fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                        display: 'flex',
                        alignItems: 'center',
                        gap: DESIGN_SYSTEM.spacing[2]
                      }}
                    >
                      <Icon name="arrowRight" size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 고객지원 */}
            <div>
              <h4 style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                color: DESIGN_SYSTEM.colors.white,
                margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
              }}>
                고객지원
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  '공지사항',
                  '자주묻는질문',
                  '온라인 문의',
                  '기술지원',
                  '사용자 가이드',
                  '시스템 점검'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] }}>
                    <a
                      href="#"
                      style={{
                        color: DESIGN_SYSTEM.colors.gray[400],
                        textDecoration: 'none',
                        fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                        display: 'flex',
                        alignItems: 'center',
                        gap: DESIGN_SYSTEM.spacing[2]
                      }}
                    >
                      <Icon name="arrowRight" size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 하단 구분선 */}
          <div style={{
            borderTop: `1px solid ${DESIGN_SYSTEM.colors.gray[700]}`,
            paddingTop: DESIGN_SYSTEM.spacing[8],
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: DESIGN_SYSTEM.spacing[4]
          }}>
            <div style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
              color: DESIGN_SYSTEM.colors.gray[500]
            }}>
              © 2024 전라북도테크노파크. All rights reserved. | 
              사업자등록번호: 403-82-11948 | 
              대표자: 김철수
            </div>
            <div style={{
              display: 'flex',
              gap: DESIGN_SYSTEM.spacing[6],
              fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0]
            }}>
              <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' }}>
                이용약관
              </a>
              <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' }}>
                개인정보처리방침
              </a>
              <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' }}>
                이메일무단수집거부
              </a>
              <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' }}>
                법적고지
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JBioHubDashboard;