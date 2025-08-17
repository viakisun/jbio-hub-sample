import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample3 = () => {
  return (
    <section style={{
      background: '#ffffff',
      border: '1px solid #dee2e6',
      borderRadius: '16px',
      padding: `${DESIGN_SYSTEM.spacing[16]} ${DESIGN_SYSTEM.spacing[12]}`,
      color: '#000000', // 검은색 텍스트
      textAlign: 'center',
      marginBottom: DESIGN_SYSTEM.spacing[16],
    } as React.CSSProperties}>
      <h1 style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize['6xl'][0],
        fontWeight: DESIGN_SYSTEM.typography.fontWeight.extrabold,
        margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`,
        lineHeight: '1.2',
        letterSpacing: '-0.025em',
        color: '#1d3557' // 전문적인 네이비 블루 색상
      } as React.CSSProperties}>
        데이터로 증명하는 혁신
      </h1>
      <p style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
        margin: `0 auto ${DESIGN_SYSTEM.spacing[10]} auto`,
        opacity: 0.9,
        maxWidth: '760px',
        lineHeight: '1.7',
        color: '#495057' // 차분한 회색 텍스트
      } as React.CSSProperties}>
        JB SQUARE는 데이터 기반의 인사이트를 통해 기업의 성장을 지원합니다.
        <br />
        정확한 정보와 통계로 최적의 비즈니스 결정을 내리세요.
      </p>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSectionSample3;
