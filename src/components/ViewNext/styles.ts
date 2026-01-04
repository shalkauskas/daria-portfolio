import styled from '@emotion/styled';
import { IconButton } from '../IconButton/IconButton';

const CARD_WIDTH = 298;

export const CardContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '12px',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  overflow: 'hidden',
  width: theme.utility.pxToRem(298),
  flexShrink: 0
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  padding: '0.6rem',
  height: theme.utility.pxToRem(40),
  width: theme.utility.pxToRem(40)
}));

export const BottomContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.utility.pxToRem(16)
}));

export const TopContainer = styled.div(({ theme }) => ({
  display: 'flex',
  padding: `${theme.utility.pxToRem(30)} ${theme.utility.pxToRem(50)}`
}));

export const CarouselWrapper = styled.div({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const CarouselTrack = styled.div<{ $currentIndex: number }>(
  ({ $currentIndex }) => ({
    display: 'flex',
    gap: '1.5rem',
    transition: 'transform 0.4s ease-in-out',

    '@media (max-width: 768px)': {
      transform: `translateX(calc(-${$currentIndex} * (${CARD_WIDTH}px + 1.5rem)))`
    }
  })
);

export const CarouselViewport = styled.div({
  overflow: 'hidden',
  width: '100%',

  '@media (max-width: 768px)': {
    width: `${CARD_WIDTH}px`
  }
});

export const NavButton = styled.button(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.colors.secondaryText,
  color: theme.colors.white,
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  zIndex: 10,
  transition: 'opacity 0.2s ease',

  '&:hover:not(:disabled)': {
    opacity: 0.8
  },

  '&:disabled': {
    backgroundColor: '#E5E5EA',
    color: theme.colors.secondaryText,
    cursor: 'default'
  },

  '@media (max-width: 768px)': {
    display: 'flex'
  }
}));

export const NavButtonLeft = styled(NavButton)({
  left: '10px'
});

export const NavButtonRight = styled(NavButton)({
  right: '10px'
});
