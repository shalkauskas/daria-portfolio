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
  as?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  children: React.ReactNode;
  sx?: CSSInterpolation;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body18' | 'body16' | 'subtitle18';
};
export function Typography({ as, children, sx, variant = 'body18' }: Props) {
  if (variant === 'body18')
    return (
      <StyledBody18 as={as} css={sx}>
        {children}
      </StyledBody18>
    );
  if (variant === 'body16')
    return (
      <StyledBody16 as={as} css={sx}>
        {children}
      </StyledBody16>
    );
  if (variant === 'subtitle18')
    return (
      <Subtitle18 as={as} css={sx}>
        {children}
      </Subtitle18>
    );

  if (variant === 'h1')
    return (
      <StyledH1 as={as} css={sx}>
        {children}
      </StyledH1>
    );
  if (variant === 'h2')
    return (
      <StyledH2 as={as} css={sx}>
        {children}
      </StyledH2>
    );
  if (variant === 'h3')
    return (
      <StyledH3 as={as} css={sx}>
        {children}
      </StyledH3>
    );
  if (variant === 'h4')
    return (
      <StyledH4 as={as} css={sx}>
        {children}
      </StyledH4>
    );
}
