import {
  CaseContainer,
  Header,
  Image,
  Layout,
  List,
  ProgressTracker,
  Stack,
  StepTitle,
  Title,
  Typography,
  ViewNext
} from '@/components';
import { ProgressTrackerContainer } from '@/components/ProgressTracker/styles';
import { aiCaseStudyContent, aiCaseStudyTitles } from '@/data/aiCaseStudy';
import { useMemo, useRef } from 'react';

import hero from '@/pages/AICaseStudy/assets/hero.webp';
import genai from '@/pages/AICaseStudy/assets/genai.webp';
import supportchat from '@/pages/AICaseStudy/assets/supportchat.webp';
import aisummary from '@/pages/AICaseStudy/assets/aisummary.webp';
import voice from '@/pages/AICaseStudy/assets/voice.webp';
import ideation from '@/pages/AICaseStudy/assets/ideation.webp';
import handoff from '@/pages/AICaseStudy/assets/handoff.webp';

export function AICaseStudy() {
  const introRef = useRef<HTMLDivElement>(null);
  const generativeAIRef = useRef<HTMLDivElement>(null);
  const supportChatRef = useRef<HTMLDivElement>(null);
  const aiSummaryRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  const tableOfContent = useMemo(
    () => [
      { title: aiCaseStudyTitles.tableOfContent.intro, ref: introRef },
      {
        title: aiCaseStudyTitles.tableOfContent.generativeAI,
        ref: generativeAIRef
      },
      {
        title: aiCaseStudyTitles.tableOfContent.supportChat,
        ref: supportChatRef
      },
      { title: aiCaseStudyTitles.tableOfContent.aiSummary, ref: aiSummaryRef },
      { title: aiCaseStudyTitles.tableOfContent.voice, ref: voiceRef },
      { title: aiCaseStudyTitles.tableOfContent.value, ref: valueRef },
      { title: aiCaseStudyTitles.tableOfContent.outcomes, ref: outcomesRef }
    ],
    []
  );

  return (
    <Layout>
      <Header.Feature title={aiCaseStudyTitles.title} />
      <ProgressTrackerContainer>
        <ProgressTracker
          overview={{
            timeline: 'Several sprints',
            teams: 'Product, Developers, QA',
            tools: 'Cursor, Claude AI, Figma, Mobbin',
            methods: 'Workflow analysis, Concept testing, Usability testing'
          }}
          tableOfContent={tableOfContent}
        />
        <CaseContainer
          header={
            <Image
              src={hero}
              containerStyle={{ marginBottom: '2rem' }}
            />
          }>
          <div ref={introRef}>
            <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
              Overview
            </Typography>
            <Typography>{aiCaseStudyContent.overview}</Typography>
          </div>
          <div ref={generativeAIRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.generativeAI}</Title>
            <Stack direction="column" gap="1rem">
              {aiCaseStudyContent.genai.map((paragraph, i) => (
                <Typography key={i}>{paragraph}</Typography>
              ))}
            </Stack>
            <Image
              src={genai}
              canEnlarge
              containerStyle={{ marginTop: '1.5rem' }}
            />
          </div>
          <div ref={supportChatRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.supportChat}</Title>
            <Stack direction="column" gap="1rem">
              {aiCaseStudyContent.support.map((paragraph, i) => (
                <Typography key={i}>{paragraph}</Typography>
              ))}
            </Stack>
            <Image
              src={supportchat}
              canEnlarge
              containerStyle={{ marginTop: '1.5rem' }}
            />
          </div>
          <div ref={aiSummaryRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.aiSummary}</Title>
            <Stack direction="column" gap="1rem">
              {aiCaseStudyContent.aisummary.map((paragraph, i) => (
                <Typography key={i}>{paragraph}</Typography>
              ))}
            </Stack>
            <Image
              src={aisummary}
              canEnlarge
              containerStyle={{ marginTop: '1.5rem' }}
            />
          </div>
          <div ref={voiceRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.voice}</Title>
            <Stack direction="column" gap="1rem">
              {aiCaseStudyContent.voice.map((paragraph, i) => (
                <Typography key={i}>{paragraph}</Typography>
              ))}
            </Stack>
            <Image
              src={voice}
              canEnlarge
              containerStyle={{ marginTop: '1.5rem' }}
            />
          </div>
          <div ref={valueRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.value}</Title>
            <Typography sx={{ marginBottom: '2rem' }}>
              {aiCaseStudyContent.valueIntro}
            </Typography>
            <Stack direction="column" gap="2rem">
              <Stack direction="column" gap="1rem">
                <StepTitle>Ideation & Prototyping</StepTitle>
                <Typography>{aiCaseStudyContent.ideation}</Typography>
                <Image
                  src={ideation}
                  canEnlarge
                  containerStyle={{ marginTop: '0.5rem' }}
                />
              </Stack>
              <Stack direction="column" gap="1rem">
                <StepTitle>Feedback & Validation</StepTitle>
                <Typography>{aiCaseStudyContent.feedback}</Typography>
              </Stack>
              <Stack direction="column" gap="1rem">
                <StepTitle>Documentation & Handoff</StepTitle>
                <Typography>{aiCaseStudyContent.handoff}</Typography>
                <Image
                  src={handoff}
                  canEnlarge
                  containerStyle={{ marginTop: '0.5rem' }}
                />
              </Stack>
            </Stack>
            <Typography sx={{ marginTop: '2rem' }}>
              {aiCaseStudyContent.valueClose}
            </Typography>
          </div>
          <div ref={outcomesRef}>
            <Title>{aiCaseStudyTitles.tableOfContent.outcomes}</Title>
            <Stack gap="2.5rem" direction="column">
              <Stack gap="2rem" direction="column">
                <Stack gap="1rem" direction="column">
                  <Typography variant="h3">Key Takeaways</Typography>
                  <Typography>{aiCaseStudyContent.keyTakeaways}</Typography>
                </Stack>
                <Stack gap="1rem" direction="column">
                  <Typography variant="h3">Next Steps</Typography>
                  <List>
                    {aiCaseStudyContent.nextSteps.map((item, i) => (
                      <List.Item key={i}>{item}</List.Item>
                    ))}
                  </List>
                </Stack>
              </Stack>
              <ViewNext />
            </Stack>
          </div>
        </CaseContainer>
      </ProgressTrackerContainer>
    </Layout>
  );
}
