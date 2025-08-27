import React from 'react';
import Icon from '../../atoms/Icon';
import packageJson from '../../../../package.json'; // Import version

const Footer = () => {
  const platformLinks = ['AI R&D Hub', 'Smart Incubator', 'Bio Intelligence', 'Innovation Lab', 'Global Connect', 'Tech Transfer'];
  const fieldLinks = ['AI Drug Discovery', 'Precision Medicine', 'K-Beauty', 'Smart Farm', 'Regenerative Medicine', 'Bioenergy'];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__info">
            <div className="footer__logo-container">
              <Icon name="logo" size={48} />
              <div>
                <div className="footer__logo-title">JB SQUARE</div>
                <div style={{ fontSize: '12px' }}>The Industry & Research Hub</div>
              </div>
            </div>
            <p style={{ lineHeight: '1.6', maxWidth: '400px' }}>
              A premier innovation platform, designing the future of industry with AI and Big Data technology.
            </p>
            <div style={{ lineHeight: '1.5' }}>
              📞 +82-63-219-3000<br />
              ✉️ contact@jbsquare.io<br />
              📍 255, Cheomdan-ro, Deokjin-gu, Jeonju-si, Jeollabuk-do, Korea
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__section-title">Platform Services</h4>
            <ul className="footer__link-list">
              {platformLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link-item">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__section-title">Industry Fields</h4>
            <ul className="footer__link-list">
              {fieldLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link-item">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom-bar">
          <div className="footer__copyright">
            <span>© 2024 JBTP. All rights reserved.</span>
            <span className="footer__version">v{packageJson.version}</span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <a key={item} href="#" className="footer__link-item">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
