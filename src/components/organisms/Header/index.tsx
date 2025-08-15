import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

// Styled Components
const HeaderWrapper = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e7eb; /* gray-200 */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); /* shadow-sm */
  position: sticky;
  top: 0;
  z-index: 50;
`;

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem; /* spacing-6 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.75rem; /* spacing-3 */
`;

const LogoTextContainer = styled.div``;

const LogoTitle = styled.div`
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* bold */
  color: #111827; /* gray-900 */
  line-height: 1.75rem;
`;

const LogoSubtitle = styled.div`
  font-size: 0.75rem; /* text-xs */
  color: #6b7280; /* gray-500 */
  font-weight: 500; /* medium */
`;

const DesktopNavActions = styled.div`
  display: none;
  align-items: center;
  gap: 2rem; /* spacing-8 */

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem; /* spacing-6 */
`;

const NavItemLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

  &.active {
    .header-nav-button {
      font-weight: 600; /* semibold */
      color: #4f46e5; /* primary-600 */
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0.75rem;
      right: 0.75rem;
      height: 2px;
      background-color: #4f46e5; /* primary-600 */
      border-radius: 2px;
    }
  }

  &:hover .header-nav-button {
    color: #4f46e5; /* primary-600 */
    background-color: #eef2ff; /* primary-50 */
  }
`;

const NavButton = styled(Button)`
  background: none;
  border: none;
  font-size: 1rem; /* text-base */
  font-weight: 500; /* medium */
  color: #374151; /* gray-700 */
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* spacing-4 */
`;

const NotificationButton = styled(Button)`
  position: relative;
  background: none;
  border: none;
  padding: 0.5rem; /* spacing-2 */
  border-radius: 8px;
  cursor: pointer;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: #f97316; /* orange-500 */
  border-radius: 50%;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* spacing-3 */
  padding: 0.5rem 1rem; /* spacing-2 spacing-4 */
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 12px;
  cursor: pointer;
`;

const UserName = styled.span`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* medium */
  color: #374151; /* gray-700 */
`;

const HamburgerMenu = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 80px; /* height of the header */
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid #e2e8f0;

  ${Nav} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  ${ActionsContainer} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
    margin-top: 1rem;
  }

  ${UserMenu} {
    width: 100%;
  }
`;


// Header Component
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
    <Nav>
      {navItems.map((item) => (
        <NavItemLink to={item.path} key={item.path}>
          <NavButton className="header-nav-button">{item.text}</NavButton>
        </NavItemLink>
      ))}
    </Nav>
  );

  const actions = (
    <ActionsContainer>
      <NotificationButton>
        <Icon name="notification" size={20} color={DESIGN_SYSTEM.colors.gray[600]} />
        <NotificationDot />
      </NotificationButton>

      <UserMenu>
        <Icon name="user" size={18} color={DESIGN_SYSTEM.colors.gray[600]} />
        <UserName>김바이오</UserName>
        <Icon name="chevronDown" size={16} color={DESIGN_SYSTEM.colors.gray[500]} />
      </UserMenu>
    </ActionsContainer>
  );

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoLink to="/">
          <Icon name="logo" size={40} />
          <LogoTextContainer>
            <LogoTitle>JB SQUARE</LogoTitle>
            <LogoSubtitle>Jeonbuk's Business QUARTER</LogoSubtitle>
          </LogoTextContainer>
        </LogoLink>

        <DesktopNavActions>
          {navigation}
          {actions}
        </DesktopNavActions>

        <HamburgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} color={DESIGN_SYSTEM.colors.gray[800]} />
        </HamburgerMenu>
      </HeaderContainer>

      {isMobileMenuOpen && (
        <MobileMenu>
          {navigation}
          {actions}
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
