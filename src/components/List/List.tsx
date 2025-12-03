import { Typography } from '../Typography/Typography';

export function List({ children }: { children: React.ReactNode }) {
  return <ul style={{ marginLeft: '1rem' }}>{children}</ul>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <Typography as="li">{children}</Typography>;
}

List.Item = ListItem;
