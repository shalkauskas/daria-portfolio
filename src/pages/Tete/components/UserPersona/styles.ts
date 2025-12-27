import styled from '@emotion/styled';

export const PersonaCard = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: '4px',
  gap: '1rem',
  padding: '1.5rem'
}));

export const PersonaContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '4px',
  width: '100%',
  maxWidth: theme.utility.pxToRem(1200)
}));

export const PersonaGrid = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  padding: '1.5rem',

  '@media (max-width: 850px)': {
    gridTemplateColumns: '1fr'
  }
}));

export const PersonaFooter = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.colors.purple3,
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem'
}));

export const Row = styled.div(() => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '2fr 3fr'
}));

export const PersonaWrapper = styled.div(({ theme }) => ({
  gap: '2rem',
  flexDirection: 'column',
  alignItems: 'center'
}));
