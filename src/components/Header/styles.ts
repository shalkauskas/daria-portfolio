import styled from '@emotion/styled';

export const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  background: theme.colors.white,
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(10)} 0 ${theme.colors.purple1}`,
  justifyContent: 'space-between',
  padding: '0.75rem 2rem 0.75rem 2rem',
  position: 'sticky',
  top: 0,
  zIndex: 10
}));

export const HeaderTitle = styled.h3(({ theme }) => ({
  color: theme.colors.purple4,
  fontFamily: '"Agbalumo", serif;',
  fontSize: '2rem',
  lineHeight: '2rem'
}));

export const HeaderNav = styled.nav<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: theme.colors.primaryText,
  fontFamily: '"Lato", serif;',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
  fontWeight: 600,

  a: {
    color: isActive ? theme.colors.primary : 'inherit',
    textDecoration: isActive ? 'underline' : 'none',
    textDecorationThickness: '0.25rem',
    textUnderlineOffset: '0.4rem'
  }
}));

export const NavContainer = styled.div(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem'
}));

export const LogoContainer = styled.div(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.75rem'
}));
