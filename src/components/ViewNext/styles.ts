import styled from '@emotion/styled';
import { IconButton } from '../IconButton/IconButton';

export const CardContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.grey1}`,
  borderRadius: '12px',
  boxShadow:
    '0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.05), 0 0.25rem 0.25rem -1px rgba(12, 12, 13, 0.1)',
  overflow: 'hidden',
  width: theme.utility.pxToRem(298)
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  padding: '0.6rem',
  height: theme.utility.pxToRem(40),
  width: theme.utility.pxToRem(40)
}));

export const BottomContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.utility.pxToRem(16)
}));

export const TopContainer = styled.div(({ theme }) => ({
  display: 'flex',
  padding: `${theme.utility.pxToRem(30)} ${theme.utility.pxToRem(50)}`
}));
