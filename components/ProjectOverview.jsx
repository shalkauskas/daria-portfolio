import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectOverview(props) {
  return (
    <div className="container mx-auto mb-12">
      <h2 className="mt-3 text-center font-bold text-4xl mb-12">
        {props.title}
      </h2>
      <ProjectSectionHeader header="Project overview" />
      <div className="text-center">
        <p className="inline-block mx-6 my-1 text-lg">
          <b>Timeline:</b> {props.timeline}
        </p>
        <p className="inline-block mx-6 my-1 text-lg">
          <b>Team:</b> {props.team}
        </p>
        <p className="inline-block mx-6 my-1 text-lg">
          <b>Tools:</b> {props.tools}
        </p>
      </div>
    </div>
  );
}
