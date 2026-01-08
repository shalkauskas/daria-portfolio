import styled from '@emotion/styled';

export const PersonaContainer = styled.div(({ theme }) => ({
  display: 'grid',
  border: `1px solid ${theme.colors.grey1}`,
  gridTemplateRows: 'auto auto',
  borderRadius: '4px',
  maxWidth: theme.utility.pxToRem(1200),
  overflow: 'hidden'
}));

export const PersonaTopRow = styled.div(({ theme }) => ({
  display: 'grid',
  borderBottom: `1px solid #CAD2E1`,
  gridTemplateColumns: '1fr 1fr',
  gap: theme.utility.pxToRem(16),
  padding: `${theme.utility.pxToRem(20)} ${theme.utility.pxToRem(32)} ${theme.utility.pxToRem(16)} ${theme.utility.pxToRem(32)}`,
  background:
    'linear-gradient(135deg, #4F1B93 0%, #8459BC 17%, transparent 15%)',

  '@media (max-width: 1600px)': {
    gridTemplateColumns: '1fr',
    background:
      'linear-gradient(135deg, #4F1B93 0%, #8459BC 160px, transparent 15%)'
  }
}));

export const PersonaBottomRow = styled.div(({ theme }) => ({
  backgroundColor: '#EBEFF6',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'auto auto',
  gap: '1rem',
  padding: `${theme.utility.pxToRem(23)} ${theme.utility.pxToRem(34)}`,

  '& > *:nth-child(1)': {
    gridColumn: 1,
    gridRow: 1
  },
  '& > *:nth-child(2)': {
    gridColumn: 1,
    gridRow: 2
  },
  '& > *:nth-child(3)': {
    gridColumn: 2,
    gridRow: '1 / 3'
  },
  '& > *:nth-child(4)': {
    gridColumn: 3,
    gridRow: '1 / 3'
  },

  '@media (max-width: 1400px)': {
    gridTemplateColumns: '1fr 1fr',
    '& > *:nth-child(1)': {
      gridColumn: 'auto',
      gridRow: 'auto'
    },
    '& > *:nth-child(2)': {
      gridColumn: 'auto',
      gridRow: 'auto'
    },
    '& > *:nth-child(3)': {
      gridColumn: 'auto',
      gridRow: 'auto'
    },
    '& > *:nth-child(4)': {
      gridColumn: 'auto',
      gridRow: 'auto'
    }
  },

  '@media (max-width: 800px)': {
    gridTemplateColumns: '1fr'
  }
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
  fontSize: theme.utility.pxToRem(14),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText
}));

export const PersonaBioGrid = styled.div(() => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: '0.25rem',
  columnGap: '1rem'
}));

export const PersonBioTitle = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(12),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.secondaryText,
  lineHeight: theme.utility.pxToRem(14)
}));

export const PersonBioValue = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(14),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(16)
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
  fontSize: theme.utility.pxToRem(14),
  fontFamily: 'Open Sans, serif',
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(18)
}));

export const PersonaListItemText = styled.li(({ theme }) => ({
  fontSize: theme.utility.pxToRem(14),
  fontFamily: '"Open Sans", serif',
  color: theme.colors.primaryText,
  lineHeight: theme.utility.pxToRem(18),
  margin: theme.utility.pxToRem(3)
}));

export const PersonaListItemTitle = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(14),
  fontFamily: 'Open Sans, serif',
  fontWeight: 600,
  color: theme.colors.primaryText,
  marginLeft: '0.25rem'
}));
