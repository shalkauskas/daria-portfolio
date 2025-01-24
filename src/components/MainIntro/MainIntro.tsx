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
import { Image } from '../WorkCard/styles';
import dariaBw from '@/assets/main/daria_bw.webp';

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
