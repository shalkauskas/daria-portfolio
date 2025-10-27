import { sections } from '@/pages/Main/constants';
import { Logo, Tab } from '@/components';
import {
  HeaderContainer,
  HeaderTitle,
  LogoContainer,
  NavContainer
} from './styles';
import { ValueOf } from '@/models';
import PageHeader from './PageHeader';

export function Header({
  activeSection
}: {
  activeSection: ValueOf<typeof sections>;
}) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
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
  );
}
Header.Feature = PageHeader;
