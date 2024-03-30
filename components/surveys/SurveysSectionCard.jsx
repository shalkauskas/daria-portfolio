import Image from "next/dist/client/image";

import surveysSectionCard from "public/images/surveys/surveysSectionCard.png";

export function SurveysSectionCard() {
  return (
    <div className="boxShadow flex sm:flex-row flex-col rounded-xl">
      <div className="flex rounded-l-xl overflow-hidden">
        <Image src={surveysSectionCard} width={460} height={281} />
      </div>
      <div className="p-8 sm:w-1/2">
        <p className="text-lg font-bold mb-3">Objectives:</p>
        <ol className="list-decimal ml-4 flex flex-col gap-2">
          <li>Collect information on the usage of features.</li>
          <li>Measure difficulty of the product features.</li>
          <li>
            Create an opportunity for responders to provide qualitative data.
          </li>
          <li>Get an insight on the overall customer satisfaction.</li>
          <li>Recruit participants for user interviews.</li>
        </ol>
      </div>
    </div>
  );
}
