import styled from '@emotion/styled';

export const GridContainer = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',

  '@media (max-width: 1400px)': {
    gridTemplateColumns: '1fr'
  }
}));

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
  borderRadius: '8px',
  objectFit: 'fill',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -61%)',
  zIndex: 1,
  height: '290px',
  width: '451px',

  '@media (max-width: 700px)': {
    borderRadius: '4px',
    transform: 'translate(-50%, -51%)',
    height: '175px',
    width: '275px'
  }
});

export const CenteredMobileVideo = styled.video({
  position: 'absolute',
  borderRadius: '20px',
  objectFit: 'fill',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  height: '314px',
  width: '146px',

  '@media (max-width: 700px)': {
    borderRadius: '20px',
    transform: 'translate(-50%, -46%)',
    height: '336px',
    width: '146px'
  }
});
