import { Stack } from '@/components';
import styled from '@emotion/styled';

export const PreviewOverlayContainer = styled.div({
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden'
});

export const CenteredVideo = styled.video({
  position: 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -61%)',
  zIndex: 1
});

export const GradientContainer = styled.div(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.colors.primaryButtonHover} 0%, #8459BC 100%)`,
  boxSizing: 'border-box',
  padding: '1rem 1.5rem'
}));

export const OutcomesContainer = styled(Stack)(({ theme }) => ({
  position: 'relative',
  borderTop: `1px solid ${theme.colors.grey1}`,
  borderBottom: `1px solid ${theme.colors.grey1}`,
  gap: '1rem',
  flexDirection: 'column',
  padding: `${theme.utility.pxToRem(20)} ${theme.utility.pxToRem(25)}`,
  width: `calc(100% + ${theme.utility.pxToRem(48)})`,
  marginLeft: theme.utility.pxToRem(-24),
  boxSizing: 'border-box',

  '@media (max-width: 1024px)': {
    width: `calc(100% + ${theme.utility.pxToRem(32)})`,
    marginLeft: theme.utility.pxToRem(-16)
  },

  '& h3, li': {
    color: theme.colors.white
  },

  '& div': {
    position: 'absolute',
    bottom: 0,
    left: '-25%',
    right: 0,
    top: 0,
    width: '100vw',
    background: `linear-gradient(to right, ${theme.colors.primaryButtonHover} 0%, #8459BC 100%)`,
    zIndex: -1
  }
}));
