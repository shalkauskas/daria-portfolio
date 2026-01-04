import styled from '@emotion/styled';
import { IconButton } from '../IconButton/IconButton';

export const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  background: theme.colors.white,
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(10)} 0 ${theme.colors.purple1}`,
  justifyContent: 'space-between',
  padding: '0.75rem 2rem 0.75rem 2rem',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  '@media (max-width: 1024px)': {
    padding: theme.utility.pxToRem(12) + ' ' + theme.utility.pxToRem(16)
  }
}));

export const HeaderTitle = styled.h3(({ theme }) => ({
  color: theme.colors.purple4,
  fontFamily: '"Agbalumo", serif;',
  fontSize: '2rem',
  lineHeight: '2rem'
}));

export const NavContainer = styled.div(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  '@media (max-width: 1024px)': {
    display: 'none'
  }
}));

export const LogoContainer = styled.div(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.75rem'
}));

export const MenuIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  '@media (max-width: 1024px)': {
    display: 'block'
  },

  '& > div': {
    height: theme.utility.pxToRem(32)
  }
}));

export const DrawerWrapper = styled.div<{ isOpen?: boolean }>(({ isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 20,
  display: 'flex',
  pointerEvents: isOpen ? 'auto' : 'none'
}));

export const MenuContainer = styled.div<{ isOpen?: boolean }>(
  ({ theme, isOpen }) => ({
    width: '80vw',
    height: '100%',
    background: theme.colors.primary,
    textAlign: 'center',
    overflowY: 'auto',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.2s ease-in-out',

    a: {
      color: theme.colors.white,

      '&:hover': {
        color: theme.colors.white,
        opacity: 0.8
      }
    }
  })
);

export const MenuHeader = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
  padding: theme.utility.pxToRem(32)
}));

export const Backdrop = styled.div<{ isOpen?: boolean }>(({ isOpen }) => ({
  flex: 1,
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  opacity: isOpen ? 1 : 0,
  transition: isOpen ? 'opacity 0.2s ease-in-out' : 'none',
  transitionDelay: isOpen ? '0.2s' : '0s' // Delay appearance until slide finishes
}));
