import { Stack, StepTitle, Typography } from '@/components';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';

export function ProblemSolving() {
  return (
    <Stack gap="2rem" direction="column">
      <Typography>
        After many rounds of feedback and iteration we found our holy grail. To
        cover the benefits of the new design and talk a bit more about the
        problems that we were solving, I would like to show you the Before/After
        comparison of old screens with the new ones.
      </Typography>
      <Stack gap="1rem" direction="column">
        <StepTitle no={1} title="Problem">
          Navigation and Summary
        </StepTitle>
        <Tab1 />
      </Stack>
      <Stack gap="1rem" direction="column">
        <StepTitle no={2} title="Problem">
          Form Runtime
        </StepTitle>
        <Tab2 />
      </Stack>
      <Stack gap="1rem" direction="column">
        <StepTitle no={3} title="Problem">
          Letters of Recommendations
        </StepTitle>
        <Tab3 />
      </Stack>
    </Stack>
  );
}
