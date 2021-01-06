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
import NextProjectCarousel from "@/components/NextProjectCarousel";
import NextProjectItem from "@/components/NextProjectItem";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
};

export default function Tete() {
  const bloom = (
    <NextProjectItem
      title='B2C application "Bloom"'
      image="images/bloom.png"
      color="#FFEEEC"
      link="/bloom"
      phone={true}
    />
  );
  const seeds = (
    <NextProjectItem
      title="Educational micro-course for Learning Seeds, Inc."
      image="images/learnseed.png"
      color="#C2F0FC"
      link="/learning-seeds"
    />
  );
  const venmo = (
    <NextProjectItem
      title="Donation feature for Venmo app (conceptual)"
      image="images/venmo.png"
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
                loading={"eager"}
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
                loading={"eager"}
              />
            </div>
            {/* Analysis */}
            <div ref={refs.EL2}>
              <ProjectAnalysis />
            </div>
            {/* Wireframing */}
            <div ref={refs.EL3}>
              <ProjectSectionHeader header="Wireframing" />
              <div className="shadow-lg">
                <video className="static" controls loop muted>
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
      <NextProjectCarousel
        children={bloom}
        children2={seeds}
        children3={venmo}
      />
    </Layout>
  );
}
