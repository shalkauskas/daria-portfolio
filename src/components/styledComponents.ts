import styled from '@emotion/styled';
import { StyledH1 } from './Typography/styles';

export const Title = styled(StyledH1)({
  textAlign: 'center',
  margin: '2rem 0'
});
export const Image = styled.img({
  height: '100%',
  width: '100%'
});
export const Stack = styled('div', {
  shouldForwardProp: (prop) => !['direction', 'gap'].includes(prop)
})<{ direction?: 'row' | 'column'; gap?: string }>(
  ({ direction = 'row', gap }) => ({
    display: 'flex',
    flexDirection: direction,
    gap
  })
);
