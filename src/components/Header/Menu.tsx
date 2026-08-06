import { sections } from '@/pages/Main/constants';
import { Tab } from '../Tab/Tab';
import {
  Backdrop,
  DrawerWrapper,
  HeaderTitle,
  MenuContainer,
  MenuHeader
} from './styles';
import { ValueOf } from '@/models';
import { Stack } from '../styledComponents';
import { IconButton } from '../IconButton/IconButton';
import closeIcon from './close.svg';
import { Image } from '../Image';
import logowhite from '@/components/Header/logowhite.svg';

export function Menu({
  activeSection,
  onClose,
  isOpen
}: {
  activeSection: ValueOf<typeof sections>;
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <DrawerWrapper isOpen={isOpen}>
      <MenuContainer isOpen={isOpen}>
        <Stack direction="column" gap="2rem">
          <MenuHeader>
            <Stack direction="row" gap="0.5rem" alignItems="center">
              <Image src={logowhite} alt="logo" height="56px" width="56px" />
              <HeaderTitle
                css={(t) => ({
                  color: t.colors.white,
                  fontSize: t.utility.pxToRem(24),
                  textAlign: 'left'
                })}>
                Daria Khuidakova
              </HeaderTitle>
            </Stack>
            <IconButton
              icon={closeIcon}
              onClick={onClose}
              css={{
                height: '32px',
                width: '32px',
                marginBottom: 'auto'
              }}
            />
          </MenuHeader>

          <Tab isActive={activeSection === sections.INTRO} onClick={onClose}>
            <a href="#">Home</a>
          </Tab>
          <Tab isActive={activeSection === sections.WORK} onClick={onClose}>
            <a href="#work">My Work</a>
          </Tab>
          <Tab isActive={activeSection === sections.ABOUT} onClick={onClose}>
            <a href="#aboutMe">About Me</a>
          </Tab>
        </Stack>
      </MenuContainer>
      <Backdrop onClick={onClose} isOpen={isOpen} />
    </DrawerWrapper>
  );
}
