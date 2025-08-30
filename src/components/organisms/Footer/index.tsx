import React from 'react';
import Icon from '../../atoms/Icon';
import packageJson from '../../../../package.json'; // Import version

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top-section">
          <div className="footer__logo-container">
            <Icon name="logo" size={32} />
            <div className="footer__logo-title">JB SQUARE</div>
          </div>
          <div className="footer__social-links">
            {/* Add social links here if needed in the future */}
          </div>
        </div>
        <div className="footer__bottom-bar">
          <div className="footer__copyright">
            <span>© 2024 JBTP. All rights reserved.</span>
            <span className="footer__version">v{packageJson.version}</span>
          </div>
          <div className="footer__legal-links">
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
