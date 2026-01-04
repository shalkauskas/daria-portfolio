import styled from '@emotion/styled';

export const TabContainer = styled.span<{ $isActive?: boolean }>(
  ({ theme, $isActive }) => ({
    color: theme.colors.primaryText,
    fontFamily: '"Lato", serif;',
    lineHeight: '1.5rem',
    fontWeight: 600,

    '> a': {
      color: $isActive ? theme.colors.primary : 'inherit',
      cursor: 'pointer',
      textDecoration: $isActive ? 'underline' : 'none',
      textDecorationThickness: '0.25rem',
      textUnderlineOffset: '0.4rem',

      '&:hover': {
        color: theme.colors.primaryButtonHover
      }
    }
  })
);
