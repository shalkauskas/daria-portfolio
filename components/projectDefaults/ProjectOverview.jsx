import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectOverview(props) {
  const { title, timeline, team, tools } = props;
  return (
    <div className="container mx-auto mb-12">
      <h2 className="mt-3 text-center font-bold text-4xl mb-12">{title}</h2>
      <ProjectSectionHeader>Project overview</ProjectSectionHeader>
      <div className="text-center">
        {timeline && (
          <p className="inline-block mx-6 my-1 text-lg">
            <b>Timeline:</b> {timeline}
          </p>
        )}
        {team && (
          <p className="inline-block mx-6 my-1 text-lg">
            <b>Team:</b> {team}
          </p>
        )}
        {tools && (
          <p className="inline-block mx-6 my-1 text-lg">
            <b>Tools:</b> {tools}
          </p>
        )}
      </div>
    </div>
  );
}
