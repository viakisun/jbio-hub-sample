import React from 'react';
import '../../../styles/main.scss';

interface BoldMainLayoutProps {
  children: React.ReactNode;
}

const BoldMainLayout: React.FC<BoldMainLayoutProps> = ({ children }) => {
  return (
    <div className="bold-layout">
      <header className="header">
        <div className="container">
          <nav className="nav">
            {/* TODO: Add navigation items */}
            <a href="/" className="nav__logo">JB SQUARE</a>
            <div className="nav__links">
              <a href="/cluster">Cluster</a>
              <a href="/announcements">Announcements</a>
              <a href="/incubation">Incubation</a>
              <a href="/news">News & Events</a>
              <a href="/tech">Tech & Patents</a>
              <a href="/company">Company</a>
            </div>
            <div className="nav__actions">
              <button className="btn btn--secondary">Log in</button>
              <button className="btn btn--primary">Sign up</button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__meta">
            <p>© 2024 JB SQUARE. All rights reserved.</p>
            <p>A bold new look for a brighter future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BoldMainLayout;
