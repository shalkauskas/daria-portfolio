import Layout from "@/components/Layout";
import Image from "next/image";
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
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};
export default function Bloom() {
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
              <img
                src="images/bloom.png"
                className="mx-auto"
                alt=""
                style={{ width: "250px" }}
              />
              <video
                className="mx-auto left-0 right-0 absolute"
                style={{ width: "218px", bottom: "60px" }}
                controls
                autoPlay
                muted
              >
                <source src="video/bloom.mp4" type="video/mp4" />
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
                src="/images/bloom/activities.png"
                quality={100}
                width={950}
                height={900}
              />
            </div>
            {/* Proto-persona */}
            <div className="text-center" ref={refs.EL1}>
              <ProjectSectionHeader header="Proto-persona" />
              <Image
                alt="Key activities"
                src="/images/bloom/proto-persona.png"
                quality={100}
                width={1000}
                height={650}
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
    </Layout>
  );
}
