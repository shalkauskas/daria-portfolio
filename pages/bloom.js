import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import ProjectStatement from "@/components/ProjectStatement";
import ProjectUsabilityTesting from "@/components/bloom/ProjectUsabilityTesting";
import NextSteps from "@/components/ProjectNextSteps";
import ScrollButton from "@/components/ScrollButton";
import ProjectMenu from "@/components/ProjectMenu";
import ScrollNavigation from "react-single-page-navigation";
import overview from "@/components/bloom/overview";
import Solutions from "@/components/bloom/solutions";
import Wireframing from "@/components/bloom/wireframing";
import NextProjectCarousel from "@/components/NextProjectCarousel";
import NextProjectItem from "@/components/NextProjectItem";
import smoothscroll from "smoothscroll-polyfill";
import activities from "/public/images/bloom/activities.png";
import protoPersona from "/public/images/bloom/proto-persona.png";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};
export default function Bloom() {
  React.useEffect(() => smoothscroll.polyfill());
  const tete = (
    <NextProjectItem
      title="Tete-A-Tete salon website redesign"
      image="tete-a-tete"
      imageStyle="laptop"
      color="#F7EEFF"
      link="/tete-a-tete"
    />
  );
  const bloom = (
    <NextProjectItem
      title='B2C application "Bloom"'
      image="bloom"
      color="#FFEEEC"
      link="/bloom"
      phone={true}
    />
  );
  const seeds = (
    <NextProjectItem
      title="Educational micro-course for Learning Seeds, Inc."
      image="learnseed"
      color="#C2F0FC"
      link="/learning-seeds"
    />
  );
  const venmo = (
    <NextProjectItem
      title="Donation feature for Venmo app (conceptual)"
      image="venmo"
      color="#BEEBE9"
      link="/venmo"
      phone={true}
    />
  );
  return (
    <Layout title="Work | daria@ux.com">
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
              title1="Proto-persona"
              title2="Solutions"
              title3="Sketching & wireframing"
              title4="Usability Tests"
              title5="My takeaways"
            />
            <ProjectOverview
              title={`"B2C application "Bloom"`}
              timeline="3 weeks"
              team="1 designer"
              tools="Sketch, InVision"
            />
            {/* prototype */}
            <div className={`container mx-auto relative mb-20`}>
              <picture>
                <source type="image/webp" srcSet={`images/bloom.webp`} />
                <source type="image/jpeg" srcSet={`images/bloom.png`} />
                <img
                  src="images/bloom.png"
                  className="mx-auto"
                  alt=""
                  style={{ width: "250px" }}
                />
              </picture>
              <video
                className="mx-auto left-0 right-0 absolute"
                style={{ width: "218px", bottom: "60px" }}
                controls
                muted
              >
                <source
                  src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/bloom.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <ProjectStatement
              statement={overview[0].statement}
              solutions={overview[0].solutions}
              outcomes={overview[0].outcomes}
            />
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
            {/* Proto-persona */}
            <div className="text-center" ref={refs.EL1}>
              <ProjectSectionHeader header="Proto-persona" />
              <Image
                alt="Key activities"
                src={protoPersona}
                quality={100}
                width={1000}
                height={650}
                loading={"eager"}
                placeholder="blur"
              />
            </div>
            {/* Solutions */}
            <div ref={refs.EL2}>
              <Solutions />
            </div>
            {/* Wireframing */}
            <div ref={refs.EL3}>
              <ProjectSectionHeader header="Sketching and wireframing" />
              <Wireframing />
            </div>
            {/* Usability testing */}
            <div ref={refs.EL4}>
              <ProjectUsabilityTesting />
            </div>
            {/* Next steps */}
            <div ref={refs.EL5}>
              <NextSteps
                title={"My takeaways"}
                list={
                  <ul className="list-disc list-inside">
                    <li>If conventions exist, follow them.</li>
                    <li>
                      Wearing unusual features in familiar designs is also a
                      good way introduce them to the user.
                    </li>
                    <li>Do not make your user think.</li>
                  </ul>
                }
              />
            </div>
          </div>
        )}
      </ScrollNavigation>
      <ScrollButton />
      <NextProjectCarousel
        children={tete}
        children2={seeds}
        children3={venmo}
      />
    </Layout>
  );
}
