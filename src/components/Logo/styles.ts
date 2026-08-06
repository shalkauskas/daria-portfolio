import styled from '@emotion/styled';

export const LogoContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: theme.utility.pxToRem(48),
  width: theme.utility.pxToRem(48)
}));
