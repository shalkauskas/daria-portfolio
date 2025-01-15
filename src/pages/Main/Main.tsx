import { WorkCard } from '@/components/WorkCard/WorkCard';
import { workProjects } from '@/data/mainPage';

export function Main() {
  return (
    <>
      {workProjects.map((project) => (
        <WorkCard {...project} />
      ))}
    </>
  );
}
