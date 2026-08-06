import styled from '@emotion/styled';
import { StyledH1 } from './Typography/styles';

export const Title = styled(StyledH1)(({ theme }) => ({
  textAlign: 'center',
  margin: `${theme.utility.pxToRem(40)} 0 ${theme.utility.pxToRem(32)} 0`,

  '@media (max-width: 1024px)': {
    margin: '2rem 0 1rem 0'
  }
}));

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
