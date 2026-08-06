import styled from '@emotion/styled';
import { Image } from '@/components';

export const ArrowImage = styled(Image)(() => ({
  display: 'block',
  '@media (max-width: 850px)': {
    display: 'none'
  }
}));
