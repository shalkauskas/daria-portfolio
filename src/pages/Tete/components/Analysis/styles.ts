import styled from '@emotion/styled';

export const ImageGrid = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto auto',
  gap: '1rem',
  textAlign: 'center'
}));
