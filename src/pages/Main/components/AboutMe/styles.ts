import styled from '@emotion/styled';

export const ButtonsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  width: '100%'
}));
export const ContentWrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.utility.pxToRem(100),
  margin: 'auto',
  maxWidth: theme.utility.pxToRem(1280)
}));
export const Text = styled.p(({ theme }) => ({
  fontSize: theme.utility.pxToRem(20),
  lineHeight: '2rem'
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
  height: theme.utility.pxToRem(480),
  width: theme.utility.pxToRem(480)
}));
export const Wrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  backgroundImage: `url(src/components/AboutMe/bgVector.svg), linear-gradient(to bottom, transparent 70%, ${theme.colors.purpleBgAboutMe} 30%)`,
  backgroundPositionY: '60%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.utility.pxToRem(80)
}));
