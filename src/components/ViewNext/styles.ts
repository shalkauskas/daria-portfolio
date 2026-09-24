import styled from '@emotion/styled';
import { IconButton } from '../IconButton/IconButton';

const CARD_WIDTH = 300;
const CARD_WIDTH_MOBILE = 250;
export const CARD_GAP = 24;
export const NAV_BUTTON_SIZE = 40;
export const NAV_BUTTON_GAP = 16;

export const CardContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '12px',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  overflow: 'hidden',
  width: theme.utility.pxToRem(CARD_WIDTH - 2),
  flexShrink: 0,
  justifyContent: 'space-between',

  '@media (max-width: 400px)': {
    width: theme.utility.pxToRem(CARD_WIDTH_MOBILE - 2)
  }
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.primary,
  justifyContent: 'center',
  padding: '0.6rem',
  height: theme.utility.pxToRem(40),
  width: theme.utility.pxToRem(40),

  '@media (max-width: 400px)': {
    padding: '0.5rem',
    height: theme.utility.pxToRem(32),
    width: theme.utility.pxToRem(32),

    '& > img': {
      height: theme.utility.pxToRem(18),
      width: theme.utility.pxToRem(18)
    }
  }
}));

export const BottomContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.utility.pxToRem(16),

  '@media (max-width: 400px)': {
    h4: {
      fontSize: theme.utility.pxToRem(16)
    }
  }
}));

export const TopContainer = styled.div(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  padding: `${theme.utility.pxToRem(30)} ${theme.utility.pxToRem(50)}`,
  height: theme.utility.pxToRem(120),

  '@media (max-width: 400px)': {
    height: theme.utility.pxToRem(80)
  }
}));

export const CarouselWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: `${NAV_BUTTON_GAP}px`,
  width: '100%',

  '@media (max-width: 400px)': {
    gap: '4px'
  }
});

export const CarouselTrack = styled.div<{ $offset: number }>(({ $offset }) => ({
  display: 'flex',
  gap: `${CARD_GAP}px`,
  transition: 'transform 0.4s ease-in-out',
  transform: `translateX(-${$offset}px)`
}));

export const CarouselViewport = styled.div<{ $width?: number }>(
  ({ $width }) => ({
    overflow: 'hidden',
    width: $width ? `${$width}px` : '100%'
  })
);

export const NavButton = styled.button(({ theme }) => ({
  backgroundColor: '#F7EFFF',
  color: theme.colors.primaryText,
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '50%',
  width: `${NAV_BUTTON_SIZE}px`,
  height: `${NAV_BUTTON_SIZE}px`,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  transition: 'opacity 0.2s ease',

  '&:hover:not(:disabled)': {
    opacity: 0.8
  },

  '&:disabled': {
    backgroundColor: '#E5E5EA',
    color: theme.colors.secondaryText,
    cursor: 'default'
  }
}));
