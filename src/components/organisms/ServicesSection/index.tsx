import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
