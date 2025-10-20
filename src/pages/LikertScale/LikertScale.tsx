import {
  CaseContainer,
  Header,
  Layout,
  Stack,
  StepTitle,
  Typography
} from '@/components';
import { likertScaleContent, likertScaleTitles } from '@/data/likertScale';
import { FlexContainer } from './styles';
import { ImageContainer } from './components';

export function LikertScale() {
  return (
    <Layout>
      <Header.Feature title={likertScaleTitles.title} />
      <CaseContainer>
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
          {likertScaleTitles.tableOfContent.problem}
        </Typography>
        <Typography
          sx={{
            marginBottom: '0.5rem'
          }}>
          {likertScaleContent.problem}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            margin: '2rem 0'
          }}>
          UX Process
        </Typography>
        <StepTitle no={1}>{likertScaleTitles.tableOfContent.define}</StepTitle>
        <FlexContainer>
          <Typography>{likertScaleContent.define1}</Typography>
          <ol style={{ marginLeft: '1rem' }}>
            {likertScaleContent.defineList.map((item, i) => (
              <li key={i} style={{ fontWeight: 700 }}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </ol>
          <Typography>{likertScaleContent.define2}</Typography>
          <Typography>{likertScaleContent.define3}</Typography>
        </FlexContainer>
        <StepTitle no={2}>
          {likertScaleTitles.tableOfContent.research}
        </StepTitle>
        <Typography
          sx={{
            marginBottom: '1.5rem'
          }}>
          {likertScaleContent.research1}
        </Typography>
        <ImageContainer subtitle="Google Docs">
          <img src="https://placehold.co/450x350" />
          <Stack css={{ gap: '1.5rem' }}>
            <img src="https://placehold.co/271x350" />
            <img src="https://placehold.co/271x350" />
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
          <img src="https://placehold.co/507x338" />
          <img src="https://placehold.co/507x338" />
        </ImageContainer>
        <Typography
          sx={{
            margin: '1rem 0 1.5rem'
          }}>
          <strong>Pros: </strong>
          On mobile devices the table turns into form. As a result users do not
          need to struggle with the horizontal scroll and the questions are
          shown in more legible way instead of being squeezed into a column.
        </Typography>
        <Typography
          sx={{
            margin: '1rem 0 1.5rem'
          }}>
          <strong>Cons: </strong>
          On desktop, long questions make cells very tall, the column headers
          are hard to read. On mobile, there is no clear hierarchy. It is hard
          to tell that all the questions belong to a group especially if the
          likert scale group is surrounded by other question types. Duplicating
          the answers for each question make the form extremely long.
        </Typography>
        <ImageContainer subtitle="JotForms">
          <img src="https://placehold.co/450x350" />
          <Stack css={{ gap: '1.5rem' }}>
            <img src="https://placehold.co/271x350" />
            <img src="https://placehold.co/271x350" />
          </Stack>
        </ImageContainer>
        <Typography
          sx={{
            margin: '1rem 0 1.5rem'
          }}>
          <strong>Cons: </strong>
          On desktop, long questions make cells very tall. Column headers are
          hard to read. On mobile, the table is very hard to use because users
          have to constantly scroll in both directions to read the questions and
          answers and make sure they are making selection at the correct row.
        </Typography>
        <StepTitle no={3}>{likertScaleTitles.tableOfContent.ideate}</StepTitle>
        <Stack
          css={{
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
          <Stack css={{ gap: '1.5rem' }}>
            <img src="https://placehold.co/506x300" />
            <Typography>
              While I liked the Survey Monkey mobile solution that shows the
              likert scale group question as a form rather than a table, it had
              a drawback of taking too much vertical space by repeating answers
              over and over. Since our user personas tend to create long forms,
              using so much vertical space would blow up the form and add some
              unnecessary scrolling for a person filling out the form.
            </Typography>
          </Stack>
          <Stack css={{ gap: '1.5rem' }}>
            <Typography>
              To solve this problem I came up with idea of hiding the answers
              under accordions. I put each question into a card and shown the
              answer options only when the card is selected. To save even more
              vertical space, I have truncated the questions after two lines and
              presented the full question only when the accordion gets opened.
              The card subtitle shows an answer to the question or has a
              placeholder “Select Answer” if empty. Having the answers always
              visible on closed cards allows users to scan through the form and
              check if everything is correct before submitting a form.
            </Typography>
            <img src="https://placehold.co/507x300" />
          </Stack>
        </Stack>
        <StepTitle no={4}>{likertScaleTitles.tableOfContent.iterate}</StepTitle>
        <Stack css={{ flexDirection: 'column', gap: '1.5rem' }}>
          <Typography>
            Once I presented designs to the internal teams, we received very
            positive feedback. My colleagues also suggested me an awesome idea
            to automatically close cards once user selects the radio button. I
            realized that could be a great time saver for users and included
            this behavior in the next iteration. One of the developers
            recommended to have chevrons fixed at the top so they don’t jump
            when the card gets opened in case question is very long. We also
            started wondering whether the solution initially created for smaller
            devices (tablet and mobile) can be applied on a desktop. We believed
            that our solution was solid but still hesitated whether we should
            change the iconic look of the likert scale group question type to
            something completely new and unfamiliar to people.
          </Typography>
          <ImageContainer>
            <img src="https://placehold.co/507x338" />
            <img src="https://placehold.co/507x338" />
          </ImageContainer>
          <Typography>
            Ultimately, we have decided that the best way to find out if users
            are comfortable with the change is to present our solution to
            clients. We were very pleased to learn that they are ready for such
            a drastic change and right away identified the benefits of the new
            designs. Clients were so happy with the change that they actually
            requested to re-build the likert scale component for other product
            they were using as well. Doing so required more resources since the
            other product was built on a different stack. However, the company’s
            leadership found it to be a good investment that would keep this
            client as well as the others happy with our services. Thus, we
            updated other product as well.
          </Typography>
        </Stack>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            margin: '2rem 0'
          }}>
          {likertScaleTitles.tableOfContent.outcomes}
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
          Conclusions
        </Typography>
        <Typography>
          This project taught us that even established patterns need to be
          questioned as technology constantly evolves and users’ expectation
          change. Our device agnostic design not only improved user experience
          on all devices but also saved company’s resources by eliminating the
          need to build separate solutions for desktop and mobile. This work
          involved a lot of collaboration between various teams. Each team
          brought a valuable insight that greatly improved the initial concept.
          Our teamwork and aspiration to create a better experience for users
          resulted in another successful release.
        </Typography>
      </CaseContainer>
    </Layout>
  );
}
