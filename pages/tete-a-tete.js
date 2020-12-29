import Layout from "@/components/Layout";
import Image from "next/image";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import ProjectStatement from "@/components/ProjectStatement";
import PrototypeOverview from "@/components/tete/PrototypeOverview";
import ProjectAnalysis from "@/components/ProjectAnalysis";
import ProjectUsabilityTesting from "@/components/tete/ProjectUsabilityTesting";
import NextSteps from "@/components/ProjectNextSteps";
import ScrollButton from "@/components/ScrollButton";
import ProjectMenu from "@/components/ProjectMenu";
import ScrollNavigation from "react-single-page-navigation";
import overview from "@/components/tete/overview";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};

export default function Tete() {
  console.log(overview);
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
            <PrototypeOverview />
            <ProjectStatement
              statement={overview[0].statement}
              benchmark={overview[0].benchmark}
              solutions={overview[0].solutions}
              outcomes={overview[0].outcomes}
            />
            {/* Key activities */}
            <div className="text-center">
              <ProjectSectionHeader header="Key activities" />
              <Image
                alt="Key activities"
                src="/images/tete-a-tete/activities.png"
                quality={100}
                width={950}
                height={900}
              />
            </div>
            {/* Our user */}
            <div className="text-center" ref={refs.EL1}>
              <ProjectSectionHeader header="Our user" />
              <Image
                alt="Key activities"
                src="/images/tete-a-tete/user-scenario.png"
                quality={100}
                width={1000}
                height={1000}
              />
            </div>
            {/* Analysis */}
            <div ref={refs.EL2}>
              <ProjectAnalysis />
            </div>
            {/* Wireframing */}
            <div ref={refs.EL3}>
              <ProjectSectionHeader header="Wireframing" />
              <div className="">
                <video className="static" controls loop autoPlay muted>
                  <source
                    src="video/teteatete-wireframe.mp4"
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
              <NextSteps
                title={"Next steps:"}
                list={
                  <ul className="list-disc list-inside">
                    <li>
                      Keep up to date online appearance on the social networks
                      such as Instagram and Facebook.
                    </li>
                    <li>Add online booking feature.</li>
                    <li>
                      Launch new marketing campaigns via Constant Contact.
                    </li>
                    <li>Collaborate with Groupon.</li>
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
