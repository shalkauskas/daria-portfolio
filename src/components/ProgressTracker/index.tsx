import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '..';
import {
  ProgressTrackerWrapper,
  ProjectOverviewGrid,
  ProjectOverviewTitle,
  ProjectOverviewValue,
  TableOfContentItem,
  TableOfContentList
} from './styles';

type Props = {
  overview: {
    timeline: string;
    teams: string;
    tools: string;
    methods: string;
  };
  tableOfContent: {
    title: string;
    ref?: React.RefObject<HTMLElement>;
  }[];
};

export function ProgressTracker({ overview, tableOfContent }: Props) {
  const [activeTitle, setActiveTitle] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = tableOfContent.find(
              (t) => t.ref?.current === entry.target
            );
            if (item) {
              setActiveTitle(item.title);
            }
          }
        });
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0
      }
    );

    tableOfContent.forEach((item) => {
      if (item.ref?.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [tableOfContent]);

  const handleScroll = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ProgressTrackerWrapper>
      <Stack gap="2rem" direction="column">
        <Typography variant="subtitle18">PROJECT OVERVIEW</Typography>
        <ProjectOverviewGrid>
          <ProjectOverviewTitle>TIMELINE</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.timeline}</ProjectOverviewValue>

          <ProjectOverviewTitle>TEAMS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.teams}</ProjectOverviewValue>

          <ProjectOverviewTitle>TOOLS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.tools}</ProjectOverviewValue>

          <ProjectOverviewTitle>METHODS</ProjectOverviewTitle>
          <ProjectOverviewValue>{overview.methods}</ProjectOverviewValue>
        </ProjectOverviewGrid>
        <Typography variant="subtitle18">TABLE OF CONTENT</Typography>
        <TableOfContentList>
          {tableOfContent.map((item) => (
            <TableOfContentItem
              key={item.title}
              as="li"
              $isActive={activeTitle === item.title}
              onClick={() => handleScroll(item.ref)}>
              {item.title}
            </TableOfContentItem>
          ))}
        </TableOfContentList>
      </Stack>
    </ProgressTrackerWrapper>
  );
}
