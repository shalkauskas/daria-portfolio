import { Stack, Typography } from '..';
import {
  ProgressTrackerWrapper,
  ProjectOverviewGrid,
  ProjectOverviewTitle,
  ProjectOverviewValue,
  TableOfContentItem,
  TableOfContentList
} from './styles';

type Props = {
  overview: {
    timeline: string;
    teams: string;
    tools: string;
    methods: string;
  };
  tableOfContent: {
    title: string;
  }[];
};

export function ProgressTracker({ overview, tableOfContent }: Props) {
  return (
    <ProgressTrackerWrapper>
      <Stack gap="2rem" direction="column">
        <Typography variant="subtitle18">PROJECT OVERVIEW</Typography>
        <ProjectOverviewGrid>
          <ProjectOverviewTitle>TIMELINE</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.timeline}</ProjectOverviewValue>

          <ProjectOverviewTitle>TEAMS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.teams}</ProjectOverviewValue>

          <ProjectOverviewTitle>TOOLS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.tools}</ProjectOverviewValue>

          <ProjectOverviewTitle>METHODS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.methods}</ProjectOverviewValue>
        </ProjectOverviewGrid>
        <Typography variant="subtitle18">TABLE OF CONTENT</Typography>
        <TableOfContentList>
          {tableOfContent.map((item) => (
            <TableOfContentItem key={item.title} as="li">
              {item.title}
            </TableOfContentItem>
          ))}
        </TableOfContentList>
      </Stack>
    </ProgressTrackerWrapper>
  );
}
