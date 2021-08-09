import Layout from "@/components/Layout";
import Image from "next/image";
import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import ProjectOverview from "@/components/projectDefaults/ProjectOverview";
import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";
import ProjectStatementParagraph from "@/components/projectDefaults/ProjectStatementParagraph";
import PrototypeOverview from "@/components/projectDefaults/PrototypeOverview";
import WebsiteAnalysis from "@/components/projectDefaults/WebsiteAnalysis";
import ProjectUsabilityTesting from "@/components/tete/ProjectUsabilityTesting";
import NextSteps from "@/components/projectDefaults/ProjectNextSteps";
import ScrollButton from "@/components/ScrollButton";
import ProjectMenu from "@/components/projectDefaults/ProjectMenu";
import ScrollNavigation from "react-single-page-navigation";
import overview from "@/components/tete/overview";
import NextProjectCarousel from "@/components/projectDefaults/NextProjectCarousel";
import {
  bloom,
  seeds,
  venmo,
  nassans,
} from "@/components/projectDefaults/NextProjectList";
import problem from "@/components/tete/problems";
import solution from "@/components/tete/solutions";
import activities from "public/images/tete-a-tete/activities.png";
import userScenario from "public/images/tete-a-tete/user-scenario.png";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};

export default function Tete() {
  React.useEffect(() => smoothscroll.polyfill());
  return (
    <Layout title="Tete-a-Tete | Daria Khudiakova">
      <ScrollNavigation elements={elements} offset={160}>
        {({ refs, activeElement, goTo }) => (
          <div className="relative xl:max-w-4/6 md:max-w-3/4 max-w-90 mx-auto">
            <ProjectMenu
              activeElement={activeElement}
              go1={() => goTo("EL1")}
              go2={() => goTo("EL2")}
              go3={() => goTo("EL3")}
              go4={() => goTo("EL4")}
              go5={() => goTo("EL5")}
              title1="Our user"
              title2="Analysis & solutions"
              title3="Wireframing"
              title4="Usability Tests"
              title5="Next Steps"
            />
            <ProjectOverview
              title="Tete-A-Tete salon website redesign"
              timeline="2 months"
              team="2 (1 designer, 1 engineer)"
              tools="Figma, InVision"
            />
            <PrototypeOverview
              desktop="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/teteatete-desktop.mp4"
              mobile="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/teteatete-mobile.mp4"
              link="https://teteatetesalon.daria-in-design.com/"
              poster={{
                desktop: "images/tete-a-tete/tete-poster-desktop.png",
                mobile: "images/tete-a-tete/tete-poster-mobile.png",
              }}
            />
            <ProjectStatementParagraph title="Problem statement">
              {overview[0].statement}
            </ProjectStatementParagraph>
            <ProjectStatementParagraph title="Benchmark criteria">
              {overview[0].benchmark}
            </ProjectStatementParagraph>
            <ProjectStatementParagraph title="Solutions">
              {overview[0].solutions}
            </ProjectStatementParagraph>
            <ProjectStatementParagraph title="Outcomes">
              {overview[0].outcomes}
            </ProjectStatementParagraph>
            {/* Key activities */}
            <div className="text-center">
              <ProjectSectionHeader header="Key activities" />
              <Image
                alt="Key activities"
                src={activities}
                quality={100}
                width={950}
                height={900}
                loading={"eager"}
                placeholder="blur"
              />
            </div>
            {/* Our user */}
            <div className="text-center" ref={refs.EL1}>
              <ProjectSectionHeader header="Our user" />
              <Image
                alt="Key activities"
                src={userScenario}
                quality={100}
                width={1000}
                height={1000}
                loading={"eager"}
                placeholder="blur"
              />
            </div>
            {/* Analysis */}
            <div ref={refs.EL2}>
              <WebsiteAnalysis
                problem={problem}
                solution={solution}
                header={"Website analysis and solutions"}
              />
            </div>
            {/* Wireframing */}
            <div ref={refs.EL3}>
              <ProjectSectionHeader header="Wireframing" />
              <div className="shadow-lg">
                <video className="static w-full" controls loop muted>
                  <source
                    src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/teteatete-wireframe.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Usability testing */}
            <div ref={refs.EL4}>
              <ProjectUsabilityTesting />
            </div>
            {/* Next steps */}
            <div ref={refs.EL5}>
              <NextSteps title={"Next steps:"}>
                <li>
                  Keep up to date online appearance on the social networks such
                  as Instagram and Facebook.
                </li>
                <li>Add online booking feature.</li>
                <li>Launch new marketing campaigns via Constant Contact.</li>
                <li>Collaborate with Groupon.</li>
              </NextSteps>
            </div>
          </div>
        )}
      </ScrollNavigation>
      <ScrollButton />
      <NextProjectCarousel>
        {bloom}
        {seeds}
        {venmo}
        {nassans}
      </NextProjectCarousel>
    </Layout>
  );
}
