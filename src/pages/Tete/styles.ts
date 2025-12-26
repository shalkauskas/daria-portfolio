import { Stack } from '@/components';
import styled from '@emotion/styled';

export const GradientContainer = styled.div(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.colors.primaryButtonHover} 0%, #8459BC 100%)`,
  boxSizing: 'border-box',
  padding: '1rem 1.5rem'
}));

export const OutcomesContainer = styled(Stack)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.colors.primaryButtonHover} 0%, #8459BC 100%)`,
  border: `1px solid ${theme.colors.grey1}`,
  gap: '1rem',
  flexDirection: 'column',
  padding: `${theme.utility.pxToRem(20)} ${theme.utility.pxToRem(25)}`,
  marginBottom: theme.utility.pxToRem(40),

  '& h3, li': {
    color: theme.colors.white
  }
}));
