import styled from '@emotion/styled';

const button = {
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  borderRadius: '0.5rem',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  padding: '0.75rem 1.25rem'
};

export const ButtonContainer = styled.div({});

export const PrimaryButton = styled.button(({ theme }) => ({
  ...button,
  backgroundColor: theme.colors.primary,
  color: theme.colors.white
}));

export const SecondaryButton = styled.button(({ theme }) => ({
  ...button,
  backgroundColor: 'transparent',
  color: theme.colors.primary,
  borderColor: theme.colors.primary,
  border: `1px solid ${theme.colors.primary}`
}));
