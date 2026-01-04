import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ $index: number }>(
  ({ theme, $index }) => ({
    flexDirection: $index % 2 ? 'row-reverse' : 'row',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey1}`,
    borderRadius: '1rem',
    boxShadow: `0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.05), 0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.1)`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: theme.utility.pxToRem(400),
    maxWidth: theme.utility.pxToRem(1280),
    overflow: 'hidden',

    '@media (max-width: 1324px)': {
      gridTemplateColumns: '1fr',
      height: '100%'
    }
  })
);

export const InfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',
  padding: '2rem'
});

export const Title = styled.h5({
  fontSize: '1.625rem',
  lineHeight: '2.25rem',
  fontWeight: 700
});
