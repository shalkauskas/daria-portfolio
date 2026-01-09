import { useState } from 'react';
import { Typography } from '../Typography/Typography';
import {
  BottomContainer,
  CardContainer,
  CarouselTrack,
  CarouselViewport,
  CarouselWrapper,
  NavButtonLeft,
  NavButtonRight,
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
        onClick={() => navigate(project.link)}
        css={(theme) => ({
          backgroundColor: index % 2 ? theme.colors.blue1 : theme.colors.purple5
        })}>
        <Image src={project.image} style={{ cursor: 'pointer' }} />
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = workProjects.filter(
    (project) => !project.link.includes(location.pathname)
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(filteredProjects.length - 1, prev + 1));
  };

  return (
    <Stack direction="column" gap="2rem" alignItems="center">
      <Typography variant="h1">View Next</Typography>
      <CarouselWrapper>
        <NavButtonLeft onClick={handlePrev} disabled={currentIndex === 0}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButtonLeft>
        <CarouselViewport>
          <CarouselTrack $currentIndex={currentIndex}>
            {filteredProjects.map((project, index) => (
              <Card key={project.title} index={index} project={project} />
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <NavButtonRight
          onClick={handleNext}
          disabled={currentIndex === filteredProjects.length - 1}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButtonRight>
      </CarouselWrapper>
    </Stack>
  );
}
