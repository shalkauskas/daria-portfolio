import { Logo } from '../Logo/Logo';
import { HeaderContainer, HeaderNav, HeaderTitle, LogoContainer, NavContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <HeaderTitle>Daria Khuidakova</HeaderTitle>
      </LogoContainer>
      <NavContainer>
        <HeaderNav>
          <a href="#intro">Home</a>
        </HeaderNav>
        <HeaderNav>
          <a href="#work">My Work</a>
        </HeaderNav>
        <HeaderNav>
          <a href="#aboutMe">About Me</a>
        </HeaderNav>
      </NavContainer>
    </HeaderContainer>
  );
}
