import {
  CaseContainer,
  Header,
  Layout,
  List,
  ProgressTracker,
  Stack,
  Typography
} from '@/components';
import { ProgressTrackerContainer } from '@/components/ProgressTracker/styles';
import { useMemo, useRef } from 'react';
import { OutcomesContainer } from '../Tete/styles';
import { Research } from './components/Research';

export function ReviewProcess() {
  const introRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const designIterationsRef = useRef<HTMLDivElement>(null);
  const problemSolvingRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const tableOfContent = useMemo(
    () => [
      { title: 'Intro', ref: introRef },
      { title: 'Research', ref: researchRef },
      { title: 'Design & Iterations', ref: designIterationsRef },
      { title: 'Problem Solving', ref: problemSolvingRef },
      { title: 'Outcomes', ref: outcomesRef }
    ],
    []
  );

  return (
    <Layout>
      <Header.Feature title={'Application Review Process Redesign'} />
      <ProgressTrackerContainer>
        <ProgressTracker
          overview={{
            timeline: '1 month',
            teams: 'Product, Developers, QA',
            tools: 'Figma',
            methods: 'Competitive analysis, Usability Testing'
          }}
          tableOfContent={tableOfContent}
        />
        <CaseContainer>
          <Stack gap="2rem" direction="column" ref={introRef}>
            <Stack gap="1rem" direction="column">
              <Typography variant="h3">Problem</Typography>
              <Typography>
                Residency application reviewers find it difficult to efficiently
                access, compare, and evaluate applicant information due to a
                cluttered, non-intuitive interface that requires excessive
                scrolling, clicking, and context-switching. This leads to
                reviewer fatigue, inconsistency in evaluations, and longer
                review times.
              </Typography>
            </Stack>
            <OutcomesContainer gap="1rem" direction="column">
              <Typography variant="h3">Outcomes</Typography>
              <List>
                <List.Item>
                  The redesign of the application review process helped the
                  company to stand out among competitors at the conference and
                  resulted in signing new clients.
                </List.Item>
                <List.Item>
                  Existing clients were very excited about the changes and
                  admitted that their reviewing process became more efficient.
                </List.Item>
                <List.Item>
                  100% customer satisfaction resulted in a better client
                  retention.
                </List.Item>
              </List>
            </OutcomesContainer>
          </Stack>
          <Research />
        </CaseContainer>
      </ProgressTrackerContainer>
    </Layout>
  );
}
