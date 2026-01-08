import {
  Button,
  CaseContainer,
  Header,
  Image,
  Layout,
  List,
  Stack,
  Title,
  Typography,
  ViewNext
} from '@/components';

import { UserPersona } from './components/UserPersona/UserPersona';
import { Analysis, KeyActivities } from './components';
import { UsabilityTesting } from './components/UsabilityTesting/UsabilityTesting';
import { ProgressTracker, Preview } from '@/components';
import { ProgressTrackerContainer } from '@/components/ProgressTracker/styles';
import { useMemo, useRef } from 'react';
import { OutcomesContainer } from './styles';

import desktop from '@/pages/Tete/assets/tete-a-tete.webp';
import mobile from '@/pages/Tete/assets/mobile.webp';

export function Tete() {
  const problemRef = useRef<HTMLDivElement>(null);
  const keyActivitiesRef = useRef<HTMLDivElement>(null);
  const userPersonaRef = useRef<HTMLDivElement>(null);
  const analysisRef = useRef<HTMLDivElement>(null);
  const usabilityRef = useRef<HTMLDivElement>(null);
  const nextStepsRef = useRef<HTMLDivElement>(null);

  const tableOfContent = useMemo(
    () => [
      { title: 'Problem', ref: problemRef },
      { title: 'Key Activities', ref: keyActivitiesRef },
      { title: 'User Persona', ref: userPersonaRef },
      { title: 'Website Analysis & Solutions', ref: analysisRef },
      { title: 'Usability Testing', ref: usabilityRef },
      { title: 'Next Steps', ref: nextStepsRef }
    ],
    []
  );
  return (
    <Layout>
      <Header.Feature title={'Website Redesign'}>
        <Button
          onClick={() => window.open('https://teteatetesalon.com/', '_blank')}>
          VISIT WEBSITE
        </Button>
      </Header.Feature>
      <ProgressTrackerContainer>
        <ProgressTracker
          overview={{
            timeline: '2 months',
            teams: 'Developer & Designer',
            tools: 'Figma, InVision',
            methods: 'User Interviews, Competitive Analysis'
          }}
          tableOfContent={tableOfContent}
        />
        <CaseContainer>
          <Preview
            desktop={<Image src={desktop} height="364px" />}
            mobile={<Image src={mobile} height="364px" width="200px" />}
          />
          {/* PROBLEM */}
          <Stack gap="2rem" direction="column" css={{ marginBottom: '2.5rem' }}>
            {/* Problem */}
            <Stack gap="1rem" direction="column" ref={problemRef}>
              <Typography variant="h3">{tableOfContent[0].title}</Typography>
              <Typography>
                Tete-A-Tete salon is a local hairsalon serving the Newton area
                since 1999. The main purpose of having a website for Tete-A-Tete
                is providing the information necessary for visiting the salon.
                However, the surveys have shown that users often have
                difficulties navigating the website and have no other choice but
                to contact the salon in order to get info.
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
                  <List.Item>
                    up to %80 less information inquiry calls;
                  </List.Item>
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
            <OutcomesContainer gap="1rem" direction="column">
              <Typography variant="h3">Outcomes</Typography>
              <List>
                <List.Item>
                  The updated design was well received within Tete-A-Tete
                  company.
                </List.Item>
                <List.Item>
                  It increased communication within the company.
                </List.Item>
                <List.Item>
                  It inspired stylists to document their best works in order to
                  showcase their skills and expertise.
                </List.Item>
              </List>
              <div />
            </OutcomesContainer>
          </Stack>
          {/* KEYS ACTIVITIES */}
          <KeyActivities
            title={tableOfContent[1].title}
            ref={keyActivitiesRef}
          />
          {/* USER PERSONA */}
          <UserPersona title={tableOfContent[2].title} ref={userPersonaRef} />
          {/* ANALYSIS */}
          <Analysis title={tableOfContent[3].title} ref={analysisRef} />
          {/* USABILITY TESTING */}
          <UsabilityTesting
            title={tableOfContent[4].title}
            ref={usabilityRef}
          />
          <Title>Outcomes</Title>
          <Stack direction="column" gap="2.5rem">
            <Stack direction="column" gap="1rem" ref={nextStepsRef}>
              <Typography variant="h3">Next Steps</Typography>
              <List>
                <List.Item>
                  Keep up to date online appearance (Instagram and Facebook).
                </List.Item>
                <List.Item>Add online booking feature.</List.Item>
                <List.Item>
                  Launch new marketing campaigns via Constant Contact.
                </List.Item>
                <List.Item>Collaborate with Groupon.</List.Item>
              </List>
            </Stack>
            <ViewNext />
          </Stack>
        </CaseContainer>
      </ProgressTrackerContainer>
    </Layout>
  );
}
