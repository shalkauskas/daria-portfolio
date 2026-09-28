import { useLayoutEffect, useRef, useState } from 'react';
import { Typography } from '../Typography/Typography';
import {
  BottomContainer,
  CARD_GAP,
  CARD_WIDTH_VAR,
  CardContainer,
  CarouselTrack,
  CarouselViewport,
  CarouselWrapper,
  NAV_BUTTON_SIZE,
  NavButton,
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
    <CardContainer data-carousel-card>
      <TopContainer
        onClick={() => navigate(project.link)}
        css={(theme) => ({
          backgroundColor: index % 2 ? theme.colors.blue1 : theme.colors.purple5
        })}
      >
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

function useCarouselLayout(cardCount: number) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ visibleCount: cardCount, step: 0 });

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const measure = () => {
      const card = wrapper.querySelector<HTMLElement>('[data-carousel-card]');
      if (!card) return;
      wrapper.style.removeProperty(CARD_WIDTH_VAR);
      const naturalCardWidth = card.offsetWidth;
      const availableWidth = wrapper.clientWidth;
      const fitsAll =
        cardCount * (naturalCardWidth + CARD_GAP) - CARD_GAP <= availableWidth;
      if (fitsAll) {
        setLayout({
          visibleCount: cardCount,
          step: naturalCardWidth + CARD_GAP
        });
        return;
      }
      const navButtonGap = parseFloat(getComputedStyle(wrapper).columnGap) || 0;
      const spaceForCards =
        availableWidth - 2 * (NAV_BUTTON_SIZE + navButtonGap);
      const cardWidth = Math.min(naturalCardWidth, spaceForCards);
      if (cardWidth < naturalCardWidth) {
        const borderWidth = card.offsetWidth - card.clientWidth;
        wrapper.style.setProperty(
          CARD_WIDTH_VAR,
          `${cardWidth - borderWidth}px`
        );
      }
      const step = cardWidth + CARD_GAP;
      const visibleCount = Math.max(
        1,
        Math.floor((spaceForCards + CARD_GAP) / step)
      );
      setLayout({ visibleCount, step });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [cardCount]);

  return { wrapperRef, ...layout };
}

export function ViewNext() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = workProjects.filter(
    (project) => !project.link.includes(location.pathname)
  );
  const { wrapperRef, visibleCount, step } = useCarouselLayout(
    filteredProjects.length
  );
  const maxIndex = filteredProjects.length - visibleCount;
  const clampedIndex = Math.min(currentIndex, maxIndex);
  const isScrollable = maxIndex > 0;

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, clampedIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, clampedIndex + 1));
  };

  return (
    <Stack direction="column" gap="2rem" alignItems="center">
      <Typography variant="h1">View Next</Typography>
      <CarouselWrapper ref={wrapperRef}>
        {isScrollable && (
          <NavButton
            aria-label="Previous project"
            onClick={handlePrev}
            disabled={clampedIndex === 0}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavButton>
        )}
        <CarouselViewport $width={step && visibleCount * step - CARD_GAP}>
          <CarouselTrack $offset={clampedIndex * step}>
            {filteredProjects.map((project, index) => (
              <Card key={project.title} index={index} project={project} />
            ))}
          </CarouselTrack>
        </CarouselViewport>
        {isScrollable && (
          <NavButton
            aria-label="Next project"
            onClick={handleNext}
            disabled={clampedIndex === maxIndex}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavButton>
        )}
      </CarouselWrapper>
    </Stack>
  );
}
