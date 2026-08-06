import { sections } from '@/pages/Main/constants';
import { Logo, Tab } from '@/components';
import {
  HeaderContainer,
  HeaderTitle,
  LogoContainer,
  MenuIcon,
  NavContainer
} from './styles';
import { ValueOf } from '@/models';
import PageHeader from './PageHeader';
import menuicon from './menuicon.svg';
import { useState } from 'react';
import { Menu } from './Menu';
export function Header({
  activeSection
}: {
  activeSection: ValueOf<typeof sections>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menu
        activeSection={activeSection}
        onClose={() => setIsMenuOpen(false)}
        isOpen={isMenuOpen}
      />
      <HeaderContainer>
        <LogoContainer>
          <Logo
            css={{
              '@media (max-width: 1024px)': {
                display: 'none'
              }
            }}
          />
          <MenuIcon
            icon={menuicon}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <HeaderTitle>Daria Khuidakova</HeaderTitle>
        </LogoContainer>
        <NavContainer>
          <Tab isActive={activeSection === sections.INTRO}>
            <a href="#">Home</a>
          </Tab>
          <Tab isActive={activeSection === sections.WORK}>
            <a href="#work">My Work</a>
          </Tab>
          <Tab isActive={activeSection === sections.ABOUT}>
            <a href="#aboutMe">About Me</a>
          </Tab>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
Header.Feature = PageHeader;
