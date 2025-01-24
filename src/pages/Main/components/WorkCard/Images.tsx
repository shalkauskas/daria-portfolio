import { Image } from '@/components';
import { ImagesContainer, ImagesWrapperContainer } from './styles';

type Props = {
  desktop: string;
  mobile: string;
};
export function Images({ desktop, mobile }: Props) {
  return (
    <ImagesWrapperContainer>
      <ImagesContainer
        css={(theme) => ({
          width: theme.utility.pxToRem(500),
          top: theme.utility.pxToRem(30)
        })}>
        <Image src={desktop} />
      </ImagesContainer>
      <ImagesContainer
        css={(theme) => ({
          width: theme.utility.pxToRem(120),
          left: theme.utility.pxToRem(470),
          top: theme.utility.pxToRem(100)
        })}>
        <Image src={mobile} />
      </ImagesContainer>
    </ImagesWrapperContainer>
  );
}
