import { Interpolation, Theme } from '@emotion/react';
import { LogoContainer, LogoText } from './styles';

export function Logo({
  css,
  className
}: {
  css?: Interpolation<Theme>;
  className?: string;
}) {
  return (
    <LogoContainer css={css} className={className}>
      <LogoText>DK</LogoText>
    </LogoContainer>
  );
}
