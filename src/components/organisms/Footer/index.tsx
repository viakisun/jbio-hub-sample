import React from 'react';
import Icon from '../../atoms/Icon';
import packageJson from '../../../../package.json';

const Footer = () => {
  const navLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: 'twitter', href: '#' },
    { icon: 'facebook', href: '#' },
    { icon: 'instagram', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo-area">
            <Icon name="logo" size={48} />
            <span className="footer__logo-text">JB SQUARE</span>
          </div>
          <div className="footer__socials">
            {socialLinks.map((link) => (
              <a key={link.icon} href={link.href} className="footer__social-link">
                <Icon name={link.icon} size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} JBTP. All rights reserved.
            <span className="footer__version">v{packageJson.version}</span>
          </div>
          <nav className="footer__nav">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="footer__nav-link">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
