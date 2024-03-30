import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";

export function Outcomes() {
  return (
    <>
      <ProjectSectionHeader className={"text-left md:mt-8"}>
        Conclusions
      </ProjectSectionHeader>
      <p>
        The lesson that I have learned during our research is to always stay
        open-minded. The survey results gave us an idea of what problems our
        users are facing and what functionality they would like to see in our
        product to make their workflows more efficient. However, listening to
        what our users had to say during the interviews not only made us think
        of some of the existing features at the completely new angle and
        understand all the why's behind new feature requests but also opened our
        eyes on the areas of the product we did not even consider and their
        importance at the overall user experience. For, example, one of the key
        findings was that users would like to have a dashboard that would
        provide them a quick overview of their progress and suggest the action
        they need take next while the current dashboard was designed to
        accelerate the process of logging hours and did not give users an idea
        of what’s going across the product.
      </p>
      <ProjectSectionHeader className={"text-left"}>
        Next Steps
      </ProjectSectionHeader>
      <p>
        The product team and I are planning to use Effort vs Impact Quadrant to
        figure out what problems can be solved now with available time and
        resources and create the roadmap for the upcoming redesign. Once we
        create the prototype, we will conduct usability testing with users we
        recruited during the interviews.
      </p>
    </>
  );
}
