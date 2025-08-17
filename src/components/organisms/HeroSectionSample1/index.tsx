import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import SearchBar from '../../molecules/SearchBar';

const HeroSectionSample1 = () => {
  return (
    <section style={{
      background: '#f8f9fa', // 아주 연한 회색 배경
      borderRadius: '24px',
      padding: `${DESIGN_SYSTEM.spacing[24]} ${DESIGN_SYSTEM.spacing[12]}`, // 세로 여백 증가
      color: '#212529', // 어두운 텍스트 색상
      textAlign: 'center',
      marginBottom: DESIGN_SYSTEM.spacing[16],
    } as React.CSSProperties}>
      <h1 style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize['5xl'][0], // 폰트 크기 약간 줄임
        fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold, // 폰트 두께 감소
        margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`,
        lineHeight: '1.2',
        letterSpacing: '-0.02em'
      } as React.CSSProperties}>
        JBSQUARE.
      </h1>
      <p style={{
        fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0], // 폰트 크기 약간 줄임
        margin: `0 0 ${DESIGN_SYSTEM.spacing[10]} 0`,
        opacity: 0.8,
        maxWidth: '680px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '1.7'
      } as React.CSSProperties}>
        전북의 미래를 함께 만드는 혁신 공간.
        <br />
        핵심 정보와 기회를 간결하게 전달합니다.
      </p>
      <SearchBar />
    </section>
  );
};

export default HeroSectionSample1;
