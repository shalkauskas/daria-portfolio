import styled from '@emotion/styled';

export const GridContainer = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',

  '@media (max-width: 1400px)': {
    gridTemplateColumns: '1fr'
  }
}));
