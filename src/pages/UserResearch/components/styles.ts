import { Typography } from '@/components';
import styled from '@emotion/styled';

export const DataSolutionsContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 0.2fr 1fr 0.2fr 1fr',
  columnGap: theme.utility.pxToRem(20),
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.utility.pxToRem(40),

  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 0.2fr 1fr 0.2fr 0.5fr'
  }
}));

export const DataSolutionsItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  textAlign: 'center'
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.utility.pxToRem(48),
  fontWeight: 600,
  lineHeight: theme.utility.pxToRem(72),
  textAlign: 'center'
}));

export const InterviewPreparationContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateAreas: `
    "area1 . area4"
    ". area3 ."
    "area2 . area5"
  `,
  '& > *:nth-of-type(1)': { gridArea: 'area1' },
  '& > *:nth-of-type(2)': { gridArea: 'area2' },
  '& > *:nth-of-type(3)': { gridArea: 'area3' },
  '& > *:nth-of-type(4)': { gridArea: 'area4' },
  '& > *:nth-of-type(5)': { gridArea: 'area5' },

  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      "area1"
      "area2"
      "area3"
      "area4"
      "area5"
    `
  }
}));

export const Title = styled(Typography)(({ theme }) => ({
  '& > span': {
    color: theme.colors.primary,
    fontWeight: 600,
    fontSize: theme.utility.pxToRem(48),
    lineHeight: theme.utility.pxToRem(56)
  }
}));
