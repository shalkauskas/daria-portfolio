import { MainIntro, Title, WorkCard } from '@/components';
import { workProjects } from '@/data/mainPage';
import { PageContainer, WorkList } from './styles';

export function Main() {
  return (
    <PageContainer>
      <MainIntro />
      <WorkList>
        <Title>My Work</Title>
        {workProjects.map((project, index) => (
          <WorkCard {...project} key={index} index={index} />
        ))}
      </WorkList>
    </PageContainer>
  );
}
