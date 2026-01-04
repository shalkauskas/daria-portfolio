import {
  ProjectOverviewGrid,
  ProjectOverviewTitle,
  ProjectOverviewValue
} from './styles';

type Props = {
  overview: {
    timeline: string;
    teams: string;
    tools: string;
    methods: string;
  };
};

export function Overview({ overview }: Props) {
  return (
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
  );
}
