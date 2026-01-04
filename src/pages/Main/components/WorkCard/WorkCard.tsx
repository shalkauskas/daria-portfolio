import { Button, Image, List, Typography } from '@/components';

import { CardWrapper, InfoContainer } from './styles';
import { useNavigate } from 'react-router';
import { workProjects } from '@/data/mainPage';
import { theme } from '@/shared/theme';

export function WorkCard({
  title,
  info,
  image,
  link,
  index
}: (typeof workProjects)[number] & { index: number }) {
  const navigate = useNavigate();

  function handleLearnMoreClick() {
    if (!link) return;
    navigate(link);
  }
  return (
    <CardWrapper $index={index}>
      {image && (
        <Image
          objectFit="scale-down"
          src={image}
          containerStyle={{
            height: 'auto',
            padding: '2rem',
            backgroundColor:
              index % 2 ? theme.colors.blue1 : theme.colors.purple5
          }}
        />
      )}
      <InfoContainer>
        <Typography variant="h2">{title}</Typography>
        {info && (
          <List>
            {info.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        )}
        <Button variant="secondary" onClick={() => handleLearnMoreClick()}>
          LEARN MORE
        </Button>
      </InfoContainer>
    </CardWrapper>
  );
}
