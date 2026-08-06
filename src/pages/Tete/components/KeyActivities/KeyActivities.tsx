import { Stack, Typography } from '@/components';
import { activities } from '@/data/tete';

import { ActivityBoxBig, ActivityBoxSmall, ActivityGrid } from './styles';
import { forwardRef } from 'react';

type Props = {
  title: string;
};

export const KeyActivities = forwardRef<HTMLDivElement, Props>(
  ({ title }, ref) => {
    return (
      <Stack
        gap="2rem"
        direction="column"
        css={{ alignItems: 'center' }}
        ref={ref}>
        <Typography variant="h1">{title}</Typography>
        <Stack gap="0.5rem" direction="column">
          {activities.map(({ title, description }) => (
            <ActivityGrid key={title}>
              <ActivityBoxSmall>
                <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
              </ActivityBoxSmall>
              <ActivityBoxBig>
                <Typography>{description}</Typography>
              </ActivityBoxBig>
            </ActivityGrid>
          ))}
        </Stack>
      </Stack>
    );
  }
);
