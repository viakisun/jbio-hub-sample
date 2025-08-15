import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import SearchBar from '../../molecules/SearchBar';

const HeroSection = () => {
  return (
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
          JB SQUARE
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
          전북의 미래를 함께 만드는 혁신 공간<br />모든 정보와 기회를 한 곳에서 만나보세요
        </p>

        {/* 중앙 정렬 검색창 */}
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
