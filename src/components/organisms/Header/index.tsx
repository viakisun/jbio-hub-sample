import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { text: 'Cluster', path: '/cluster' },
    { text: 'Announcements', path: '/announcements' },
    { text: 'Incubation', path: '/incubation' },
    { text: 'News', path: '/news' },
    { text: 'Companies', path: '/companies' },
    { text: 'Tech', path: '/tech/patents' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <Icon name="logo" size={40} />
          <span className="header__logo-text">JB SQUARE</span>
        </Link>

        <nav className={clsx('header__nav', { 'is-open': isMenuOpen })}>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="header__nav-link">
              {item.text}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button variant="primary">Login</Button>
          {isMobile && (
            <button className="header__menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? 'close' : 'menu'} size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
