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
        <HeaderNav>Home</HeaderNav>
        <HeaderNav>My Work</HeaderNav>
        <HeaderNav>About Me</HeaderNav>
      </NavContainer>
    </HeaderContainer>
  );
}
