import { Typography } from '../Typography/Typography';
import {
  BottomContainer,
  CardContainer,
  StyledIconButton,
  TopContainer
} from './styles';
import carretright from './caretright.svg';
import { Stack } from '../styledComponents';
import { workProjects } from '@/data/mainPage';
import { useLocation, useNavigate } from 'react-router';
import { Image } from '../Image';
type Props = {
  index: number;
  project: (typeof workProjects)[number];
};

function Card({ index, project }: Props) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <TopContainer
        css={(theme) => ({
          backgroundColor: index % 2 ? theme.colors.blue1 : theme.colors.purple5
        })}>
        <Image src={project.image} />
      </TopContainer>
      <BottomContainer>
        <Typography variant="h4">{project.title}</Typography>
        <StyledIconButton
          icon={carretright}
          variant="round"
          onClick={() => navigate(project.link)}
        />
      </BottomContainer>
    </CardContainer>
  );
}

export function ViewNext() {
  const location = useLocation();
  return (
    <Stack direction="column" gap="2rem" alignItems="center">
      <Typography variant="h1">View Next</Typography>
      <Stack direction="row" gap="1.5rem">
        {workProjects
          .filter((project) => !project.link.includes(location.pathname))
          .map((project, index) => (
            <Card key={project.title} index={index} project={project} />
          ))}
      </Stack>
    </Stack>
  );
}
