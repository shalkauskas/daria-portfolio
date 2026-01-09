import { Container, ContentWrapper } from './styles';

export function CaseContainer({
  children,
  header
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <Container data-scroll-container>
      {header}
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}
