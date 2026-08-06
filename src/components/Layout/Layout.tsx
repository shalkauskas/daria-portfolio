import { LayoutPageContainer } from './styles';

export function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutPageContainer>{children}</LayoutPageContainer>;
}
