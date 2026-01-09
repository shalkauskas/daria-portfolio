import {
  CaseContainer,
  Header,
  Image,
  Layout,
  List,
  Preview,
  Stack,
  StepTitle,
  Title,
  Typography,
  ViewNext
} from '@/components';
import { likertScaleContent, likertScaleTitles } from '@/data/likertScale';
import {
  CenteredDesktopVideo,
  CenteredMobileVideo,
  GridContainer,
  PreviewOverlayContainer
} from './styles';
import { ImageContainer } from './components';
import { useMemo, useRef } from 'react';
import { ProgressTrackerContainer } from '@/components/ProgressTracker/styles';
import { ProgressTracker } from '@/components/ProgressTracker';

import res1 from '@/pages/LikertScale/assets/res1.webp';
import res2 from '@/pages/LikertScale/assets/res2.webp';
import res3 from '@/pages/LikertScale/assets/res3.webp';
import res4 from '@/pages/LikertScale/assets/res4.webp';
import res5 from '@/pages/LikertScale/assets/res5.webp';
import res6 from '@/pages/LikertScale/assets/res6.webp';
import res7 from '@/pages/LikertScale/assets/res7.webp';
import res8 from '@/pages/LikertScale/assets/res8.webp';
import ideate1 from '@/pages/LikertScale/assets/ideate1.webp';
import ideate2 from '@/pages/LikertScale/assets/ideate2.webp';
import iterate1 from '@/pages/LikertScale/assets/iterate1.webp';
import iterate2 from '@/pages/LikertScale/assets/iterate2.webp';
import desktop from '@/pages/LikertScale/assets/desktop.webp';

import mobile from '@/pages/Tete/assets/phone.png';

export function LikertScale() {
  const problemRef = useRef<HTMLDivElement>(null);
  const defineRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const ideateRef = useRef<HTMLDivElement>(null);
  const iterateRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  const tableOfContent = useMemo(
    () => [
      { title: 'Problem', ref: problemRef },
      { title: 'Define', ref: defineRef },
      { title: 'Research', ref: researchRef },
      { title: 'Ideate & Prototype', ref: ideateRef },
      { title: 'Get Feedback & Iterate', ref: iterateRef },
      { title: 'Outcomes', ref: outcomesRef }
    ],
    []
  );

  return (
    <Layout>
      <Header.Feature title={likertScaleTitles.title} />

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
          <div ref={problemRef}>
            <Preview
              desktop={
                <PreviewOverlayContainer>
                  <Image src={desktop} height="364px" objectFit="scale-down" />
                  <CenteredDesktopVideo
                    controls
                    src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/likertScaleDesktop.mov"
                  />
                </PreviewOverlayContainer>
              }
              mobile={
                <PreviewOverlayContainer>
                  <Image src={mobile} height="375px" width="375px" />
                  <CenteredMobileVideo
                    controls
                    src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/likertScaleMobile.mov"
                  />
                </PreviewOverlayContainer>
              }
            />

            <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
              {likertScaleTitles.tableOfContent.problem}
            </Typography>
            <Typography
              sx={{
                marginBottom: '0.5rem'
              }}>
              {likertScaleContent.problem}
            </Typography>
          </div>
          <Title>UX Process</Title>
          <Stack direction="column" gap="2rem" css={{ marginBottom: '1.5rem' }}>
            <Stack direction="column" gap="1rem" ref={defineRef}>
              <StepTitle no={1}>
                {likertScaleTitles.tableOfContent.define}
              </StepTitle>
              <Typography>{likertScaleContent.define1}</Typography>
              <List type="ol" boldMarker>
                {likertScaleContent.defineList.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
              <Typography>{likertScaleContent.define2}</Typography>
              <Typography>{likertScaleContent.define3}</Typography>
            </Stack>
            <Stack direction="column" gap="1rem" ref={researchRef}>
              <StepTitle no={2}>
                {likertScaleTitles.tableOfContent.research}
              </StepTitle>
              <Typography>{likertScaleContent.research1}</Typography>
            </Stack>
          </Stack>

          <ImageContainer subtitle="Google Docs">
            <Image
              src={res1}
              canEnlarge
              objectFit="cover"
              containerStyle={{ margin: '-12px' }}
            />
            <Stack css={{ gap: '1.5rem' }}>
              <Image
                src={res2}
                canEnlarge
                objectFit="cover"
                containerStyle={{ margin: '-12px' }}
              />
              <Image
                src={res3}
                canEnlarge
                objectFit="cover"
                containerStyle={{ margin: '-12px' }}
              />
            </Stack>
          </ImageContainer>
          <Typography
            sx={{
              margin: '1rem 0 1.5rem'
            }}>
            <strong>Cons: </strong>
            On desktop, long questions make table rows very tall, the column
            headers are hard to read. On mobile, even though the column with
            questions is fixed, the column headers get hidden as user progresses
            with the form
          </Typography>
          <ImageContainer subtitle="Survey Monkey">
            <Image src={res4} canEnlarge containerStyle={{ margin: '-16px' }} />
            <Image src={res5} canEnlarge containerStyle={{ margin: '-16px' }} />
          </ImageContainer>
          <Typography
            sx={{
              margin: '1rem 0 1.5rem'
            }}>
            <strong>Pros: </strong>
            On mobile devices the table turns into form. As a result users do
            not need to struggle with the horizontal scroll and the questions
            are shown in more legible way instead of being squeezed into a
            column.
          </Typography>
          <Typography
            sx={{
              margin: '1rem 0 1.5rem'
            }}>
            <strong>Cons: </strong>
            On desktop, long questions make cells very tall, the column headers
            are hard to read. On mobile, there is no clear hierarchy. It is hard
            to tell that all the questions belong to a group especially if the
            likert scale group is surrounded by other question types.
            Duplicating the answers for each question make the form extremely
            long.
          </Typography>
          <ImageContainer subtitle="JotForms">
            <Image
              objectFit="scale-down"
              src={res6}
              canEnlarge
              containerStyle={{ maxHeight: '500px', margin: '-16px' }}
            />
            <Stack
              css={{
                gap: '1.5rem',
                justifyContent: 'space-evenly'
              }}>
              <Image
                src={res7}
                canEnlarge
                containerStyle={{ maxHeight: '500px', margin: '-4px' }}
              />
              <Image
                src={res8}
                canEnlarge
                containerStyle={{ maxHeight: '500px', margin: '-4px' }}
              />
            </Stack>
          </ImageContainer>
          <Typography
            sx={{
              margin: '1rem 0 2rem'
            }}>
            <strong>Cons: </strong>
            On desktop, long questions make cells very tall. Column headers are
            hard to read. On mobile, the table is very hard to use because users
            have to constantly scroll in both directions to read the questions
            and answers and make sure they are making selection at the correct
            row.
          </Typography>

          <Stack direction="column" gap="1rem" ref={ideateRef}>
            <StepTitle no={3}>
              {likertScaleTitles.tableOfContent.ideate}
            </StepTitle>
            <GridContainer>
              <Image src={ideate1} canEnlarge />
              <Typography sx={{ padding: '1rem' }}>
                While I liked the Survey Monkey mobile solution that shows the
                likert scale group question as a form rather than a table, it
                had a drawback of taking too much vertical space by repeating
                answers over and over. Since our user personas tend to create
                long forms, using so much vertical space would blow up the form
                and add some unnecessary scrolling for a person filling out the
                form.
              </Typography>
            </GridContainer>
            <GridContainer
              css={{
                gridTemplateColumns: '1.2fr 1fr'
              }}>
              <Typography
                sx={{
                  padding: '1rem',
                  '@media (max-width: 1400px)': { order: 2 }
                }}>
                To solve this problem I came up with idea of hiding the answers
                under accordions. I put each question into a card and shown the
                answer options only when the card is selected. To save even more
                vertical space, I have truncated the questions after two lines
                and presented the full question only when the accordion gets
                opened. The card subtitle shows an answer to the question or has
                a placeholder “Select Answer” if empty. Having the answers
                always visible on closed cards allows users to scan through the
                form and check if everything is correct before submitting a
                form.
              </Typography>
              <Image
                src={ideate2}
                canEnlarge
                containerStyle={{ margin: 'auto', maxWidth: '506px' }}
              />
            </GridContainer>
          </Stack>
          <Stack
            css={{ flexDirection: 'column', gap: '1rem' }}
            ref={iterateRef}>
            <StepTitle no={4}>
              {likertScaleTitles.tableOfContent.iterate}
            </StepTitle>
            <Typography>
              Once I presented designs to the internal teams, we received very
              positive feedback. My colleagues also suggested me an awesome idea
              to automatically close cards once user selects the radio button. I
              realized that could be a great time saver for users and included
              this behavior in the next iteration. One of the developers
              recommended to have chevrons fixed at the top so they don’t jump
              when the card gets opened in case question is very long. We also
              started wondering whether the solution initially created for
              smaller devices (tablet and mobile) can be applied on a desktop.
              We believed that our solution was solid but still hesitated
              whether we should change the iconic look of the likert scale group
              question type to something completely new and unfamiliar to
              people.
            </Typography>
            <ImageContainer>
              <Image src={iterate1} canEnlarge />
              <Image src={iterate2} canEnlarge />
            </ImageContainer>
            <Typography>
              Ultimately, we have decided that the best way to find out if users
              are comfortable with the change is to present our solution to
              clients. We were very pleased to learn that they are ready for
              such a drastic change and right away identified the benefits of
              the new designs. Clients were so happy with the change that they
              actually requested to re-build the likert scale component for
              other product they were using as well. Doing so required more
              resources since the other product was built on a different stack.
              However, the company’s leadership found it to be a good investment
              that would keep this client as well as the others happy with our
              services. Thus, we updated other product as well.
            </Typography>
          </Stack>
          <Title>{likertScaleTitles.tableOfContent.outcomes}</Title>
          <Stack
            ref={outcomesRef}
            direction="column"
            gap="1rem"
            css={{ marginBottom: '2.5rem' }}>
            <Typography variant="h3">Conclusions</Typography>
            <Typography>
              This project taught us that even established patterns need to be
              questioned as technology constantly evolves and users’ expectation
              change. Our device agnostic design not only improved user
              experience on all devices but also saved company’s resources by
              eliminating the need to build separate solutions for desktop and
              mobile. This work involved a lot of collaboration between various
              teams. Each team brought a valuable insight that greatly improved
              the initial concept. Our teamwork and aspiration to create a
              better experience for users resulted in another successful
              release.
            </Typography>
          </Stack>
          <ViewNext />
        </CaseContainer>
      </ProgressTrackerContainer>
    </Layout>
  );
}
