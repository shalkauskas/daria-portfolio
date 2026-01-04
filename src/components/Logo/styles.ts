import styled from '@emotion/styled';

export const LogoContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: theme.utility.pxToRem(48),
  width: theme.utility.pxToRem(48),
  borderRadius: '100%',
  border: `${theme.utility.pxToRem(3)} solid ${theme.colors.purple4}`,
  '@media (max-width: 1024px)': {
    display: 'none'
  }
}));
export const LogoText = styled.span(({ theme }) => ({
  color: theme.colors.purple4,
  display: 'flex',
  fontFamily: '"Agbalumo", serif;',
  fontSize: '1.5rem',
  transform: 'rotate(90deg)',
  marginLeft: '0.25rem'
}));
