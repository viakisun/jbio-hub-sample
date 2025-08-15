import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { text: 'JB BIO 클러스터', path: '/cluster' },
    { text: 'JB 지원사업공고', path: '/announcements' },
    { text: 'JB 창업보육센터', path: '/incubation' },
    { text: '바이오 뉴스/행사', path: '/news-events' },
    { text: 'JB 기업정보', path: '/companies' },
    { text: 'JB 기술/특허', path: '/tech-patents' },
  ];

  const navigation = (
    <nav className="header-nav">
      {navItems.map((item) => (
        <Link to={item.path} key={item.path} className="header-nav-item">
          <Button className="header-nav-button">
            {item.text}
          </Button>
        </Link>
      ))}
    </nav>
  );

  const actions = (
    <div className="header-actions">
      <Button className="notification-button">
        <Icon name="notification" size={20} color={DESIGN_SYSTEM.colors.gray[600]} />
        <div className="notification-dot" />
      </Button>

      <div className="user-menu">
        <Icon name="user" size={18} color={DESIGN_SYSTEM.colors.gray[600]} />
        <span className="user-name">
          김바이오
        </span>
        <Icon name="chevronDown" size={16} color={DESIGN_SYSTEM.colors.gray[500]} />
      </div>
    </div>
  );

  return (
    <header className="main-header">
      <div className="header-container">
        {/* 로고 */}
        <Link to="/" className="logo-link">
          <div className="logo">
            <Icon name="logo" size={40} />
            <div className="logo-text">
              <div className="logo-title">
                JB SQUARE
              </div>
              <div className="logo-subtitle">
                Jeonbuk's Business QUARTER
              </div>
            </div>
          </div>
        </Link>

        {/* 데스크탑 네비게이션 & 액션 */}
        <div className="desktop-nav-actions">
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
