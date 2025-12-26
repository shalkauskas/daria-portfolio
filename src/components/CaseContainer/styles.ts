import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  padding: theme.utility.pxToRem(24),
  paddingBottom: theme.utility.pxToRem(100),
  overflow: 'auto',
  width: '100%'
}));

export const ContentWrapper = styled.div(({ theme }) => ({
  maxWidth: theme.utility.pxToRem(1200),
  margin: '0 auto'
}));
