import styled from '@emotion/styled';

const button = {
  borderRadius: '0.5rem',
  display: 'flex',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  padding: '0.75rem 1.25rem'
};

export const ButtonContainer = styled.div({});

export const SecondaryButton = styled.button(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.colors.purpleButton,
  borderColor: theme.colors.purpleButton,
  ...button
}));
