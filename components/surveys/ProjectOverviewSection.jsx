import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";

import { ProjectOverview, MethodsInfoBox } from "@/components/surveys";

export function ProjectOverviewSection() {
  return (
    <>
      <ProjectOverview />
      <div className="mt-8">
        <ProjectSectionHeader className={"text-left"}>
          Problem
        </ProjectSectionHeader>
        <p>
          Our organization acquired a new product, and it required a redesign in
          order to comply with the design system. Besides changing the look and
          feel, we found the redesign to be a great opportunity to elevate a
          user experience as a whole as the product was far from being
          user-friendly. The goal was to identify the issues that users
          experience with the existing design, so we can solve the right
          problems and make informed decisions while prioritizing feature
          enhancements.
        </p>
      </div>
      <div className="mt-8">
        <ProjectSectionHeader className={"text-left"}>
          Methods
        </ProjectSectionHeader>
        <p>
          To collect feedback around the pain points users face using the
          software we used the following user research techniques – Surveys and
          User Interviews.
        </p>
      </div>
      <MethodsInfoBox />
    </>
  );
}
