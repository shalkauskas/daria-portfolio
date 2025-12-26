import { Image, Stack, StepTitle, Typography } from '@/components';
import { forwardRef } from 'react';
import test1 from '@/pages/Tete/assets/test1.png';
import test2 from '@/pages/Tete/assets/test2.png';
import test3 from '@/pages/Tete/assets/test3.png';
import test4 from '@/pages/Tete/assets/test4.png';
import cross from '@/pages/Tete/assets/cross.png';
import checkmark from '@/pages/Tete/assets/checkmark.png';
type Props = {
  title: string;
};

export const UsabilityTesting = forwardRef<HTMLDivElement, Props>(
  ({ title }, ref) => {
    return (
      <Stack gap="1.5rem" direction="column" ref={ref}>
        <Typography variant="h1">{title}</Typography>
        <StepTitle>Layout & Responsiveness Challenge</StepTitle>
        <Typography>
          The biggest issue for me was designing the most important part of the
          website – list of services. It had to be visible and easily accessible
          on all platforms. I’ve tried various ways of displaying them - buttons
          on a single background, images with text descriptions scrolled to the
          sides and images with text stacked under each other. The last one
          turned out to be the most user friendly and fits well both desktop and
          mobile versions.
        </Typography>
        <Stack css={{ justifyContent: 'space-between' }}>
          <Stack gap="0.5rem" alignItems="start">
            <Image src={cross} height="24px" />
            <Stack gap="1.5rem">
              <Image src={test1} height="312px" canEnlarge />
              <Image src={test2} height="312px" canEnlarge />
            </Stack>
          </Stack>
          <Stack gap="0.5rem" alignItems="start">
            <Image src={checkmark} height="24px" />
            <Stack gap="1.5rem">
              <Image src={test3} height="312px" canEnlarge />
              <Image src={test4} height="312px" canEnlarge />
            </Stack>
          </Stack>
        </Stack>

        <StepTitle>Interaction</StepTitle>
        <Typography>
          Sliding interaction signifier represented by three dots wasn’t clear
          for users. As a result, I got rid of dots and made menu items
          clickable while still maintaining screens’ ability to slide.
        </Typography>
        <Stack css={{ justifyContent: 'space-evenly' }}>
          <img src="https://placehold.co/184x417" />
          <img src="https://placehold.co/184x417" />
        </Stack>

        <StepTitle>Fixed Header</StepTitle>
        <Typography>
          The fixed header that folds in when as you scroll down is a great idea
          which I picked up from the original Tete-A-Tete website. While it is
          providing constant access to site navigation it gets thinner and saves
          the valuable space for the content. However, according to user
          insights the fact that the name of the salon, its logo, simply
          disappears when you scroll looks like a system error and leaves users
          confused. To avoid poor readability caused by reducing size of the
          logo I chose to make a transition from logo (initial state) to a text
          title.
        </Typography>
        <img src="https://placehold.co/1032x454" />
      </Stack>
    );
  }
);
