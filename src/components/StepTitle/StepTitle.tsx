import { Ellipse, StyledTitle } from './styles';

type Props = {
  children?: React.ReactNode;
  no?: number;
  title?: string;
};

export function StepTitle({ children, no, title = 'Step' }: Props) {
  return (
    <StyledTitle>
      <Ellipse />
      {no ? `${title} ${no}.` : ''} {children}
    </StyledTitle>
  );
}
