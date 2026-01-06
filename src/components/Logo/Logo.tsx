import { Interpolation, Theme } from '@emotion/react';
import { LogoContainer } from './styles';
import { Image } from '../Image';
import logopurple from './logopurple.svg';

export function Logo({
  css,
  className
}: {
  css?: Interpolation<Theme>;
  className?: string;
}) {
  return (
    <LogoContainer css={css} className={className}>
      <Image src={logopurple} alt="logo" />
    </LogoContainer>
  );
}
