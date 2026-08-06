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
  className?: string;
  sx?: CSSInterpolation;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body18' | 'body16' | 'subtitle18';
};
export function Typography({
  as,
  children,
  className,
  sx,
  variant = 'body18'
}: Props) {
  const map = {
    body18: StyledBody18,
    body16: StyledBody16,
    subtitle18: Subtitle18,
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4
  };

  const Component = map[variant];
  return (
    <Component as={as} className={className} css={sx}>
      {children}
    </Component>
  );
}
