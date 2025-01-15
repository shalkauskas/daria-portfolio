import { Header } from '@/components';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
