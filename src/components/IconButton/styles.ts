import styled from '@emotion/styled';

const baseButton = {
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '100%',
  cursor: 'pointer',
  display: 'flex',
  padding: '0.5rem'
};

export const ButtonBase = styled.button(() => ({ ...baseButton }));

export const ButtonRound = styled.button(({ theme }) => ({
  ...baseButton,
  backgroundColor: theme.colors.white,
  borderRadius: '100%',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  padding: '1rem',
  height: theme.utility.pxToRem(56),
  width: theme.utility.pxToRem(56)
}));
