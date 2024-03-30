import Image from "next/image";

import surveys_overview from "public/images/surveys/surveys_overview.png";

export function ProjectOverview() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col boxShadow justify-between rounded-xl">
      <div className="p-10 lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-center font-bold text-2xl">Project Overview</h2>
        <div>
          <p className="text-lg font-bold">Timeline:</p>
          <p>2 months</p>
        </div>

        <div>
          <p className="text-lg font-bold">Team members:</p>
          <ul className="list-disc ml-4">
            <li>User Experience Designer</li>
            <li>Product Manager</li>
            <li>Client Success Manager</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold">Tools:</p>
          <ul className="list-disc ml-4">
            <li>Survey Monkey</li>
            <li>Otter.ai</li>
            <li>Fig Jam</li>
            <li>Microsoft Office Suite</li>
          </ul>
        </div>
      </div>
      <div className="flex rounded-r-xl overflow-hidden">
        <Image
          alt="Project overview"
          src={surveys_overview}
          quality={100}
          width={720}
          height={550}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
