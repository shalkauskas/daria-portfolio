import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.utility.pxToRem(88),
  paddingBottom: theme.utility.pxToRem(250),
  paddingTop: theme.utility.pxToRem(200),
  margin: 'auto',
  maxWidth: theme.utility.pxToRem(1280)
}));
export const TextContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  margin: 'auto'
}));
export const ImageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  height: theme.utility.pxToRem(380),
  width: theme.utility.pxToRem(380)
}));
export const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  color: theme.colors.purple4
}));
export const Statement = styled.h3({
  fontSize: '2rem'
});
export const Description = styled.h6({
  fontSize: '1.5rem'
});
