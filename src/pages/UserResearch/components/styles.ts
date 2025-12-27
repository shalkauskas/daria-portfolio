import { Typography } from '@/components';
import styled from '@emotion/styled';

export const DataSolutionsContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 0.2fr 1fr 0.2fr 1fr',
  columnGap: theme.utility.pxToRem(20),
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.utility.pxToRem(40)
}));

export const DataSolutionsItem = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  textAlign: 'center'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.utility.pxToRem(48),
  fontWeight: 600,
  lineHeight: theme.utility.pxToRem(72),
  textAlign: 'center'
}));
