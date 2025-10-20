import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

const shared = (theme: Theme) => ({
  color: theme.colors.primaryText,
  fontFamily: '"Lato", serif;'
});

export const StyledH1 = styled.h1(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(32),
  fontWeight: 600,
  lineHeight: theme.utility.pxToRem(48)
}));
export const StyledH2 = styled.h2(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(28),
  fontWeight: 700,
  lineHeight: theme.utility.pxToRem(36)
}));
export const StyledH3 = styled.h3(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(24),
  fontWeight: 600,
  lineHeight: theme.utility.pxToRem(36)
}));
export const StyledH4 = styled.h4(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(22),
  fontWeight: 700,
  lineHeight: theme.utility.pxToRem(28)
}));
export const StyledBody18 = styled.p(({ theme }) => ({
  color: theme.colors.primaryText,
  fontFamily: '"Open Sans", serif;',
  fontSize: theme.utility.pxToRem(18),
  fontWeight: 400,
  lineHeight: theme.utility.pxToRem(31)
}));
export const StyledBody16 = styled.p(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(16),
  fontWeight: 400,
  lineHeight: theme.utility.pxToRem(31)
}));
export const Subtitle18 = styled.p(({ theme }) => ({
  ...shared(theme),
  fontSize: theme.utility.pxToRem(18),
  fontWeight: 700,
  lineHeight: theme.utility.pxToRem(27)
}));
