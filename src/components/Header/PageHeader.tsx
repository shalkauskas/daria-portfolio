import { IconButton, Typography } from '@/components';
import arrowLeft from '@/assets/shared/arrowLeft.svg';

import { HeaderContainer, LogoContainer } from './styles';
import { useNavigate } from 'react-router';

export default function PageHeader({ title }: { title: string }) {
  const navigate = useNavigate();

  document.title = title;

  return (
    <HeaderContainer>
      <LogoContainer
        css={{
          padding: '0.25rem 0'
        }}>
        <IconButton icon={arrowLeft} onClick={() => navigate(-1)} />
        <Typography variant="h2">{title}</Typography>
      </LogoContainer>
    </HeaderContainer>
  );
}
