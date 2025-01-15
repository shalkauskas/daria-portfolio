import { WorkCard } from '@/components';
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
