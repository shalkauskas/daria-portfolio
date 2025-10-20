import { Button, IconButton, Image, Title } from '@/components';
import { aboutMe, gmail, linkedIn } from '@/assets/main';
import { links } from '@/data/mainPage';

import {
  ImageContainer,
  TextContainer,
  ContentWrapper,
  Wrapper,
  Text,
  ButtonsContainer,
  ButtonsSocialContainer
} from './styles';

function handleLinkedIn() {
  window.open(links.linkedIn, '_blank')?.focus();
}
function handleGmail() {
  window.open(links.gmail, '_blank')?.focus();
}
function handleResume() {
  window.open(links.resume, '_blank')?.focus();
}

export function AboutMe() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <ContentWrapper>
        <ImageContainer>
          <Image src={aboutMe} />
        </ImageContainer>
        <TextContainer>
          <Text>
            I am a multilingual UX/UI designer with a passion for understanding people's needs.
            Being an <strong>enthusiastic</strong> and <strong>hard-working</strong> specialist I am
            always excited to start a new project treating challenges with a{' '}
            <strong>can-do attitude</strong>. My experience of being part of{' '}
            <strong>intercultural teams</strong> helps me to establish and build trusting
            relationships with international partners and outsource teams.
          </Text>
          <Text>
            <strong>Caring for others</strong> is what makes me happy either while cooking yummies
            for my family or planning fun events with friends. In my free time, you can find me
            hiking in New Hampshire or kayaking down the Charles River as I love being active and
            keep moving!
          </Text>
          <ButtonsContainer>
            <Button
              onClick={handleResume}
              sx={{
                fontSize: '1.2rem'
              }}>
              Resume PDF
            </Button>
            <ButtonsSocialContainer>
              <IconButton icon={linkedIn} onClick={handleLinkedIn} variant="round" />
              <IconButton icon={gmail} onClick={handleGmail} variant="round" />
            </ButtonsSocialContainer>
          </ButtonsContainer>
        </TextContainer>
      </ContentWrapper>
    </Wrapper>
  );
}
