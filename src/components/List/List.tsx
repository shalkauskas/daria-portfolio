import { CSSInterpolation } from '@emotion/serialize';
import { Typography } from '../Typography/Typography';
import { StyledOl, StyledUl } from './styles';

export function List({
  children,
  type = 'ul',
  boldMarker = false
}: {
  children: React.ReactNode;
  type?: 'ul' | 'ol';
  boldMarker?: boolean;
}) {
  return type === 'ul' ? (
    <StyledUl $boldMarker={boldMarker}>{children}</StyledUl>
  ) : (
    <StyledOl $boldMarker={boldMarker}>{children}</StyledOl>
  );
}

function ListItem({
  children,
  css
}: {
  children: React.ReactNode;
  css?: CSSInterpolation;
}) {
  return (
    <Typography as="li" sx={css}>
      {children}
    </Typography>
  );
}

List.Item = ListItem;
