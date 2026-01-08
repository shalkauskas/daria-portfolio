import {
  CaseContainer,
  Header,
  Image,
  Layout,
  List,
  ProgressTracker,
  Stack,
  Title,
  Typography,
  ViewNext
} from '@/components';
import { ProgressTrackerContainer } from '@/components/ProgressTracker/styles';
import { useMemo, useRef } from 'react';
import { OutcomesContainer } from '../Tete/styles';
import { Research } from './components/Research';
import { Design } from './components/Design';
import { ProblemSolving } from './components/ProblemSolving';
import desktop from '@/pages/Tete/assets/desktop.png';
import { CenteredDesktopVideo, PreviewOverlayContainer } from './styles';

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
            <PreviewOverlayContainer>
              <Image
                src={desktop}
                height="364px"
                objectFit="scale-down"
                containerStyle={{ textAlign: 'center' }}
              />
              <CenteredDesktopVideo
                controls
                src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/applicationReview.mov"
                height="290px"
                width="490px"
              />
            </PreviewOverlayContainer>
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
              <div />
            </OutcomesContainer>
          </Stack>
          <div ref={researchRef}>
            <Title>Research</Title>
            <Research />
          </div>
          <div ref={designIterationsRef}>
            <Title>Design & Iterations </Title>
            <Design />
          </div>
          <div ref={problemSolvingRef}>
            <Title>Problem Solving</Title>
            <ProblemSolving />
          </div>
          <Stack direction="column" ref={outcomesRef}>
            <Title>Outcomes</Title>
            <Stack gap="2.5rem" direction="column">
              <Stack gap="2rem" direction="column">
                <Stack gap="1rem" direction="column">
                  <Typography variant="h3">Key Takeaways</Typography>
                  <Typography>
                    Feedback from both external and internal teams played a
                    crucial role in shaping a great user experience.
                    Collaboration across departments—such as product, design,
                    engineering, and support—allowed us to identify pain points,
                    streamline features, and align the experience with our
                    overall vision. Insights from users, clients, and partners
                    gave us valuable perspective on real-world usage, revealing
                    opportunities for improvement we might have otherwise
                    missed. This two-way feedback loop enabled us to iterate
                    thoughtfully, prioritize meaningful updates, and ultimately
                    deliver a product that is intuitive, reliable, and aligned
                    with user needs.
                  </Typography>
                </Stack>
                <Stack gap="1rem" direction="column">
                  <Typography variant="h3">Next Steps</Typography>
                  <List>
                    <List.Item>
                      Use monitoring tool such as Clarity for tracking the key
                      metrics
                    </List.Item>
                    <List.Item>
                      Get qualitative feedback on the customer satisfaction via
                      surveys
                    </List.Item>
                    <List.Item>
                      Enhance the experience by introducing AI-powered features
                    </List.Item>
                  </List>
                </Stack>
              </Stack>
              <ViewNext />
            </Stack>
          </Stack>
        </CaseContainer>
      </ProgressTrackerContainer>
    </Layout>
  );
}
