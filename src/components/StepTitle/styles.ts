import styled from '@emotion/styled';
import { StyledH4 } from '../Typography/styles';

export const Ellipse = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  borderRadius: '100%',
  height: theme.utility.pxToRem(12),
  width: theme.utility.pxToRem(12)
}));

export const StyledTitle = styled(StyledH4)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.5rem',
  marginBottom: theme.utility.pxToRem(24)
}));
