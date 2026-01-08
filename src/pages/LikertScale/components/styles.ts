import styled from '@emotion/styled';

export const ImageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '1rem',
  maxWidth: '100vw'
});

export const ImageContainerContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.5rem',
  '@media (max-width: 850px)': {
    flexDirection: 'column',

    '& > div': {
      margin: '16px !important'
    }
  }
});
