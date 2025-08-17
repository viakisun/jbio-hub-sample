import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample2 = () => {
  return (
    <section style={{
      // 강렬한 보라색-파란색 계열 그라디언트
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '24px',
      padding: `${DESIGN_SYSTEM.spacing[20]} ${DESIGN_SYSTEM.spacing[12]}`,
      color: 'white',
      textAlign: 'center',
      marginBottom: DESIGN_SYSTEM.spacing[16],
      position: 'relative',
      overflow: 'hidden'
    } as React.CSSProperties}>
      {/* 추상적인 배경 패턴 */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
        opacity: 0.05,
        backgroundSize: 'auto',
      }} />

      <div style={{ position: 'relative', zIndex: 1 } as React.CSSProperties}>
        <h1 style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize['7xl'][0], // 더 큰 폰트 사이즈
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.black, // 가장 두꺼운 폰트
          margin: `0 0 ${DESIGN_SYSTEM.spacing[6]} 0`,
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          textShadow: '0 4px 15px rgba(0,0,0,0.2)' // 텍스트 그림자 추가
        } as React.CSSProperties}>
          INNOVATE. CONNECT. GROW.
        </h1>
        <p style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
          margin: `0 0 ${DESIGN_SYSTEM.spacing[12]} 0`,
          opacity: 0.95,
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
        } as React.CSSProperties}>
          전북의 미래를 여는 혁신 허브, JB SQUARE에서<br/>
          당신의 가능성을 폭발시키세요.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSample2;
