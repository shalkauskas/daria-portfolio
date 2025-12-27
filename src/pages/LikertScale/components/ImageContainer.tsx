import { Typography } from '@/components';
import {
  ImageContainerContent,
  ImageContainer as ImageContainerStyled
} from './styles';

type Props = {
  children: React.ReactNode;
  subtitle?: string;
};
export function ImageContainer({ children, subtitle }: Props) {
  return (
    <ImageContainerStyled>
      {subtitle && <Typography variant="subtitle18">{subtitle}</Typography>}
      <ImageContainerContent>{children}</ImageContainerContent>
    </ImageContainerStyled>
  );
}
