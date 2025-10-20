import styled from '@emotion/styled';

export const FlexContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.utility.pxToRem(24),
  marginBottom: '2rem'
}));
