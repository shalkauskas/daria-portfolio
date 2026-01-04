import styled from '@emotion/styled';

export const BorderBox = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: theme.utility.pxToRem(8),
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.05), 0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.1)`,
  overflow: 'hidden',
  margin: '0 auto',
  maxWidth: theme.utility.pxToRem(1000),

  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr'
  }
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
  marginTop: theme.utility.pxToRem(24),
  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr'
  }
}));

export const QuantitativeDataContainer = styled.div({
  position: 'relative',
  height: '460px',

  '@media (max-width: 1400px)': {
    height: '600px'
  },

  '@media (max-width: 650px)': {
    height: '800px'
  },

  '& > div': {
    position: 'absolute',

    '&:first-of-type': {
      top: 0,
      left: 0,

      '@media (max-width: 1400px)': {
        top: 0,
        left: '20%'
      },
      '@media (max-width: 650px)': {
        top: 0,
        left: 0
      }
    },
    '&:nth-of-type(2)': {
      top: '30%',
      left: '30%',

      '@media (max-width: 1400px)': {
        top: '20%',
        left: '40%'
      },
      '@media (max-width: 650px)': {
        top: '30%',
        left: '10%'
      }
    },
    '&:last-of-type': {
      top: 0,
      right: 0,

      '@media (max-width: 1400px)': {
        top: '40%',
        right: '40%'
      },
      '@media (max-width: 650px)': {
        top: '50%',
        right: 0
      }
    }
  }
});
