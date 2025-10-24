import styled from '@emotion/styled';

export const ActivityGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: '2fr 3fr',
  maxWidth: theme.utility.pxToRem(1200)
}));

export const ActivityBoxSmall = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.purple2,
  padding: '1rem'
}));

export const ActivityBoxBig = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.purple3,
  padding: '1rem'
}));
