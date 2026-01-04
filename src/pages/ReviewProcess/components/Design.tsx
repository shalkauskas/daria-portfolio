import { Image, Stack, StepTitle, Title, Typography } from '@/components';
import drawer from '@/pages/ReviewProcess/assets/drawer.png';

export function Design() {
  return (
    <Stack gap="2rem" direction="column">
      <Title>Design & Iterations </Title>
      <Typography>
        During the design and prototype process I have created about 30 versions
        that the product team and I were running by internal teams, stakeholders
        and clients to get a feedback. Our leadership was preparing to show the
        design on a conference so we were on a tight schedule. Nevertheless, we
        managed to get a meaningful feedback via presentations and A/B testing.
        There were a couple of versions that did not make it to the final
        product but had its supporters. I would like to share a few words about
        them as they speak up to the main challenge that we were to trying solve
        – application navigation.
      </Typography>
      <StepTitle no={1}>Drawer Menu</StepTitle>
      <Image
        src={drawer}
        canEnlarge
        containerStyle={{ maxWidth: '800px', margin: '0 auto' }}
      />
      <Typography>
        We wanted to move away from the 3-column layout and allow user to have a
        full width view of the application. That’s why I considered having the
        drawer menu in the fixed header so user can jump to the relevant area of
        interest as they scroll through the application. Even though this
        version grabbed a lot of attention and had good reviews, the main
        concern was discoverability. Users wanted to have the options always
        visible on a screen.
      </Typography>
      <StepTitle no={2}>Collapsible Left Panel</StepTitle>
      {/* <Image src={tab} canEnlarge containerStyle={{ maxWidth: '800px', margin: '0 auto' }} /> */}
      <Typography>
        To have all the options and additional navigational mechanisms always
        visible, we tried to keep the menu but made it collapsible and limited
        the options to the top level items. The problem with this approach was
        that we also needed the review rubric available inline with the
        application. Having the editable form in the left panel was against our
        patterns and overall best practices. We also had a request to get rid of
        the 3-column layout that made the page look convoluted. The solution
        that I came up with was to have only one panel expanded at a time. For
        example, if user has a left panel open and they would click to open the
        review panel on the right, the former panel would automatically
        collapse. This approach worked from the flow perspective since users did
        not have a need to look at both panel at the same time. However, the
        transition between the panel felt confusing to users so we decided to
        move away from this solution.
      </Typography>
    </Stack>
  );
}
