import styled from '@emotion/styled';

export const PersonaContainer = styled.div(({ theme }) => ({
  display: 'grid',
  border: `1px solid ${theme.colors.grey1}`,
  gridTemplateRows: '1fr 1.8fr',
  borderRadius: '4px',
  maxWidth: theme.utility.pxToRem(1200)
}));

export const PersonaTopRow = styled.div(({ theme }) => ({
  display: 'grid',
  borderBottom: `1px solid #CAD2E1`,
  gridTemplateColumns: '1fr 1fr',
  gap: '0.5rem',
  padding: `${theme.utility.pxToRem(20)} ${theme.utility.pxToRem(32)} ${theme.utility.pxToRem(16)} ${theme.utility.pxToRem(32)}`
}));

export const PersonaBottomRow = styled.div(({ theme }) => ({
  backgroundColor: '#EBEFF6',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem',
  padding: `${theme.utility.pxToRem(23)} ${theme.utility.pxToRem(34)}`
}));

export const PersonaBottomRowItem = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: theme.utility.pxToRem(4),
  padding: theme.utility.pxToRem(14),
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
}));

export const PersonaBottomRowItemTitle = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(11),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText
}));

export const PersonaBioGrid = styled.div(() => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.25rem'
}));

export const PersonBioTitle = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(11),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.secondaryText,
  lineHeight: theme.utility.pxToRem(12)
}));

export const PersonBioValue = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(11),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(12)
}));

export const PersonScenarioBox = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  backgroundColor: theme.colors.purple3,
  borderRadius: theme.utility.pxToRem(4),
  padding: theme.utility.pxToRem(14)
}));

export const PersonaScenarioText = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(12),
  fontFamily: 'Open Sans, serif',
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(18)
}));

export const PersonaListItemText = styled.li(({ theme }) => ({
  fontSize: theme.utility.pxToRem(12),
  fontFamily: '"Open Sans", serif',
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(18),
  margin: theme.utility.pxToRem(3)
}));

export const PersonaListItemTitle = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(13),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText,
  marginLeft: '0.25rem'
}));
