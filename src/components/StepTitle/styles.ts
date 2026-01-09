import styled from '@emotion/styled';
import { StyledH4 } from '../Typography/styles';

export const Ellipse = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  borderRadius: '100%',
  height: theme.utility.pxToRem(12),
  width: theme.utility.pxToRem(12),
  flexShrink: 0
}));

export const StyledTitle = styled(StyledH4)(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.5rem'
}));
