import Image from "next/image";

import question1 from "public/images/surveys/question1.png";
import question2 from "public/images/surveys/question2.png";
import question3 from "public/images/surveys/question3.png";
import question4 from "public/images/surveys/question4.png";
import question5 from "public/images/surveys/question5.png";

export function SurveyQuestions() {
  return (
    <div
      className="boxShadow py-4 rounded-xl mt-6 mb-8"
      style={{ backgroundColor: "#EDE6E4" }}
    >
      <h4 className="text-lg text-center font-bold">Survey Questions</h4>
      <div className="flex items-center lg:flex-row flex-col md:px-20 px-8 lg:px-0">
        <div className="w-full flex flex-col">
          <Image src={question1} width={424} height={200} />
          <Image src={question2} width={424} height={220} />
        </div>
        <div className="w-full flex flex-col justify-center">
          <Image src={question3} width={424} height={200} />
          <Image src={question4} width={424} height={200} />
          <Image src={question5} width={424} height={200} />
        </div>
      </div>
    </div>
  );
}
