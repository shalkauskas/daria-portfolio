import { HeaderContainer, HeaderNav, HeaderTitle, NavContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Daria Khuidakova</HeaderTitle>
      <NavContainer>
        <HeaderNav>Home</HeaderNav>
        <HeaderNav>My Work</HeaderNav>
        <HeaderNav>About Me</HeaderNav>
      </NavContainer>
    </HeaderContainer>
  );
}
