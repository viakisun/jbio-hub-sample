import React, { useState } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['공고/사업', '창업보육센터', '기업정보', 'JB기술', '소식/뉴스'];

  const navigation = (
    <nav className="header-nav" style={{ gap: DESIGN_SYSTEM.spacing[8] }}>
      {navItems.map((item, index) => (
        <Button
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
        </Button>
      ))}
    </nav>
  );

  const actions = (
    <div className="header-actions" style={{ alignItems: 'center', gap: DESIGN_SYSTEM.spacing[4] }}>
      <Button style={{
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
      </Button>

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
  );

  return (
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
              JB SQUARE
            </div>
            <div style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
              color: DESIGN_SYSTEM.colors.gray[500],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium
            }}>
              Jeonbuk's Business QUARTER
            </div>
          </div>
        </div>

        {/* 데스크탑 네비게이션 & 액션 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: DESIGN_SYSTEM.spacing[8] }}>
          {navigation}
          {actions}
        </div>

        {/* 햄버거 메뉴 */}
        <button className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} color={DESIGN_SYSTEM.colors.gray[800]} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navigation}
          {actions}
        </div>
      )}
    </header>
  );
};

export default Header;
