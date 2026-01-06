import styled from '@emotion/styled';

export const StyledOl = styled.ol<{ $boldMarker?: boolean }>(
  ({ $boldMarker }) => ({
    marginLeft: '1rem',
    ...($boldMarker && {
      listStyle: 'none',
      counterReset: 'list-counter',
      '& > li': {
        counterIncrement: 'list-counter',
        position: 'relative',
        '&::before': {
          content: 'counter(list-counter) ". "',
          fontWeight: 700,
          position: 'absolute',
          left: '-1.5rem'
        }
      }
    })
  })
);

export const StyledUl = styled.ul<{ $boldMarker?: boolean }>(
  ({ $boldMarker }) => ({
    marginLeft: '1rem',
    ...($boldMarker && {
      listStyle: 'none',
      '& > li': {
        position: 'relative',
        '&::before': {
          content: '"•"',
          fontWeight: 700,
          position: 'absolute',
          left: '-1rem'
        }
      }
    })
  })
);
