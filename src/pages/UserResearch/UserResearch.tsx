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

const tableOfContent = {
  problem: 'Problem',
  surveys: 'Surveys',
  interviews: 'User Interviews',
  outcomes: 'Outcomes'
};

export function UserResearch() {
  return (
    <Layout>
      <Header.Feature title={'User Research'} />
      <CaseContainer>
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
          {tableOfContent.problem}
        </Typography>
        <Typography>
          Our organization acquired a new product, and it required a redesign in
          order to comply with the design system. Besides changing the look and
          feel, we found the redesign to be a great opportunity to elevate a
          user experience as a whole as the product was far from being
          user-friendly. The goal was to identify the issues that users
          experience with the existing design, so we can solve the right
          problems and make informed decisions while prioritizing feature
          enhancements.
        </Typography>
        <img
          src="https://placehold.co/1037x112"
          style={{
            margin: '40px 0'
          }}
        />
        <Title>{tableOfContent.surveys}</Title>
        <Stack direction="column" gap="1.5rem">
          <img src="https://placehold.co/1037x281" />
          <Stack direction="column" gap="1.5rem">
            <StepTitle no={1}>Send Surveys</StepTitle>
            <Typography>
              Based on the list of objectives we crafted 5 survey questions and
              sent out the form to all our users via Survey Monkey. Below you
              can see the questions we asked our users in order to nail each one
              of our objectives.
            </Typography>
          </Stack>
          <img src="https://placehold.co/1037x629" />
          <Stack direction="column" gap="1.5rem">
            <StepTitle no={2}>Analyze Quantitative Data</StepTitle>
            <Typography>
              Once we received the answers from the surveys we compared the data
              of the feature usage, the difficulty rating and the number of
              comments for each feature. These numbers helped us better
              understand the overall customer satisfaction and identify the
              features we should pay closer attention during the next stages of
              our research. Down the road, they also helped us to define the
              priorities of the final research findings.
            </Typography>
          </Stack>
          <img src="https://placehold.co/1037x460" />
          <Stack direction="column" gap="1.5rem">
            <StepTitle no={3}>Analyze Qualitative Data</StepTitle>
            <Typography>
              To synthesize the answers from the open question, we consolidated
              all the feedback in a spreadsheet and used tags to break it down
              into pages. I read the responses looking for tendencies and put
              them into notes using FigJam. Once I organized the responses into
              an affinity map and created problem statements for each group, we
              got the list the of statements sorted by the amount of the
              relative feedback. Based on that we defined the main areas of
              concern that we further studied during the user interviews.
            </Typography>
          </Stack>
          <ImageContainer>
            <img src="https://placehold.co/500x319" />
            <img src="https://placehold.co/500x319" />
          </ImageContainer>
        </Stack>
        {/*  -------- USER INTERVIEWS -------- */}
        <Title>{tableOfContent.interviews}</Title>
        <Stack direction="column" gap="1.5rem">
          <StepTitle no={1}>Preparation</StepTitle>
          <Typography>
            We started the second phase of our research with defining the areas
            of the product that require more detailed dive in and framed the
            objectives as well as the list of questions for each one of them
            (please see below). Besides the specific questions about the product
            features we also made sure to include few introductory questions as
            well as more general ones, so users have an opportunity to give us a
            better context on how they interact with the product and provide
            information beyond our objectives.
          </Typography>
          <img src="https://placehold.co/1037x497" />
          <StepTitle no={2}>Conduct Interviews</StepTitle>
          <Typography>
            10 interviews got scheduled over the course of 3 weeks. Each
            interview session lasted approximately 30 min and was recorded via
            Microsoft Teams. Recording interviews not only helped us to keep a
            live conversation, focus on answers and come up with follow-up
            questions but also to make sure we are not losing any feedback.
            Luckily, all the participants were kind enough to give us a consent
            for video recording. Using the AI tool, Otter.ai, I transcribed all
            the interviews and created documentation of the responses that can
            be easily accessed by other team members and stored at the company’s
            repository. The documentation includes transcripts and the Excel
            spreadsheet where I organized the answers by the areas of the
            product that we were focusing on.
          </Typography>
          <ImageContainer>
            <img src="https://placehold.co/500x300" />
            <img src="https://placehold.co/500x300" />
          </ImageContainer>
          <StepTitle no={3}>Synthesize Findings</StepTitle>
          <Typography>
            As I created another affinity map in FigJam, I named each tendency
            and ranked them by the amount of feedback included. The top
            tendencies got the names and the problem statements. Comparing the
            list of problem statements created for both Survey and User
            Interview findings helped me estimate the importance of problems
            from the user's standpoint. As you can see from the clusters below,
            the order of problems importance has slightly changed in comparison
            to the survey findings and one My Account area got substituted with
            Demographic Reports.
          </Typography>
          <img src="https://placehold.co/1036x275" />
        </Stack>
        {/*  -------- OUTCOMES -------- */}
        <Title>{tableOfContent.outcomes}</Title>
        <Stack direction="column" gap="1rem">
          <Typography variant="h3">Conclusions</Typography>
          <Typography>
            The lesson that I have learned during our research is to always stay
            open-minded. The survey results gave us an idea of what problems our
            users are facing and what functionality they would like to see in
            our product to make their workflows more efficient. However,
            listening to what our users had to say during the interviews not
            only made us think of some of the existing features at the
            completely new angle and understand all the why's behind new feature
            requests but also opened our eyes on the areas of the product we did
            not even consider and their importance at the overall user
            experience. For, example, one of the key findings was that users
            would like to have a dashboard that would provide them a quick
            overview of their progress and suggest the action they need take
            next while the current dashboard was designed to accelerate the
            process of logging hours and did not give users an idea of what’s
            going across the product.
          </Typography>
          <Typography variant="h3">Next Steps</Typography>
          <Typography>
            The product team and I are planning to use Effort vs Impact Quadrant
            to figure out what problems can be solved now with available time
            and resources and create the roadmap for the upcoming redesign. Once
            we create the prototype, we will conduct usability testing with
            users we recruited during the interviews.
          </Typography>
        </Stack>
      </CaseContainer>
    </Layout>
  );
}
