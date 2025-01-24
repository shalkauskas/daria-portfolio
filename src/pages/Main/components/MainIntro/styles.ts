import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.utility.pxToRem(88),
  margin: 'auto',
  maxWidth: theme.utility.pxToRem(1280),
  padding: `${theme.utility.pxToRem(200)} 1rem ${theme.utility.pxToRem(250)}`,
  position: 'relative'
}));
export const TextContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  margin: 'auto',
  zIndex: 1
}));
export const ImageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  height: theme.utility.pxToRem(380),
  width: theme.utility.pxToRem(380),
  zIndex: 1
}));
export const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  color: theme.colors.purple4
}));
export const Statement = styled.h3({
  fontSize: '2rem',
  textAlign: 'center'
});
export const Description = styled.h6(({ theme }) => ({
  fontSize: '1.5rem',
  lineHeight: theme.utility.pxToRem(36)
}));
export const Circle1 = styled.div(({ theme }) => ({
  backgroundColor: '#F1EDFC',
  borderRadius: '100%',
  bottom: '22%',
  boxShadow: '0 0.25rem 0.25rem 0 rgba(217, 203, 253, 0.35)',
  height: theme.utility.pxToRem(354),
  position: 'absolute',
  right: '42%',
  width: theme.utility.pxToRem(354)
}));
export const Circle2 = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.purple1,
  borderRadius: '100%',
  bottom: '55%',
  boxShadow: `0 0.25rem 0.25rem 0 ${theme.colors.purple1}`,
  height: theme.utility.pxToRem(240),
  position: 'absolute',
  right: '25%',
  width: theme.utility.pxToRem(240)
}));
export const Circle3 = styled.div(({ theme }) => ({
  backgroundColor: '#BBA9E8',
  borderRadius: '100%',
  bottom: '28%',
  boxShadow: `0 0.25rem 0.25rem 0 #E7DEFC`,
  height: theme.utility.pxToRem(120),
  position: 'absolute',
  right: '29%',
  width: theme.utility.pxToRem(120)
}));
