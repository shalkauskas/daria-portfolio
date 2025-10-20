import { CSSInterpolation } from '@emotion/serialize';
import {
  StyledBody16,
  StyledBody18,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  Subtitle18
} from './styles';

type Props = {
  children: React.ReactNode;
  sx?: CSSInterpolation;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body18' | 'body16' | 'subtitle18';
};
export function Typography({ children, sx, variant = 'body18' }: Props) {
  if (variant === 'body18')
    return <StyledBody18 css={sx}>{children}</StyledBody18>;
  if (variant === 'body16')
    return <StyledBody16 css={sx}>{children}</StyledBody16>;
  if (variant === 'subtitle18')
    return <Subtitle18 css={sx}>{children}</Subtitle18>;

  if (variant === 'h1') return <StyledH1 css={sx}>{children}</StyledH1>;
  if (variant === 'h2') return <StyledH2 css={sx}>{children}</StyledH2>;
  if (variant === 'h3') return <StyledH3 css={sx}>{children}</StyledH3>;
  if (variant === 'h4') return <StyledH4 css={sx}>{children}</StyledH4>;
}
