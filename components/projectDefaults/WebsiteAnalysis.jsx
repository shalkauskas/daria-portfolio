import ProjectSectionHeader from "./ProjectSectionHeader";

import ProjectProblemSolution from "@/components/projectDefaults/ProjectProblemSolution";
export default function ProjectAnalysis(props) {
  const { problem, titles, solution, header } = props;
  return (
    <div>
      <ProjectSectionHeader header={header && header} />
      {problem &&
        problem.map((prob, index) => {
          const sol = solution && solution[index];
          const tit = titles && titles[index];
          return (
            <ProjectProblemSolution
              problem={prob}
              solution={sol}
              key={index}
              title={tit}
            />
          );
        })}
    </div>
  );
}
