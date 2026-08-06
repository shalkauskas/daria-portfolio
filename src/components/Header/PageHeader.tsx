import { IconButton, Stack, Typography } from '@/components';
import arrowLeft from '@/assets/shared/arrowLeft.svg';

import { HeaderContainer } from './styles';
import { useNavigate } from 'react-router';

export default function PageHeader({
  title,
  children
}: {
  title: string;
  children?: React.ReactNode;
}) {
  const navigate = useNavigate();

  document.title = title;

  return (
    <HeaderContainer>
      <Stack
        style={{
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
        <Stack
          gap="0.75rem"
          alignItems="center"
          css={{
            padding: '0.25rem 0'
          }}>
          <IconButton icon={arrowLeft} onClick={() => navigate(-1)} />
          <Typography variant="h2">{title}</Typography>
        </Stack>
        {children}
      </Stack>
    </HeaderContainer>
  );
}
