import { Image, Stack, StepTitle, Typography } from '@/components';
import { forwardRef } from 'react';
import arrowright from '@/pages/Tete/assets/arrowright.png';
import checkmark from '@/pages/Tete/assets/checkmark.png';
import cross from '@/pages/Tete/assets/cross.png';
import test1 from '@/pages/Tete/assets/test1.png';
import test2 from '@/pages/Tete/assets/test2.png';
import test3 from '@/pages/Tete/assets/test3.png';
import test4 from '@/pages/Tete/assets/test4.png';
import test5 from '@/pages/Tete/assets/test5.png';
import test6 from '@/pages/Tete/assets/test6.png';
import test7 from '@/pages/Tete/assets/test7.png';
import test8 from '@/pages/Tete/assets/test8.png';
import test9 from '@/pages/Tete/assets/test9.png';
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
              <Image
                src={test1}
                height="312px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
              <Image
                src={test2}
                height="312px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
            </Stack>
          </Stack>
          <Stack gap="0.5rem" alignItems="start">
            <Image src={checkmark} height="24px" />
            <Stack gap="1.5rem">
              <Image
                src={test3}
                height="312px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
              <Image
                src={test4}
                height="312px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
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
          <Image
            src={test5}
            height="417px"
            canEnlarge
            containerStyle={{ border: '1px solid #E2D7D2' }}
          />
          <Image
            src={test6}
            height="417px"
            canEnlarge
            containerStyle={{ border: '1px solid #E2D7D2' }}
          />
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
        <Stack justifyContent="space-evenly">
          <Stack gap="0.5rem" alignItems="start">
            <Image src={cross} height="24px" />
            <Stack gap="1.5rem">
              <Image
                src={test7}
                height="454px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
              <Image
                src={test8}
                height="454px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
              <Image src={arrowright} height="30px" />
            </Stack>
          </Stack>
          <Stack gap="0.5rem" alignItems="start">
            <Image src={checkmark} height="24px" />
            <Stack gap="1.5rem">
              <Image
                src={test9}
                height="454px"
                canEnlarge
                containerStyle={{ border: '1px solid #E2D7D2' }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
);
