import { Button, Image, Typography } from '@/components';

import { CardWrapper, ImageContainer, InfoContainer, ListItem } from './styles';
import { Images } from './Images';
import { useNavigate } from 'react-router';

type Props = {
  desktop?: string;
  mobile?: string;
  index: number;
  info?: string[];
  title: string;
  link?: string;
};
export function WorkCard({ desktop, title, info, mobile, link, index }: Props) {
  const navigate = useNavigate();

  function handleLearnMoreClick() {
    if (!link) return;
    navigate(link);
  }
  return (
    <CardWrapper
      css={{
        flexDirection: index % 2 ? 'row-reverse' : 'row'
      }}>
      <ImageContainer
        css={(theme) => ({
          backgroundColor: index % 2 ? theme.colors.blue1 : theme.colors.purple5
        })}>
        {desktop && mobile ? (
          <Images desktop={desktop} mobile={mobile} />
        ) : (
          <Image src={desktop || mobile} />
        )}
      </ImageContainer>
      <InfoContainer>
        <Typography variant="h2">{title}</Typography>
        {info && (
          <ul>
            {info.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
        )}
        <Button variant="secondary" onClick={() => handleLearnMoreClick()}>
          LEARN MORE
        </Button>
      </InfoContainer>
    </CardWrapper>
  );
}
