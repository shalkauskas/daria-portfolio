import { theme } from '@/shared/theme';
import { CardWrapper, Image, ImageContainer, InfoContainer, ListItem, Title } from './styles';

type Props = {
  image?: string;
  index: number;
  info?: string[];
  title: string;
  link?: string;
};
export function WorkCard({ image, title, info, link, index }: Props) {
  return (
    <CardWrapper
      style={{
        flexDirection: index % 2 ? 'row-reverse' : 'row'
      }}>
      <ImageContainer
        style={{
          backgroundColor: index % 2 ? theme.colors.blue1 : theme.colors.purple5
        }}>
        <Image src={image} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
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
