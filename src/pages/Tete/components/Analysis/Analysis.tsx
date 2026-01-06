import { Image, Stack, StepTitle, Title } from '@/components';
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
      <div ref={ref}>
        <Title>{title}</Title>
        <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
          <Stack
            direction="column"
            gap="1.5rem"
            css={{ alignItems: 'start' }}
            ref={wireframingRef}>
            <StepTitle>Wireframing</StepTitle>
            <Image
              src={wireframing}
              containerStyle={{
                boxShadow:
                  '0px 1px 12px 0px #C6C6C9, 0px 6px 4px 0px #C6C6C9, 0px 3px 2px -1px #0000001A',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            />
          </Stack>
        </Stack>
      </div>
    );
  }
);
