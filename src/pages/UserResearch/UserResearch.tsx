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
import { ImageContainer } from '../LikertScale/components';
import { useMemo, useRef } from 'react';
import { DataSolutions } from './components/DataSolutions';

import header from '@/pages/UserResearch/assets/header.webp';
import surveys from '@/pages/UserResearch/assets/surveys.jpg';
import q1 from '@/pages/UserResearch/assets/q1.webp';
import q2 from '@/pages/UserResearch/assets/q2.webp';
import q3 from '@/pages/UserResearch/assets/q3.webp';
import q4 from '@/pages/UserResearch/assets/q4.webp';
import q5 from '@/pages/UserResearch/assets/q5.webp';
import Chart1 from '@/pages/UserResearch/assets/Chart1.webp';
import Chart2 from '@/pages/UserResearch/assets/Chart2.webp';
import Chart3 from '@/pages/UserResearch/assets/Chart3.webp';
import data1 from '@/pages/UserResearch/assets/data1.webp';
import data2 from '@/pages/UserResearch/assets/data2.webp';
import inter1 from '@/pages/UserResearch/assets/inter1.webp';
import inter2 from '@/pages/UserResearch/assets/inter2.webp';
import f1 from '@/pages/UserResearch/assets/f1.webp';
import f2 from '@/pages/UserResearch/assets/f2.webp';
import f3 from '@/pages/UserResearch/assets/f3.webp';
import f4 from '@/pages/UserResearch/assets/f4.webp';
import f5 from '@/pages/UserResearch/assets/f5.webp';
import {
  BorderBox,
  BorderBoxContent,
  QuantitativeDataContainer,
  SurveyBorderBox,
  SurveyBorderBoxContent
} from './styles';
import { InterviewPreparation } from './components/InterviewPreparation';

export function UserResearch() {
  const problemRef = useRef<HTMLDivElement>(null);
  const surveysRef = useRef<HTMLDivElement>(null);
  const interviewsRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  const tableOfContent = useMemo(
    () => [
      { title: 'Problem', ref: problemRef },
      { title: 'Surveys', ref: surveysRef },
      { title: 'User Interviews', ref: interviewsRef },
      { title: 'Outcomes', ref: outcomesRef }
    ],
    []
  );
  return (
    <Layout>
      <Header.Feature title={'User Research'} />
      <ProgressTracker.Container>
        <ProgressTracker
          overview={{
            timeline: '2 months',
            teams: 'Product, Client Success',
            tools: 'Survey Monkey, Otter.ai, FigJam',
            methods: 'Surveys, User Interviews'
          }}
          tableOfContent={tableOfContent}
        />

        <CaseContainer
          header={
            <Image
              src={header}
              objectFit="cover"
              height="200px"
              containerStyle={{ marginBottom: '2rem' }}
            />
          }>
          <div ref={problemRef}>
            <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
              {tableOfContent[0].title}
            </Typography>
            <Typography>
              Our organization acquired a new product, and it required a
              redesign in order to comply with the design system. Besides
              changing the look and feel, we found the redesign to be a great
              opportunity to elevate a user experience as a whole as the product
              was far from being user-friendly. The goal was to identify the
              issues that users experience with the existing design, so we can
              solve the right problems and make informed decisions while
              prioritizing feature enhancements.
            </Typography>
            <DataSolutions />
          </div>
          <div ref={surveysRef}>
            <Title>{tableOfContent[1].title}</Title>
            <Stack direction="column" gap="2rem">
              <BorderBox>
                <Image src={surveys} objectFit="cover" />
                <BorderBoxContent>
                  <Typography variant="subtitle18">Objectives</Typography>
                  <List type="ol">
                    <List.Item>
                      Collect information on the usage of features.
                    </List.Item>
                    <List.Item>
                      Measure difficulty of the product features.
                    </List.Item>
                    <List.Item>
                      Create an opportunity for responders to provide
                      qualitative data.
                    </List.Item>
                    <List.Item>
                      Get an insight on the overall customer satisfaction.
                    </List.Item>
                    <List.Item>
                      Recruit participants for user interviews.
                    </List.Item>
                  </List>
                </BorderBoxContent>
              </BorderBox>
              <Stack direction="column" gap="1rem">
                <StepTitle no={1}>Send Surveys</StepTitle>
                <Typography>
                  Based on the list of objectives we crafted 5 survey questions
                  and sent out the form to all our users via Survey Monkey.
                  Below you can see the questions we asked our users in order to
                  nail each one of our objectives.
                </Typography>
              </Stack>
              <SurveyBorderBox>
                <Typography variant="subtitle18">Survey Questions</Typography>
                <SurveyBorderBoxContent>
                  <Stack direction="column" justifyContent="space-evenly">
                    <Image src={q1} />
                    <Image src={q2} />
                  </Stack>
                  <Stack direction="column">
                    <Image src={q3} />
                    <Image src={q4} />
                    <Image src={q5} />
                  </Stack>
                </SurveyBorderBoxContent>
              </SurveyBorderBox>
              <Stack direction="column" gap="1rem">
                <StepTitle no={2}>Analyze Quantitative Data</StepTitle>
                <Typography>
                  Once we received the answers from the surveys we compared the
                  data of the feature usage, the difficulty rating and the
                  number of comments for each feature. These numbers helped us
                  better understand the overall customer satisfaction and
                  identify the features we should pay closer attention during
                  the next stages of our research. Down the road, they also
                  helped us to define the priorities of the final research
                  findings.
                </Typography>
              </Stack>
              <QuantitativeDataContainer>
                <Image src={Chart1} height="341px" canEnlarge />
                <Image canEnlarge src={Chart2} height="281px" />
                <Image canEnlarge src={Chart3} height="344px" />
              </QuantitativeDataContainer>
              <Stack direction="column" gap="1rem">
                <StepTitle no={3}>Analyze Qualitative Data</StepTitle>
                <Typography>
                  To synthesize the answers from the open question, we
                  consolidated all the feedback in a spreadsheet and used tags
                  to break it down into pages. I read the responses looking for
                  tendencies and put them into notes using FigJam. Once I
                  organized the responses into an affinity map and created
                  problem statements for each group, we got the list the of
                  statements sorted by the amount of the relative feedback.
                  Based on that we defined the main areas of concern that we
                  further studied during the user interviews.
                </Typography>
              </Stack>
              <ImageContainer>
                <Image src={data1} objectFit="cover" canEnlarge />
                <Image src={data2} objectFit="cover" canEnlarge />
              </ImageContainer>
            </Stack>
          </div>
          <div ref={interviewsRef}>
            {/*  -------- USER INTERVIEWS -------- */}
            <Title>{tableOfContent[2].title}</Title>
            <Stack direction="column" gap="1.5rem">
              <Stack direction="column" gap="1rem">
                <StepTitle no={1}>Preparation</StepTitle>
                <Typography>
                  We started the second phase of our research with defining the
                  areas of the product that require more detailed dive in and
                  framed the objectives as well as the list of questions for
                  each one of them (please see below). Besides the specific
                  questions about the product features we also made sure to
                  include few introductory questions as well as more general
                  ones, so users have an opportunity to give us a better context
                  on how they interact with the product and provide information
                  beyond our objectives.
                </Typography>
                <InterviewPreparation />
              </Stack>
              <Stack direction="column" gap="1rem">
                <StepTitle no={2}>Conduct Interviews</StepTitle>
                <Typography>
                  10 interviews got scheduled over the course of 3 weeks. Each
                  interview session lasted approximately 30 min and was recorded
                  via Microsoft Teams. Recording interviews not only helped us
                  to keep a live conversation, focus on answers and come up with
                  follow-up questions but also to make sure we are not losing
                  any feedback. Luckily, all the participants were kind enough
                  to give us a consent for video recording. Using the AI tool,
                  Otter.ai, I transcribed all the interviews and created
                  documentation of the responses that can be easily accessed by
                  other team members and stored at the company’s repository. The
                  documentation includes transcripts and the Excel spreadsheet
                  where I organized the answers by the areas of the product that
                  we were focusing on.
                </Typography>
                <ImageContainer>
                  <Image
                    src={inter1}
                    canEnlarge
                    containerStyle={{
                      border: '1px solid #C6C6C9',
                      boxShadow: `0px 0px 16px 0px rgba(0, 0, 0, 0.25)`
                    }}
                  />
                  <Image
                    src={inter2}
                    canEnlarge
                    containerStyle={{
                      border: '1px solid #C6C6C9',
                      boxShadow: `0px 0px 16px 0px rgba(0, 0, 0, 0.25)`
                    }}
                  />
                </ImageContainer>
              </Stack>
              <Stack direction="column" gap="1rem">
                <StepTitle no={3}>Synthesize Findings</StepTitle>
                <Typography>
                  As I created another affinity map in FigJam, I named each
                  tendency and ranked them by the amount of feedback included.
                  The top tendencies got the names and the problem statements.
                  Comparing the list of problem statements created for both
                  Survey and User Interview findings helped me estimate the
                  importance of problems from the user's standpoint. As you can
                  see from the clusters below, the order of problems importance
                  has slightly changed in comparison to the survey findings and
                  one My Account area got substituted with Demographic Reports.
                </Typography>
                <Stack
                  css={{
                    '@media (max-width: 1024px)': { flexDirection: 'column' }
                  }}>
                  <Image
                    src={f1}
                    canEnlarge
                    objectFit="scale-down"
                    height="300px"
                  />
                  <Image
                    src={f2}
                    canEnlarge
                    objectFit="scale-down"
                    height="300px"
                  />
                  <Image
                    src={f3}
                    canEnlarge
                    objectFit="scale-down"
                    height="300px"
                  />
                  <Image
                    src={f4}
                    canEnlarge
                    objectFit="scale-down"
                    height="300px"
                  />
                  <Image
                    src={f5}
                    canEnlarge
                    objectFit="scale-down"
                    height="300px"
                  />
                </Stack>
              </Stack>
            </Stack>
          </div>
          {/*  -------- OUTCOMES -------- */}
          <div ref={outcomesRef}>
            <Title>{tableOfContent[3].title}</Title>
            <Stack direction="column" gap="2rem">
              <Stack direction="column" gap="1rem">
                <Typography variant="h3">Conclusions</Typography>
                <Typography>
                  The lesson that I have learned during our research is to
                  always stay open-minded. The survey results gave us an idea of
                  what problems our users are facing and what functionality they
                  would like to see in our product to make their workflows more
                  efficient. However, listening to what our users had to say
                  during the interviews not only made us think of some of the
                  existing features at the completely new angle and understand
                  all the why's behind new feature requests but also opened our
                  eyes on the areas of the product we did not even consider and
                  their importance at the overall user experience. For, example,
                  one of the key findings was that users would like to have a
                  dashboard that would provide them a quick overview of their
                  progress and suggest the action they need take next while the
                  current dashboard was designed to accelerate the process of
                  logging hours and did not give users an idea of what’s going
                  across the product.
                </Typography>
              </Stack>
              <Stack direction="column" gap="1rem">
                <Typography variant="h3">Next Steps</Typography>
                <Typography>
                  The product team and I are planning to use Effort vs Impact
                  Quadrant to figure out what problems can be solved now with
                  available time and resources and create the roadmap for the
                  upcoming redesign. Once we create the prototype, we will
                  conduct usability testing with users we recruited during the
                  interviews.
                </Typography>
              </Stack>
              <ViewNext />
            </Stack>
          </div>
        </CaseContainer>
      </ProgressTracker.Container>
    </Layout>
  );
}
