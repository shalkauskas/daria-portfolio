import { AboutMe, MainIntro, WorkCard } from '@/pages/Main/components';
import { workProjects } from '@/data/mainPage';
import { PageContainer, WorkList } from './styles';
import { Title } from '@/components';

export function Main() {
  return (
    <PageContainer>
      <div id="intro">
        <MainIntro />
      </div>
      <WorkList id="work">
        <Title>My Work</Title>
        {workProjects.map((project, index) => (
          <WorkCard {...project} key={index} index={index} />
        ))}
      </WorkList>
      <div id="aboutMe">
        <AboutMe />
      </div>
    </PageContainer>
  );
}
