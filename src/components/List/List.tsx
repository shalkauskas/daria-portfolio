import { Typography } from '../Typography/Typography';

export function List({
  children,
  type = 'ul'
}: {
  children: React.ReactNode;
  type?: 'ul' | 'ol';
}) {
  return type === 'ul' ? (
    <ul style={{ marginLeft: '1rem' }}>{children}</ul>
  ) : (
    <ol style={{ marginLeft: '1rem' }}>{children}</ol>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <Typography as="li">{children}</Typography>;
}

List.Item = ListItem;
