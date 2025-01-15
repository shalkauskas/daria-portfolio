import { CardWrapper, Image, ImageContainer, InfoContainer, ListItem } from './styles';

type Props = {
  image?: string;
  info?: string[];
  title: string;
  link?: string;
};
export function WorkCard({ image, title, info, link }: Props) {
  return (
    <CardWrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfoContainer>
        <h6>{title}</h6>
        {info && (
          <ul>
            {info.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
        )}
      </InfoContainer>
    </CardWrapper>
  );
}
