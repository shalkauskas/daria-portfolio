import { Container, ContentWrapper } from './styles';

export function CaseContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}
