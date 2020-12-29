import Layout from "@/components/Layout";
import Image from "next/image";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import ProjectStatement from "@/components/ProjectStatement";
import NextSteps from "@/components/ProjectNextSteps";
import ScrollButton from "@/components/ScrollButton";
import ProjectMenu from "@/components/ProjectMenu";
import ScrollNavigation from "react-single-page-navigation";
import overview from "@/components/seeds/overview";
import Wireframing from "@/components/seeds/Wireframing";
import ComparativeAnalysis from "@/components/seeds/ComparativeAnalysis";
import Interviews from "@/components/seeds/Interviews";
import ExpertInterviews from "@/components/seeds/expertInterviews";
import Ideation from "@/components/seeds/Ideation";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
  EL6: {},
  EL7: {},
};
export default function Seeds() {
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
              go6={() => goTo("EL6")}
              go7={() => goTo("EL7")}
              title1="Comparative analysis"
              title2="Interviews & Synthesis"
              title3="Persona"
              title4="Content research"
              title5="Ideation"
              title6="Wireframing & Tests"
              title7="Next Steps"
            />
            <ProjectOverview
              title={`"An educational micro-course for Learning Seeds, Inc."`}
              timeline="3 weeks"
              team="3 designers, researcher and PM"
              tools="Figma"
            />
            {/* prototype */}
            <div className={`container mx-auto relative mb-20`}>
              <img src="images/learnseed.png" className="mx-auto" alt="" />
              <video
                className="mx-auto left-0 right-0 absolute"
                style={{ width: "652px", bottom: "107px", borderRadius: "8px" }}
                controls
                autoPlay
                muted
              >
                <source src="video/seeds.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <ProjectStatement
              statement={overview[0].statement}
              hypothesis={overview[0].hypothesis}
              outcomes={overview[0].outcomes}
            />
            {/* 1. Comparative analysis */}
            <div ref={refs.EL1}>
              <ComparativeAnalysis />
            </div>

            {/* 2. User interviews */}
            <div ref={refs.EL2}>
              <Interviews />
              <ExpertInterviews />
            </div>
            {/* Persona */}
            <div ref={refs.EL3} className="text-center">
              <ProjectSectionHeader header="Persona" />
              <Image
                alt="Comparative analysis"
                src="/images/learning-seeds/persona.png"
                quality={100}
                width={954}
                height={384}
              />
            </div>
            {/* Content Research */}
            <div ref={refs.EL4}>
              <ProjectSectionHeader header="Content Research" />
              <p>
                The big part of our research process was familiarizing ourselves
                with the Enlightened Shadowing Method invented and actively used
                by Learning Seeds. We also spent some time consulting with the
                Content Expert who gave us the valuable recommendations on how
                to better present the method and what is the most important.
              </p>
              <div
                className="2xl:px-48 lg:px-12 sm:px-6 px-4 py-8 my-16"
                style={{
                  backgroundColor: "#F5F2F0",
                  boxShadow: "0 0 5px 10px #F5F2F0",
                }}
              >
                <h3 className="text-left font-bold pb-10">Key takeaways:</h3>
                <ul className="list-disc list-inside">
                  <li>
                    “Chunking” the rich content of the method into digestible
                    pieces is key.
                  </li>
                  <li>
                    Mindfulness as a pathway to empathy is highly important.
                  </li>
                  <li>
                    Parents need to understand the rationale behind the method,
                    then observe and unpack what’s been observed in order to
                    effectively learn Enlightened Shadowing.
                  </li>
                  <li>
                    Reflection and recording the progress is an integral part of
                    learning the method.
                  </li>
                </ul>
              </div>
            </div>
            {/* Ideation */}
            <div ref={refs.EL5}>
              <Ideation />
            </div>
            {/* 6 Wireframing & Usability testing */}
            <div ref={refs.EL6}>
              <Wireframing />
            </div>
            {/* Next steps */}
            <div ref={refs.EL7}>
              <NextSteps
                title={"Next steps:"}
                list={
                  <ul className="list-disc list-inside">
                    <li>Further usability testing.</li>
                    <li>Design mobile component to micro-course.</li>
                    <li>More tailored content.</li>
                    <li>Build out of a Q & A section.</li>
                    <li>
                      Add social functionality or the ability to share
                      experiences with others.
                    </li>
                    <li>
                      Create a more sophisticated way of documenting and
                      visualizing progress beyond just numerical rating.
                    </li>
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
