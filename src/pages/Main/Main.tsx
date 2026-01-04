import { AboutMe, MainIntro, WorkCard } from '@/pages/Main/components';
import { workProjects } from '@/data/mainPage';
import { PageContainer, WorkList } from './styles';
import { Header, Layout, Typography } from '@/components';
import { useElementOnScreen } from '@/hooks';
import { sections } from './constants';

const workOptions = {
  threshold: 0.1
};

const aboutOptions = {
  threshold: 0.4
};

export function Main() {
  const { elementRef: workRef, isVisible: isWorkVisible } = useElementOnScreen({
    enabled: true,
    options: workOptions
  });
  const { elementRef: aboutMeRef, isVisible: isAboutMeVisible } =
    useElementOnScreen({
      enabled: true,
      options: aboutOptions
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
        <MainIntro />
        <div ref={workRef}>
          <WorkList id={sections.WORK}>
            <Typography variant="h1">My Work</Typography>
            {workProjects.map((project, index) => (
              <WorkCard {...project} key={index} index={index} />
            ))}
          </WorkList>
        </div>
        <div id={sections.ABOUT} ref={aboutMeRef}>
          <AboutMe />
        </div>
      </PageContainer>
    </Layout>
  );
}
