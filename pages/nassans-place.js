import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
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
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
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
              title1="Our user"
              title2="Analysis & solutions"
              title3="Wireframing"
              title4="Usability Tests"
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
            <ProjectStatementParagraph title="My role & outcomes:">
              {overview[0].role}
            </ProjectStatementParagraph>
            <ProjectStatementParagraph title="Challenges & constraints:">
              {overview[0].challenges}
            </ProjectStatementParagraph>
            <OurUser />
            <div ref={refs.EL1}></div>
            <div ref={refs.EL2}></div>
            <div ref={refs.EL3}></div>
            <div ref={refs.EL4}></div>
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
