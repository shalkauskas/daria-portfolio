import styled from '@emotion/styled';

export const CardWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '1rem',
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.05), 0 0.25rem ${theme.utility.pxToRem(4)} -1px rgba(12, 12, 13, 0.1)`,
  display: 'flex',
  minHeight: theme.utility.pxToRem(400),
  minWidth: theme.utility.pxToRem(1280),
  maxWidth: theme.utility.pxToRem(1280),
  overflow: 'hidden'
}));

export const ImageContainer = styled.div({
  flex: 1,
  padding: '2rem'
});
export const Image = styled.img({
  height: '100%',
  width: '100%'
});

// Images ***
export const ImagesContainer = styled.div({
  position: 'absolute'
});
export const ImagesWrapperContainer = styled.div({
  position: 'relative'
});
// ******

export const InfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',
  padding: '2rem'
});

export const ListItem = styled.li({
  fontSize: '1.25rem',
  lineHeight: '2rem'
});

export const Title = styled.h6({
  fontSize: '1.625rem',
  lineHeight: '2.25rem',
  fontWeight: 700
});
