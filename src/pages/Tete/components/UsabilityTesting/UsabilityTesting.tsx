import { Image, Stack, StepTitle, Title, Typography } from '@/components';
import { forwardRef } from 'react';
import arrowright from '@/pages/Tete/assets/arrowright.webp';
import checkmark from '@/pages/Tete/assets/checkmark.webp';
import cross from '@/pages/Tete/assets/cross.webp';
import test1 from '@/pages/Tete/assets/test1.webp';
import test2 from '@/pages/Tete/assets/test2.webp';
import test3 from '@/pages/Tete/assets/test3.webp';
import test4 from '@/pages/Tete/assets/test4.webp';
import test5 from '@/pages/Tete/assets/test5.webp';
import test6 from '@/pages/Tete/assets/test6.webp';
import test7 from '@/pages/Tete/assets/test7.webp';
import test8 from '@/pages/Tete/assets/test8.webp';
import test9 from '@/pages/Tete/assets/test9.webp';
import { ArrowImage } from './styles';
type Props = {
  title: string;
};

export const UsabilityTesting = forwardRef<HTMLDivElement, Props>(
  ({ title }, ref) => {
    return (
      <div ref={ref}>
        <Title>{title}</Title>
        <Stack direction="column" gap="2rem">
          {/* step */}
          <Stack gap="1rem" direction="column">
            <StepTitle>Layout & Responsiveness Challenge</StepTitle>
            <Typography>
              The biggest issue for me was designing the most important part of
              the website – list of services. It had to be visible and easily
              accessible on all platforms. I’ve tried various ways of displaying
              them - buttons on a single background, images with text
              descriptions scrolled to the sides and images with text stacked
              under each other. The last one turned out to be the most user
              friendly and fits well both desktop and mobile versions.
            </Typography>
            <Stack
              css={{
                justifyContent: 'space-between',
                '@media (max-width: 850px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2.5rem'
                }
              }}>
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
          </Stack>
          {/* step */}
          <Stack gap="1rem" direction="column">
            <StepTitle>Interaction</StepTitle>
            <Typography>
              Sliding interaction signifier represented by three dots wasn’t
              clear for users. As a result, I got rid of dots and made menu
              items clickable while still maintaining screens’ ability to slide.
            </Typography>
            <Stack css={{ justifyContent: 'space-evenly', gap: '1rem' }}>
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
          </Stack>
          {/* step */}
          <Stack gap="1rem" direction="column">
            <StepTitle>Fixed Header</StepTitle>
            <Typography>
              The fixed header that folds in when as you scroll down is a great
              idea which I picked up from the original Tete-A-Tete website.
              While it is providing constant access to site navigation it gets
              thinner and saves the valuable space for the content. However,
              according to user insights the fact that the name of the salon,
              its logo, simply disappears when you scroll looks like a system
              error and leaves users confused. To avoid poor readability caused
              by reducing size of the logo I chose to make a transition from
              logo (initial state) to a text title.
            </Typography>

            <Stack
              justifyContent="space-evenly"
              css={{
                '@media (max-width: 850px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2.5rem'
                }
              }}>
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
                  <ArrowImage src={arrowright} height="30px" />
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
        </Stack>
      </div>
    );
  }
);
