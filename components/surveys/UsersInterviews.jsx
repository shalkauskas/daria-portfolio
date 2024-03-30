import Image from "next/image";
import { PreparationStep } from "./PreparationStep";
import { StepTitle } from "./StepTitle";

import interviews1 from "public/images/surveys/interviews1.png";
import interviews2 from "public/images/surveys/interviews2.png";
import findingsCharts from "public/images/surveys/findingsCharts.png";

export function UsersInterviews() {
  return (
    <>
      <StepTitle>Step 1. Preparation</StepTitle>
      <p className="mb-6">
        We started the second phase of our research with defining the areas of
        the product that require more detailed dive in and framed the objectives
        as well as the list of questions for each one of them (please see
        below). Besides the specific questions about the product features we
        also made sure to include few introductory questions as well as more
        general ones, so users have an opportunity to give us a better context
        on how they interact with the product and provide information beyond our
        objectives.
      </p>
      <PreparationStep />
      <StepTitle>Step 2. Conduct Interviews</StepTitle>
      <p className="mb-6">
        10 interviews got scheduled over the course of 3 weeks. Each interview
        session lasted approximately 30 min and was recorded via Microsoft
        Teams. Recording interviews not only helped us to keep a live
        conversation, focus on answers and come up with follow-up questions but
        also to make sure we are not losing any feedback. Luckily all the
        participants were kind enough to give us a consent for video recording.
        Using the AI tool, Otter.ai, I transcribed all the interviews and
        created documentation of the responses that can be easily accessed by
        other team members and stored at the company’s repository. The
        documentation includes transcripts and the Excel spreadsheet where I
        organized the answers by the areas of the product that we were focusing
        on.
      </p>
      <div className="flex flex-col md:flex-row">
        <Image src={interviews1} width={448} height={287} />
        <Image src={interviews2} width={448} height={287} />
      </div>
      <StepTitle>Step 3. Synthesize Findings</StepTitle>
      <p className="mb-12">
        As I created another affinity map in FigJam, I named each tendency and
        ranked them by the amount of feedback included. The top tendencies got
        the names and the problem statements. Comparing the list of problem
        statements created for both Survey and User Interview findings helped me
        estimate the importance of problems from the user's standpoint. As you
        can see from the clusters below, the order of problems importance has
        slightly changed in comparison to the survey findings and one My Account
        area got substituted with Demographic Reports.
      </p>
      <Image src={findingsCharts} width={922} height={275} />
    </>
  );
}
