import React from 'react';

import { AboutMe, MainIntro, Title, WorkCard } from '@/components';
import { workProjects } from '@/data/mainPage';
import { PageContainer, WorkList } from './styles';
import { useLocation } from 'react-router';

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
