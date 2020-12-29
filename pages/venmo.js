import Layout from "@/components/Layout";
import ProjectOverview from "@/components/ProjectOverview";
import StayVenmo from "@/components/venmo/StayVenmo";
import ProjectStatement from "@/components/ProjectStatement";
import NextSteps from "@/components/ProjectNextSteps";
import ScrollButton from "@/components/ScrollButton";
import ProjectMenu from "@/components/ProjectMenu";
import ScrollNavigation from "react-single-page-navigation";
import overview from "@/components/venmo/overview";
import Interviews from "@/components/venmo/Interviews";
import Dollar from "@/components/venmo/Dollar";
import Iterations from "@/components/venmo/Iterations";
import Personas from "@/components/venmo/Personas";
import ButtonCheckbox from "@/components/venmo/ButtonCheckbox";
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {},
  EL5: {},
  EL6: {},
  EL7: {},
};
export default function Venmo() {
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
              title1="User interviews"
              title2="Personas"
              title3="$1 concept"
              title4="Let Venmo stay Venmo"
              title5="Button vs checkbox"
              title6="Tests & iterations"
              title7="My takeaways"
            />
            <ProjectOverview
              title={`"Donation feature for Venmo app (conceptual)"`}
              timeline="2 weeks"
              team="4 designers"
              tools="Sketch, InVision"
            />
            {/* prototype */}
            <div className={`container mx-auto relative mb-20`}>
              <img
                src="images/venmo.png"
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
                <source src="video/venmo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <ProjectStatement
              statementBenchmark={true}
              statement={overview[0].statement}
              solutions={overview[0].solutions}
              outcomes={overview[0].outcomes}
            />
            {/* 1. User interviews */}
            <div ref={refs.EL1}>
              <Interviews />
            </div>

            {/* 2. Personas */}
            <div ref={refs.EL2}>
              <Personas />
            </div>
            {/* 3. 1$ concept */}
            <div ref={refs.EL3}>
              <Dollar />
            </div>
            {/* 4. Let Venmo stay venmo */}
            <div ref={refs.EL4}>
              <StayVenmo />
            </div>
            {/* 5. Button VS Checkbox */}
            <div ref={refs.EL5}>
              <ButtonCheckbox />
            </div>
            {/* 6 Iterations */}
            <div ref={refs.EL6}>
              <Iterations />
            </div>
            {/* Next steps */}
            <div ref={refs.EL7}>
              <NextSteps
                title={"My takeaways"}
                list={
                  <ul className="list-disc list-inside">
                    <li>
                      Good communication is an integral part of a successful
                      team.
                    </li>
                    <li>
                      It is important to have short-cuts and several approaches
                      to have things done.
                    </li>
                    <li>If you do not know what works better, go test!</li>
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
