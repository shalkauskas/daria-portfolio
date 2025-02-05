import { sections } from '@/pages/Main/constants';
import { Logo } from '../Logo/Logo';
import { HeaderContainer, HeaderNav, HeaderTitle, LogoContainer, NavContainer } from './styles';
import { ValueOf } from '@/models';

export function Header({ activeSection }: { activeSection: ValueOf<typeof sections> }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <HeaderTitle>Daria Khuidakova</HeaderTitle>
      </LogoContainer>
      <NavContainer>
        <HeaderNav isActive={activeSection === sections.INTRO}>
          <a href="#">Home</a>
        </HeaderNav>
        <HeaderNav isActive={activeSection === sections.WORK}>
          <a href="#work">My Work</a>
        </HeaderNav>
        <HeaderNav isActive={activeSection === sections.ABOUT}>
          <a href="#aboutMe">About Me</a>
        </HeaderNav>
      </NavContainer>
    </HeaderContainer>
  );
}
