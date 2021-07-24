import React from "react";
import Layout from "@/components/Layout";
import smoothscroll from "smoothscroll-polyfill";
import ScrollNavigation from "react-single-page-navigation";
import ProjectMenu from "@/components/projectDefaults/ProjectMenu";
import NextProjectCarousel from "@/components/projectDefaults/NextProjectCarousel";
import {
  bloom,
  seeds,
  tete,
} from "@/components/projectDefaults/NextProjectList";
import ScrollButton from "@/components/ScrollButton";
import ProjectOverview from "@/components/projectDefaults/ProjectOverview";
import PrototypeOverview from "@/components/projectDefaults/PrototypeOverview";
import ProjectStatementParagraph from "@/components/projectDefaults/ProjectStatementParagraph";
import overview from "@/components/nassans/overview";
import OurUser from "../components/nassans/OurUser";
import InformationArchitecture from "@/components/nassans/InformationArchitecture";
import WebsiteAnalysis from "@/components/projectDefaults/WebsiteAnalysis";
import { problem, titles } from "@/components/nassans/problems";
import solution from "@/components/nassans/solutions";
import ComparativeAnalysis from "@/components/nassans/ComparativeAnalysis";
import Wireframing from "@/components/nassans/Wireframing";
import NextSteps from "@/components/projectDefaults/ProjectNextSteps";
import WaveBox from "@/components/nassans/WaveBox";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};
export default function Nassans() {
  React.useEffect(() => smoothscroll.polyfill());
  return (
    <Layout title="Nassan's Place | Daria Khudiakova">
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
              title1="Our users"
              title2="Information architecture"
              title3="Analysis & solutions"
              title4="Sketching & Wireframing"
              title5="Next steps"
            />
            <ProjectOverview
              title="The Nassan’s Place website redesign"
              timeline="2 months"
              tools="Wix, Figma"
            />
            <PrototypeOverview
              link="https://www.nassansplace.org/"
              desktop=""
              mobile=""
            />
            <ProjectStatementParagraph title="The client:">
              {overview[0].client}
            </ProjectStatementParagraph>
            <WaveBox>
              <div className="flex">
                <div className="flex-1 pr-8">
                  <h2 className="font-bold py-4">Problem:</h2>
                  <p>
                    Initially Nadine Wright-Arbubakkr reached out to me with the
                    concern about visual aesthetics of the website. However,
                    after user research it became clear that there are also a
                    bunch of usability problems that cause difficulty for users
                    to find the information they need.
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold py-4">Objectives:</h2>
                  <ul className="list-disc list-inside">
                    <li>Improve overall site architecture and navigation</li>
                    <li>
                      Enable easier browsing and a more frictionless experience
                    </li>
                    <li>
                      Create a more user-friendly website based on user needs
                      and habits.
                    </li>
                    <li>Fix usability issues by changing UI design.</li>
                  </ul>
                </div>
              </div>
            </WaveBox>
            <ProjectStatementParagraph title="My role & outcomes:">
              {overview[0].role}
            </ProjectStatementParagraph>
            <ProjectStatementParagraph title="Challenges & constraints:">
              {overview[0].challenges}
            </ProjectStatementParagraph>
            <div ref={refs.EL1}>
              <OurUser />
            </div>
            <div ref={refs.EL2}>
              <InformationArchitecture />
            </div>
            <div ref={refs.EL3}>
              <WebsiteAnalysis
                problem={problem}
                solution={solution}
                titles={titles}
                header={"Website analysis"}
              />
            </div>
            <ComparativeAnalysis />
            <div ref={refs.EL4}>
              <Wireframing />
            </div>
            <div ref={refs.EL5}>
              <NextSteps title={"Next steps"}>
                <li>
                  Add descriptions and pictures to the list of programs Nassan’s
                  Place offers.
                </li>
                <li>
                  Put the pictures from past events in a single gallery with a
                  way to sort them out.
                </li>
                <li>Provide a way to contact directors by email.</li>
              </NextSteps>
            </div>
          </div>
        )}
      </ScrollNavigation>
      <ScrollButton />
      <NextProjectCarousel>
        {tete}
        {bloom}
        {seeds}
      </NextProjectCarousel>
    </Layout>
  );
}
