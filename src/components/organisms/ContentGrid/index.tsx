import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import AnnouncementList from '../AnnouncementList';

const ContentGrid = () => {
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
  );
};

export default ContentGrid;
