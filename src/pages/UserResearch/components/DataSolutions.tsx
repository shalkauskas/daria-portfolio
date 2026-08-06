import { Typography } from '@/components';
import {
  DataSolutionsContainer,
  DataSolutionsItem,
  StyledTypography
} from './styles';

export function DataSolutions() {
  return (
    <DataSolutionsContainer>
      <DataSolutionsItem>
        <StyledTypography>1832</StyledTypography>
        <Typography variant="h1">Survey Responders</Typography>
      </DataSolutionsItem>
      <StyledTypography>+</StyledTypography>
      <DataSolutionsItem>
        <StyledTypography>10</StyledTypography>
        <Typography variant="h1">User Interviews</Typography>
      </DataSolutionsItem>
      <StyledTypography>=</StyledTypography>
      <StyledTypography>Data-Driven Solutions</StyledTypography>
    </DataSolutionsContainer>
  );
}
