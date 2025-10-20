import { Ellipse, StyledTitle } from './styles';

type Props = {
  children?: React.ReactNode;
  no: number;
};

export function StepTitle({ children, no }: Props) {
  return (
    <StyledTitle>
      <Ellipse />
      Step {no}. {children}
    </StyledTitle>
  );
}
