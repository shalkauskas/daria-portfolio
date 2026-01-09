import styled from '@emotion/styled';

export const PreviewOverlayContainer = styled.div({
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',

  '@media (max-width: 700px)': {
    '& img': {
      height: '400px',
      width: '375px'
    }
  }
});

export const CenteredDesktopVideo = styled.video({
  position: 'absolute',
  borderRadius: '6px',
  objectFit: 'fill',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -60%)',
  zIndex: 1,
  height: '290px',
  width: '489px',

  '@media (max-width: 700px)': {
    borderRadius: '4px',
    transform: 'translate(-50%, -50%)',
    height: '162px',
    width: '275px'
  }
});
