import ProjectSectionHeader from "./ProjectSectionHeader";
import problem from "@/components/tete/problems";
import solution from "@/components/tete/solutions";
import ProjectProblemSolution from "@/components/tete/ProjectProblemSolution";
export default function ProjectAnalysis() {
  return (
    <div>
      <ProjectSectionHeader header="Website analysis and solutions" />
      <ProjectProblemSolution problem={problem[0]} solution={solution[0]} />
      <ProjectProblemSolution problem={problem[1]} solution={solution[1]} />
      <ProjectProblemSolution problem={problem[2]} solution={solution[2]} />
      <ProjectProblemSolution problem={problem[3]} solution={solution[3]} />
    </div>
  );
}
