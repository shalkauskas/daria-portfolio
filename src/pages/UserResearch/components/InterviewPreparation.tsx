import { Stack, Typography } from '@/components';
import { InterviewPreparationContainer, Title } from './styles';

export function InterviewPreparation() {
  return (
    <InterviewPreparationContainer>
      <Stack direction="column" gap="1rem">
        <Title variant="h1">
          <span>1.</span> Assessment
        </Title>
        <Typography variant="body18">
          Explore how users envision using custom batteries of assessments and
          templates to make their workflow more efficient.
        </Typography>
      </Stack>
      <Stack direction="column" gap="1rem">
        <Title variant="h1">
          <span>2.</span> Activities
        </Title>
        <Typography variant="body18">
          Learn more about users’ challenges when they enter and edit activities
          and thoughts about the better logic (there were few suggestions to
          associate clients with treatment settings, etc.)
        </Typography>
      </Stack>
      <Stack direction="column" gap="1rem">
        <Title variant="h1">
          <span>3.</span> Approvals
        </Title>
        <Typography variant="body18">
          Find out the cause of confusion users have when they submit their
          approvals.
        </Typography>
      </Stack>
      <Stack direction="column" gap="1rem">
        <Title variant="h1">
          <span>4.</span> My Account
        </Title>
        <Typography variant="body18">
          Understand why users have a hard time changing their accounts.
        </Typography>
      </Stack>
      <Stack direction="column" gap="1rem">
        <Title variant="h1">
          <span>5.</span> Mobile
        </Title>
        <Typography variant="body18">
          Find out what features users prefer using on mobile vs desktop,
          understand why and learn what features they do want to use on mobile.
        </Typography>
      </Stack>
    </InterviewPreparationContainer>
  );
}
