import { List, Stack, StepTitle, Typography } from '@/components';
import { Persona } from './Persona';
import {
  persona1Bio,
  persona1Goals,
  persona1Needs,
  persona1PainPoints,
  persona1Scenario,
  persona1TasksAndResponsibilities
} from './data';
import persona1Image from '@/pages/ReviewProcess/assets/persona1.png';

export function Research() {
  return (
    <Stack gap="2rem" direction="column">
      <Stack gap="1rem" direction="column">
        <StepTitle no={1}>Create Personas</StepTitle>
        <Typography>
          I started the research with identifying personas and reached out to
          the main channel of communication with the clients – Product Manager.
          The Product Manager helped me to single out two primary personas based
          on her client knowledge – Residency Program Director and Residency
          Application Reviewer. After that, I did research on the reviewing
          process as well as major tasks and pain points for these personas.
          Please view the summary of both personas below.
        </Typography>
        <Persona
          personaBio={persona1Bio}
          personaImage={persona1Image}
          personaScenario={persona1Scenario}
          personaGoals={persona1Goals}
          personaPainPoints={persona1PainPoints}
          personaTasksAndResponsibilities={persona1TasksAndResponsibilities}
          personaNeeds={persona1Needs}
        />
      </Stack>
      <Stack gap="1rem" direction="column">
        <StepTitle no={2}>Define & Ideate</StepTitle>
        <Typography>
          In addition to personas, I reviewed the solutions of the competitor
          softwares. Once I collected all the information and presented it to
          the product team we had a brainstorming session. During that meeting
          we came up with the list of improvements that we need to make to help
          our personas achieve their goals. The list includes the following:
        </Typography>
        <List>
          <List.Item>
            Remove extra noise and move away from the 3 column layout.
          </List.Item>
          <List.Item>
            Include the timeline chart that will allow users to have a high
            level view on the applicant’s career path.
          </List.Item>
          <List.Item>
            Provide a way for users to quickly find and jump into the zones of
            interest.
          </List.Item>
          <List.Item>
            Allow users to review forms and attachments while having the review
            rubric open in the same view.
          </List.Item>
          <List.Item>Reduce scrolling through the forms.</List.Item>
          <List.Item>
            Enable users to favorite the information that plays the most
            important role in their decision making process.
          </List.Item>
        </List>
        <Typography>
          Besides the user-oriented goals we also had a business goal – create a
          more visually appealing design than our competitors offer. There were
          few Residency conferences where our leadership presented the redesign
          so this project was our chance to stand out and attract new clients.
        </Typography>
      </Stack>
    </Stack>
  );
}
