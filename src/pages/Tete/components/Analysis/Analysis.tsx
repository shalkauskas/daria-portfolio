import { Stack, StepTitle, Typography } from '@/components';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4 } from './Tab4';

export function Analysis({ title }: { title: string }) {
  return (
    <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
      <Typography variant="h1">{title}</Typography>
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
      <Stack direction="column" css={{ alignItems: 'start' }}>
        <StepTitle>Wireframing</StepTitle>
        <img src="https://placehold.co/1038x711" />
      </Stack>
    </Stack>
  );
}
