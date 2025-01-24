import { dariaBw } from '@/assets/main';
import { Image } from '@/components';
import { intro } from '@/data/mainPage';

import {
  Circle1,
  Circle2,
  Circle3,
  Description,
  ImageContainer,
  Statement,
  TextContainer,
  Title,
  Wrapper
} from './styles';

export function MainIntro() {
  return (
    <Wrapper>
      <TextContainer>
        <Title>{intro.title}</Title>
        <Statement>{intro.statement}</Statement>
        <Description>{intro.description}</Description>
      </TextContainer>
      <ImageContainer>
        <Image src={dariaBw} />
      </ImageContainer>
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </Wrapper>
  );
}
