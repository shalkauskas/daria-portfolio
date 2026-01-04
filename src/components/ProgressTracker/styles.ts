import styled from '@emotion/styled';

export const ProgressTrackerWrapper = styled.div(({ theme }) => ({
  backgroundColor: '#EBEFF6',
  padding: theme.utility.pxToRem(24),
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(10)} 0.5rem ${theme.colors.black1} inset`,
  borderRight: `1px solid ${theme.colors.grey1}`,
  minWidth: theme.utility.pxToRem(300),
  maxWidth: theme.utility.pxToRem(400),

  '@media (max-width: 1100px)': {
    display: 'none'
  }
}));

export const ProgressTrackerMobileWrapper = styled.div(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  zIndex: 1000,
  display: 'none',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.utility.pxToRem(16),
  boxShadow: `0px -2px 24px 0px rgba(0, 0, 0, 0.25)`,

  '@media (max-width: 1100px)': {
    display: 'flex'
  }
}));

export const ProgressTrackerContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  height: `calc(100vh - ${theme.utility.pxToRem(68)})`
}));

export const OverlayBackdrop = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  '@media (min-width: 1101px)': {
    display: 'none'
  }
});

export const OverlayContainer = styled.div<{ $isOpen: boolean }>(
  ({ theme, $isOpen }) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '90vh',
    backgroundColor: 'white',
    zIndex: 1001,
    borderTopLeftRadius: theme.utility.pxToRem(16),
    borderTopRightRadius: theme.utility.pxToRem(16),
    boxShadow: '0px -4px 24px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    transform: $isOpen ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.3s ease-in-out',

    '@media (min-width: 1101px)': {
      display: 'none'
    }
  })
);

export const OverlayHeader = styled.div(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.colors.grey1}`,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.utility.pxToRem(16)
}));

export const OverlayContent = styled.div(({ theme }) => ({
  backgroundColor: '#EBEFF6',
  flex: 1,
  overflowY: 'auto',
  padding: theme.utility.pxToRem(16)
}));
