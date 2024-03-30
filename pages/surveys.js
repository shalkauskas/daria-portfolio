import React from "react";
import Layout from "@/components/Layout";
import smoothscroll from "smoothscroll-polyfill";
import ScrollNavigation from "react-single-page-navigation";

import {
  bloom,
  seeds,
  venmo,
  nassans,
  tete,
} from "@/components/projectDefaults/NextProjectList";
import ScrollButton from "@/components/ScrollButton";
import NextProjectCarousel from "@/components/projectDefaults/NextProjectCarousel";
import ProjectMenu from "@/components/projectDefaults/ProjectMenu";
import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";

import {
  Outcomes,
  ProjectOverviewSection,
  SurveysSection,
  UsersInterviews,
} from "../components/surveys";

export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  // EL4: {},
};

export default function Surveys() {
  React.useEffect(() => smoothscroll.polyfill());

  return (
    <Layout title="Surveys & User Interviews | Daria Khudiakova">
      <ScrollNavigation elements={elements} offset={160}>
        {({ refs, activeElement, goTo }) => (
          <div className="relative 2xl:max-w-1/2 xl:max-w-4/6 lg:max-w-3/4 md:max-w-3/4 max-w-90 mx-auto">
            <div ref={refs.EL1}>
              <h2 className="mt-3 text-center font-bold text-4xl mb-12">
                Surveys & User Interviews
              </h2>
              <ProjectOverviewSection />
            </div>

            <div ref={refs.EL2}>
              <ProjectSectionHeader>Surveys</ProjectSectionHeader>
              <SurveysSection />
            </div>
            <div ref={refs.EL3}>
              <ProjectSectionHeader>Users Interviews</ProjectSectionHeader>
              <UsersInterviews />
            </div>
            <div ref={refs.EL4}>
              <ProjectSectionHeader>Outcomes</ProjectSectionHeader>
              <Outcomes />
            </div>
            <ProjectMenu
              activeElement={activeElement}
              go1={() => goTo("EL1")}
              go2={() => goTo("EL2")}
              go3={() => goTo("EL3")}
              go4={() => goTo("EL4")}
              title1="Project Overview"
              title2="Surveys"
              title3="User Interviews"
              title4="Outcomes"
            />
          </div>
        )}
      </ScrollNavigation>

      <ScrollButton />
      <NextProjectCarousel>
        {nassans}
        {tete}
        {seeds}
        {bloom}
        {venmo}
      </NextProjectCarousel>
    </Layout>
  );
}
