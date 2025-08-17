import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${DESIGN_SYSTEM.colors.gray[200]};
`;

const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${DESIGN_SYSTEM.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.md};
`;

const LogoTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  background: ${DESIGN_SYSTEM.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LogoSubtitle = styled.div`
  font-size: 10px;
  color: ${DESIGN_SYSTEM.colors.gray[500]};
  font-weight: 500;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 ${DESIGN_SYSTEM.spacing.xl};
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${DESIGN_SYSTEM.colors.gray[50]};
  border-radius: 12px;
  border: 2px solid ${DESIGN_SYSTEM.colors.gray[200]};
  transition: all 0.3s ease;
  &:focus-within {
    border-color: ${DESIGN_SYSTEM.colors.primary[300]};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${DESIGN_SYSTEM.spacing.md} 0;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: transparent;
  color: ${DESIGN_SYSTEM.colors.gray[900]};
  font-weight: 500;
`;

const SearchButton = styled.button`
  background: ${DESIGN_SYSTEM.gradients.primary};
  color: white;
  border: none;
  padding: ${DESIGN_SYSTEM.spacing.sm} ${DESIGN_SYSTEM.spacing.md};
  margin: 4px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.xs};
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
`;

const NavContainer = styled.div`
  border-top: 1px solid ${DESIGN_SYSTEM.colors.gray[100]};
  background: rgba(255, 255, 255, 0.98);
`;

const NavInnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${DESIGN_SYSTEM.spacing.lg};
  display: flex;
  align-items: center;
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${DESIGN_SYSTEM.spacing.xl};
`;

const NavButton = styled(NavLink)`
  text-decoration: none;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${DESIGN_SYSTEM.colors.gray[700]};
  cursor: pointer;
  padding: ${DESIGN_SYSTEM.spacing.sm} ${DESIGN_SYSTEM.spacing.md};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: ${DESIGN_SYSTEM.colors.gray[100]};
    color: ${DESIGN_SYSTEM.colors.gray[900]};
  }

  &.active {
    font-weight: 700;
    color: ${DESIGN_SYSTEM.colors.purple[600]};
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: ${DESIGN_SYSTEM.spacing.md};
      right: ${DESIGN_SYSTEM.spacing.md};
      height: 2px;
      background-color: ${DESIGN_SYSTEM.colors.purple[600]};
      border-radius: 2px;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${DESIGN_SYSTEM.colors.gray[100]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${DESIGN_SYSTEM.colors.gray[200]};
  padding: ${DESIGN_SYSTEM.spacing.lg};
`;

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: ${DESIGN_SYSTEM.spacing.sm};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${DESIGN_SYSTEM.colors.gray[100]};
  }
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: ${DESIGN_SYSTEM.colors.orange[500]};
  border-radius: 50%;
`;

const UserMenu = styled.button`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.spacing.sm};
  padding: ${DESIGN_SYSTEM.spacing.sm} ${DESIGN_SYSTEM.spacing.md};
  background: ${DESIGN_SYSTEM.colors.gray[100]};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: ${DESIGN_SYSTEM.colors.gray[200]};
  }
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${DESIGN_SYSTEM.colors.gray[700]};
`;

// --- COMPONENT ---

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { text: 'JB BIO 클러스터', path: '/cluster' },
    { text: 'JB 지원사업공고', path: '/announcements' },
    { text: 'JB 창업보육센터', path: '/incubation' },
    { text: '바이오 뉴스/행사', path: '/news' },
    { text: 'JB 기업정보', path: '/companies' },
    { text: 'JB 기술/특허', path: '/tech-patents' },
  ];
  const trendingTags = ['AI신약', 'K뷰티', '스마트팜'];

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoLink to="/">
          <LogoContainer>
            <Icon name="logo" size={40} />
            {!isMobile && (
              <div>
                <LogoTitle>JB SQUARE</LogoTitle>
                <LogoSubtitle>Jeonbuk's Business QUARTER</LogoSubtitle>
              </div>
            )}
          </LogoContainer>
        </LogoLink>

        {!isMobile && (
          <SearchContainer>
            <SearchInputWrapper>
              <div style={{ padding: `0 ${DESIGN_SYSTEM.spacing.md}` }}>
                <Icon name="search" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
              </div>
              <SearchInput
                type="text"
                placeholder="기업, 기술, 공고를 AI 검색..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SearchButton>
                <Icon name="zap" size={14} color="white" />
                검색
              </SearchButton>
            </SearchInputWrapper>
          </SearchContainer>
        )}

        <ActionsContainer>
          {isMobile ? (
            <>
              <MobileMenuButton>
                <Icon name="search" size={20} color={DESIGN_SYSTEM.colors.gray[700]} />
              </MobileMenuButton>
              <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Icon name="menu" size={20} color={DESIGN_SYSTEM.colors.gray[700]} />
              </MobileMenuButton>
            </>
          ) : (
            <>
              <NotificationButton>
                <Icon name="notification" size={20} color={DESIGN_SYSTEM.colors.gray[600]} />
                <NotificationDot />
              </NotificationButton>
              <UserMenu>
                <Icon name="user" size={18} color={DESIGN_SYSTEM.colors.gray[600]} />
                <UserName>TP</UserName>
              </UserMenu>
            </>
          )}
        </ActionsContainer>
      </HeaderContainer>

      {!isMobile && (
        <NavContainer>
          <NavInnerContainer>
            <Nav>
              {navItems.map((item) => <NavButton key={item.path} to={item.path}>{item.text}</NavButton>)}
            </Nav>
            {/* Trending tags can be added here */}
          </NavInnerContainer>
        </NavContainer>
      )}

      {isMobile && isMenuOpen && (
        <MobileMenu>
          <Nav style={{ flexDirection: 'column', gap: DESIGN_SYSTEM.spacing.md }}>
            {navItems.map((item) => <NavButton key={item.path} to={item.path} style={{ textAlign: 'left', padding: DESIGN_SYSTEM.spacing.md }} onClick={() => setIsMenuOpen(false)}>{item.text}</NavButton>)}
          </Nav>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
