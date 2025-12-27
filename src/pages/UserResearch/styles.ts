import styled from '@emotion/styled';

export const BorderBox = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: theme.utility.pxToRem(8),
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.05), 0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.1)`,
  overflow: 'hidden',
  margin: '0 auto',
  maxWidth: theme.utility.pxToRem(1000)
}));

export const BorderBoxContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.utility.pxToRem(20),
  padding: theme.utility.pxToRem(24)
}));

export const SurveyBorderBox = styled.div(({ theme }) => ({
  backgroundColor: '#F0EFF4',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: theme.utility.pxToRem(8),
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.05), 0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.1)`,
  overflow: 'hidden',
  padding: theme.utility.pxToRem(24),
  textAlign: 'center'
}));

export const SurveyBorderBoxContent = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.utility.pxToRem(24),
  marginTop: theme.utility.pxToRem(24)
}));
