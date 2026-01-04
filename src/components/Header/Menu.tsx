import { sections } from '@/pages/Main/constants';
import { Tab } from '../Tab/Tab';
import { Backdrop, HeaderTitle, MenuContainer, MenuHeader } from './styles';
import { ValueOf } from '@/models';
import { Stack } from '../styledComponents';
import { Logo } from '../Logo/Logo';
import { IconButton } from '../IconButton/IconButton';
import closeIcon from './close.svg';
export function Menu({
  activeSection,
  onClose
}: {
  activeSection: ValueOf<typeof sections>;
  onClose: () => void;
}) {
  return (
    <Stack>
      <MenuContainer>
        <Stack direction="column" gap="2rem">
          <MenuHeader>
            <Stack direction="row" gap="0.5rem" alignItems="center">
              <Logo
                css={(theme) => ({
                  color: theme.colors.white
                })}
              />
              <HeaderTitle css={(t) => ({ color: t.colors.white })}>
                Daria Khuidakova
              </HeaderTitle>
            </Stack>
            <IconButton icon={closeIcon} onClick={onClose} />
          </MenuHeader>

          <Tab isActive={activeSection === sections.INTRO}>
            <a href="#">Home</a>
          </Tab>
          <Tab isActive={activeSection === sections.WORK}>
            <a href="#work">My Work</a>
          </Tab>
          <Tab isActive={activeSection === sections.ABOUT}>
            <a href="#aboutMe">About Me</a>
          </Tab>
        </Stack>
      </MenuContainer>
      <Backdrop onClick={onClose} />
    </Stack>
  );
}
