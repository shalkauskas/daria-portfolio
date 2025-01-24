import { Header } from '@/components';
import { LayoutPageContainer } from './styles';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutPageContainer>
      <Header />
      {children}
    </LayoutPageContainer>
  );
}
