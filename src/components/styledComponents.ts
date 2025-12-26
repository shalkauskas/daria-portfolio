import styled from '@emotion/styled';
import { StyledH1 } from './Typography/styles';

export const Title = styled(StyledH1)({
  textAlign: 'center',
  margin: '2rem 0'
});

export const Stack = styled('div', {
  shouldForwardProp: (prop) =>
    !['direction', 'gap', 'justifyContent', 'alignItems'].includes(prop)
})<{
  direction?: 'row' | 'column';
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
}>(({ direction = 'row', gap, justifyContent, alignItems }) => ({
  display: 'flex',
  flexDirection: direction,
  gap,
  justifyContent,
  alignItems
}));
