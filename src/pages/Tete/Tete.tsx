import {
  CaseContainer,
  Header,
  Layout,
  List,
  Stack,
  Typography
} from '@/components';

import { UserPersona } from './components/UserPersona/UserPersona';
import { Analysis, KeyActivities } from './components';

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
              <List>
                <List.Item>
                  at least %50 more first-time appointments in a book;
                </List.Item>
                <List.Item>up to %80 less information inquiry calls;</List.Item>
                <List.Item>
                  at least %70 of clients’ trust in competency of stylists.
                </List.Item>
              </List>
            </Stack>
            <Stack direction="column" css={{ flex: '1 1 50%' }}>
              <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                Solutions
              </Typography>
              <List>
                <List.Item>
                  Change information architecture of the website.
                </List.Item>
                <List.Item>
                  Eliminate distractions and unnecessary data.
                </List.Item>
                <List.Item>
                  Chunk and logically group the information.
                </List.Item>
                <List.Item>
                  Provide lacking information based on user’s insights.
                </List.Item>
              </List>
            </Stack>
          </Stack>
          {/* Outcomes */}
          <Stack gap="1rem" direction="column">
            <Typography variant="h3">Outcomes</Typography>
            <List>
              <List.Item>
                The updated design was well received within Tete-A-Tete company.
              </List.Item>
              <List.Item>
                It increased communication within the company.
              </List.Item>
              <List.Item>
                It inspired stylists to document their best works in order to
                showcase their skills and expertise.
              </List.Item>
            </List>
          </Stack>
        </Stack>
        <Stack gap="2.5rem" direction="column">
          {/* KEYS ACTIVITIES */}
          <KeyActivities title={tableOfContent.activities} />
          {/* USER PERSONA */}
          <UserPersona title={tableOfContent.persona} />
          {/* ANALYSIS */}
          <Analysis title={tableOfContent.analysis} />
        </Stack>
      </CaseContainer>
    </Layout>
  );
}
