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

function ListItem({ children }: { children: React.ReactNode }) {
  return <Typography as="li">{children}</Typography>;
}

List.Item = ListItem;
