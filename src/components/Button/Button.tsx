import { ButtonContainer, PrimaryButton, SecondaryButton } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type Props = {
  children?: React.ReactNode;
  sx?: CSSInterpolation;
  variant?: 'primary' | 'secondary';
};
export function Button({ children, sx, variant = 'primary' }: Props) {
  const variantMap = {
    primary: PrimaryButton,
    secondary: SecondaryButton
  };
  const Button = variantMap[variant];

  return (
    <ButtonContainer>
      <Button css={sx}>{children}</Button>
    </ButtonContainer>
  );
}
