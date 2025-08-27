import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { text: 'JB BIO 클러스터', path: '/cluster' },
    { text: 'JB 지원사업공고', path: '/announcements' },
    { text: 'JB 창업보육센터', path: '/incubation' },
    { text: '바이오 뉴스/행사', path: '/news' },
    { text: 'JB 기업정보', path: '/companies' },
    { text: 'JB 기술/특허', path: '/tech/patents' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <div className="header__logo">
            <Icon name="logo" size={40} />
            <div className="desktop-only">
              <div className="header__logo-title">JB SQUARE</div>
              <div className="header__logo-subtitle">Jeonbuk's Business QUARTER</div>
            </div>
          </div>
        </Link>

        <div className="header__search">
          <div className="header__search-wrapper">
            <div style={{ paddingLeft: '12px', display: 'flex', alignItems: 'center' }}>
              <Icon name="search" size={18} />
            </div>
            <input
              type="text"
              placeholder="기업, 기술, 공고를 AI 검색..."
              className="header__search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="header__search-button">
              <Icon name="zap" size={14} color="white" />
              <span>검색</span>
            </button>
          </div>
        </div>

        <div className="header__actions">
          <div className="mobile-only">
            <button className="header__mobile-menu-button">
              <Icon name="search" size={20} />
            </button>
            <button className="header__mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name="menu" size={20} />
            </button>
          </div>
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="header__notification-button">
              <Icon name="notification" size={20} />
              <div className="header__notification-dot" />
            </button>
            <button className="header__user-menu">
              <Icon name="user" size={18} />
              <span className="header__user-name">TP</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header__nav-container">
        <div className="header__nav-inner">
          <nav className="header__nav">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="header__nav-link">
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__nav">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
