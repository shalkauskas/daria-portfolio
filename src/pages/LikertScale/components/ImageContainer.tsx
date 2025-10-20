import { Typography } from '@/components';

type Props = {
  children: React.ReactNode;
  subtitle?: string;
};
export function ImageContainer({ children, subtitle }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: '1rem',
        maxWidth: '100vw'
      }}>
      {subtitle && <Typography variant="subtitle18">{subtitle}</Typography>}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem'
        }}>
        {children}
      </div>
    </div>
  );
}
