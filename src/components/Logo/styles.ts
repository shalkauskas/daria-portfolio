import styled from '@emotion/styled';

export const LogoContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  color: theme.colors.purple4,
  display: 'flex',
  justifyContent: 'center',
  height: theme.utility.pxToRem(48),
  width: theme.utility.pxToRem(48),
  borderRadius: '100%',
  border: `${theme.utility.pxToRem(3)} solid currentColor`
}));

export const LogoText = styled.span(({ theme }) => ({
  display: 'flex',
  fontFamily: '"Agbalumo", serif;',
  fontSize: '1.5rem',
  transform: 'rotate(90deg)',
  marginLeft: '0.25rem'
}));
