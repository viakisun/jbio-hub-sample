import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import SearchBar from '../../molecules/SearchBar'; // We can reuse the search bar

const HeroSectionSample4 = () => {
  const sectionStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '32px',
    padding: `${DESIGN_SYSTEM.spacing[20]} ${DESIGN_SYSTEM.spacing[12]}`,
    color: 'white',
    textAlign: 'center',
    marginBottom: DESIGN_SYSTEM.spacing[16],
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
  };

  const glowTextStyle: React.CSSProperties = {
    textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 12px rgba(255, 255, 255, 0.3)'
  };

  return (
    <section style={sectionStyle}>
      {/* Animated gradient blobs for background effect */}
      <div style={{
        position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
        background: 'radial-gradient(circle, rgba(100, 100, 255, 0.3) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle, rgba(255, 100, 100, 0.3) 50%, rgba(255,255,255,0) 80%)',
        animation: 'rotate 20s linear infinite'
      }} />
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize['7xl'][0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
          margin: `0 0 ${DESIGN_SYSTEM.spacing[6]} 0`,
          lineHeight: '1.1',
          letterSpacing: '0.02em',
          ...glowTextStyle
        }}>
          FUTURE IS NOW
        </h1>
        <p style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize.xl[0],
          margin: `0 0 ${DESIGN_SYSTEM.spacing[12]} 0`,
          opacity: 0.9,
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
        }}>
          JB SQUARE에서 펼쳐지는 혁신의 내일.
          <br/>
          가장 진보된 기술과 아이디어를 만나보세요.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* We might need a custom SearchBar for this theme, but for now, we reuse */}
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSample4;
