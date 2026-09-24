import { Stack } from '@/components';
import styled from '@emotion/styled';

export const PreviewOverlayContainer = styled.div({
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',

  '& img': {
    height: '364px'
  },

  '@media (max-width: 700px)': {
    '& img': {
      height: '400px',
      width: '375px',
      maxWidth: '100%'
    }
  },

  '@media (max-width: 400px)': {
    '& img': {
      height: '200px',
      width: '250px'
    }
  }
});

export const CenteredDesktopVideo = styled.video({
  position: 'absolute',
  borderRadius: '8px',
  objectFit: 'scale-down',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -61%)',
  zIndex: 1,

  '@media (max-width: 700px)': {
    borderRadius: '4px',
    transform: 'translate(-50%, -62%)',
    height: '162px',
    width: '275px'
  },

  '@media (max-width: 400px)': {
    transform: 'translate(-50%, -63%)',
    width: '184px',
    height: '108px'
  }
});

export const CenteredMobileVideo = styled.video({
  position: 'absolute',
  borderRadius: '18px',
  objectFit: 'cover',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  height: '314px',
  width: '145px',

  '@media (max-width: 700px)': {
    borderRadius: '20px',
    transform: 'translate(-50%, -46%)',
    height: '336px',
    width: '146px'
  },

  '@media (max-width: 375px)': {
    height: '280px',
    width: '90%'
  }
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
  paddingBlock: theme.utility.pxToRem(20),
  paddingInline: 'calc(50cqw - 50%)',
  width: '100cqw',
  marginLeft: 'calc(50% - 50cqw)',
  boxSizing: 'border-box',

  '& h3, li': {
    color: theme.colors.white
  },

  '& div': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    background: `linear-gradient(to right, ${theme.colors.primaryButtonHover} 0%, #8459BC 100%)`,
    zIndex: -1
  }
}));
