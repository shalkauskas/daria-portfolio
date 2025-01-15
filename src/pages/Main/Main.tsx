import { WorkCard } from '@/components';
import { workProjects } from '@/data/mainPage';
import { WorkList } from './styles';

export function Main() {
  return (
    <WorkList>
      {workProjects.map((project) => (
        <WorkCard {...project} />
      ))}
    </WorkList>
  );
}
