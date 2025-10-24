import {
  CaseContainer,
  Header,
  Layout,
  Stack,
  StepTitle,
  Title,
  Typography
} from '@/components';
import { ImageContainer } from '../LikertScale/components';
import { ActivityBoxBig, ActivityBoxSmall, ActivityGrid } from './styles';
import { activities } from '@/data/tete';

const tableOfContent = {
  problem: 'Problem',
  activities: 'Key Activities',
  persona: 'User Persona',
  analysis: 'Website Analysis & Solutions',
  wireframing: 'Wireframing',
  nextSteps: 'Next Steps'
};

export function Tete() {
  return (
    <Layout>
      <Header.Feature title={'Website Redesign'} />
      <CaseContainer>
        {/* PROBLEM */}
        <Stack gap="2rem" direction="column">
          {/* Problem */}
          <Stack gap="1rem" direction="column">
            <Typography variant="h3">{tableOfContent.problem}</Typography>
            <Typography>
              Tete-A-Tete salon is a local hairsalon serving the Newton area
              since 1999. The main purpose of having a website for Tete-A-Tete
              is providing the information necessary for visiting the salon.
              However, the surveys have shown that users often have difficulties
              navigating the website and have no other choice but to contact the
              salon in order to get info.
            </Typography>
          </Stack>
          {/* Benchmark &  Solutions*/}
          <Stack gap="1.5rem">
            <Stack direction="column" css={{ flex: '1 1 50%' }}>
              <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                Benchmark criteria
              </Typography>
              <Typography>
                After redesigning the website we expect Tete-A-Tete salon to
                have:
              </Typography>
              <ul style={{ marginLeft: '1rem' }}>
                <Typography as={'li'}>
                  at least %50 more first-time appointments in a book;
                </Typography>
                <Typography as={'li'}>
                  up to %80 less information inquiry calls;
                </Typography>
                <Typography as={'li'}>
                  at least %70 of clients’ trust in competency of stylists.
                </Typography>
              </ul>
            </Stack>
            <Stack direction="column" css={{ flex: '1 1 50%' }}>
              <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                Solutions
              </Typography>
              <ul style={{ marginLeft: '1rem' }}>
                <Typography as={'li'}>
                  Change information architecture of the website.
                </Typography>
                <Typography as={'li'}>
                  Eliminate distractions and unnecessary data.
                </Typography>
                <Typography as={'li'}>
                  Chunk and logically group the information.
                </Typography>
                <Typography as={'li'}>
                  Provide lacking information based on user’s insights.
                </Typography>
              </ul>
            </Stack>
          </Stack>
          {/* Outcomes */}
          <Stack gap="1rem" direction="column">
            <Typography variant="h3">Outcomes</Typography>
            <ul style={{ marginLeft: '1rem' }}>
              <Typography as={'li'}>
                The updated design was well received within Tete-A-Tete company.
              </Typography>
              <Typography as={'li'}>
                It increased communication within the company.
              </Typography>
              <Typography as={'li'}>
                It inspired stylists to document their best works in order to
                showcase their skills and expertise.
              </Typography>
            </ul>
          </Stack>
        </Stack>
        <Stack gap="2.5rem" direction="column">
          {/* KEYS ACTIVITIES */}
          <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
            <Typography variant="h1">{tableOfContent.activities}</Typography>
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

              <Stack gap="0.5rem"></Stack>
              <Stack gap="0.5rem"></Stack>
              <Stack gap="0.5rem"></Stack>
              <Stack gap="0.5rem"></Stack>
            </Stack>
          </Stack>
          {/* USER PERSONA */}
          <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
            <Typography variant="h1">{tableOfContent.persona}</Typography>
          </Stack>
        </Stack>
      </CaseContainer>
    </Layout>
  );
}
