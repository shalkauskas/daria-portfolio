import Image from "next/image";

import charts from "public/images/surveys/charts.png";
import qdata1 from "public/images/surveys/qdata1.png";
import qdata2 from "public/images/surveys/qdata2.png";

import { SurveysSectionCard } from "./SurveysSectionCard";
import { SurveyQuestions } from "./SurveyQuestions";
import { StepTitle } from "./StepTitle";

export function SurveysSection() {
  return (
    <>
      <SurveysSectionCard />
      <StepTitle>Step 1. Send Surveys</StepTitle>
      <p>
        Based on the list of objectives we crafted 5 survey questions and sent
        out the form to all our users via Survey Monkey. Below you can see the
        questions we asked our users in order to nail each one of our
        objectives.
      </p>
      <SurveyQuestions />
      <StepTitle>Step 2. Analyze Quantitative Data</StepTitle>
      <p className="mb-6">
        Once we received the answers from the surveys we compared the data of
        the feature usage, the difficulty rating and the number of comments for
        each feature. These numbers helped us better understand the overall
        customer satisfaction and identify the features we should pay closer
        attention during the next stages of our research. Down the road, they
        also helped us to define the priorities of the final research findings.
      </p>
      <Image src={charts} width={920} height={509} />
      <StepTitle>Step 3. Analyze Qualitative Data</StepTitle>
      <p className="mb-6">
        To synthesize the answers from the open question, we consolidated all
        the feedback in a spreadsheet and used tags to break it down into pages.
        I read the responses looking for tendencies and put them into notes
        using FigJam. Once I organized the responses into an affinity map and
        created problem statements for each group, we got the list the of
        statements sorted by the amount of the relative feedback. Based on that
        we defined the main areas of concern that we further studied during the
        user interviews.
      </p>
      <div className="flex flex-col md:flex-row">
        <Image src={qdata1} width={448} height={287} />
        <Image src={qdata2} width={448} height={287} />
      </div>
    </>
  );
}
