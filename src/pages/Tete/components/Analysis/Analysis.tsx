import { Image, Stack, StepTitle, Typography } from '@/components';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4 } from './Tab4';
import { forwardRef } from 'react';
import wireframing from '@/pages/Tete/assets/wireframe.png';

type Props = {
  title: string;
  wireframingRef?: React.RefObject<HTMLDivElement>;
};

export const Analysis = forwardRef<HTMLDivElement, Props>(
  ({ title, wireframingRef }, ref) => {
    return (
      <Stack
        gap="2rem"
        direction="column"
        css={{ alignItems: 'center' }}
        ref={ref}>
        <Typography variant="h1">{title}</Typography>
        <Tab1 />
        <Tab2 />
        <Tab3 />
        <Tab4 />
        <Stack
          direction="column"
          css={{ alignItems: 'start' }}
          ref={wireframingRef}>
          <StepTitle>Wireframing</StepTitle>
          <Image src={wireframing} />
        </Stack>
      </Stack>
    );
  }
);
