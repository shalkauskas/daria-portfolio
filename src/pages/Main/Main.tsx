import { AboutMe, MainIntro, WorkCard } from '@/pages/Main/components';
import { workProjects } from '@/data/mainPage';
import { PageContainer, WorkList } from './styles';
import { Header, Layout, Title, Typography } from '@/components';
import { useElementOnScreen } from '@/hooks';
import { sections } from './constants';

export function Main() {
  const { elementRef: workRef, isVisible: isWorkVisible } = useElementOnScreen({
    enabled: true,
    options: {
      threshold: 0.4
    }
  });
  const { elementRef: aboutMeRef, isVisible: isAboutMeVisible } =
    useElementOnScreen({
      enabled: true,
      options: {
        threshold: 0.4
      }
    });

  function getActiveSection() {
    if (isWorkVisible) {
      return sections.WORK;
    }
    if (isAboutMeVisible) {
      return sections.ABOUT;
    }
    return sections.INTRO;
  }

  return (
    <Layout>
      <Header activeSection={getActiveSection()} />
      <PageContainer>
        <div>
          <MainIntro />
        </div>
        <WorkList id={sections.WORK} ref={workRef}>
          <Typography variant="h1">My Work</Typography>
          {workProjects.map((project, index) => (
            <WorkCard {...project} key={index} index={index} />
          ))}
        </WorkList>
        <div id={sections.ABOUT} ref={aboutMeRef}>
          <AboutMe />
        </div>
      </PageContainer>
    </Layout>
  );
}
