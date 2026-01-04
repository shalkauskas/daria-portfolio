import styled from '@emotion/styled';

export const ButtonsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  width: '100%'
}));
export const ButtonsSocialContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '0.75rem'
}));
export const ContentWrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.utility.pxToRem(100),
  margin: 'auto',
  maxWidth: theme.utility.pxToRem(1280),

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    gap: '1rem'
  }
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
  backgroundImage: `url(src/pages/Main/components/AboutMe/bgVector.svg), linear-gradient(to bottom, transparent 70%, ${theme.colors.purpleBgAboutMe} 30%)`,
  backgroundPositionY: '60%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  gap: theme.utility.pxToRem(16),
  display: 'flex',
  flexDirection: 'column',
  padding: theme.utility.pxToRem(80),

  '@media (max-width: 1400px)': {
    backgroundPositionY: '70%'
  }
}));
