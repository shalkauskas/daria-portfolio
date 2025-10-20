import { IconButton } from '@/components';
import arrowLeft from '@/assets/shared/arrowLeft.svg';

import { FeatureTitle, HeaderContainer, LogoContainer } from './styles';
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
        <FeatureTitle>{title}</FeatureTitle>
      </LogoContainer>
    </HeaderContainer>
  );
}
