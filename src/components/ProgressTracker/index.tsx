import React, { useEffect, useState } from 'react';
import { Button, IconButton, Stack, Typography } from '@/components';
import {
  OverlayBackdrop,
  OverlayContainer,
  OverlayContent,
  OverlayHeader,
  ProgressTrackerContainer,
  ProgressTrackerMobileWrapper,
  ProgressTrackerWrapper
} from './styles';
import { CloseIcon } from './components/CloseIcon';
import { Overview } from './components/Overview';
import { Content } from './components/Content';

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
  const [mobileOverlayType, setMobileOverlayType] = useState<
    'overview' | 'content' | null
  >(null);

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

  function handleClose() {
    setMobileOverlayType(null);
  }

  return (
    <>
      <ProgressTrackerWrapper>
        <Stack gap="2rem" direction="column">
          <Typography variant="subtitle18">PROJECT OVERVIEW</Typography>
          <Overview overview={overview} />
          <Typography variant="subtitle18">TABLE OF CONTENT</Typography>
          <Content
            tableOfContent={tableOfContent}
            activeTitle={activeTitle}
            handleClose={handleClose}
          />
        </Stack>
      </ProgressTrackerWrapper>
      <ProgressTrackerMobileWrapper>
        <Button
          variant="secondary"
          onClick={() => setMobileOverlayType('overview')}>
          Overview
        </Button>
        <Button onClick={() => setMobileOverlayType('content')}>Content</Button>
      </ProgressTrackerMobileWrapper>
      {mobileOverlayType && <OverlayBackdrop onClick={handleClose} />}
      <OverlayContainer $isOpen={!!mobileOverlayType}>
        <OverlayHeader>
          <Typography variant="subtitle18">
            {mobileOverlayType === 'overview'
              ? 'Project Overview'
              : 'Table of Content'}
          </Typography>
          <IconButton icon={<CloseIcon />} onClick={handleClose} />
        </OverlayHeader>

        <OverlayContent>
          {mobileOverlayType === 'overview' ? (
            <Overview overview={overview} />
          ) : (
            <Content
              tableOfContent={tableOfContent}
              activeTitle={activeTitle}
              handleClose={handleClose}
            />
          )}
        </OverlayContent>
      </OverlayContainer>
    </>
  );
}
ProgressTracker.Container = ProgressTrackerContainer;
