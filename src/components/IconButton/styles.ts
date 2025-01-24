import styled from '@emotion/styled';

export const ButtonWrapper = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: '100%',
  cursor: 'pointer',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  border: 0,
  height: theme.utility.pxToRem(56),
  width: theme.utility.pxToRem(56),
  padding: '1rem'
}));
