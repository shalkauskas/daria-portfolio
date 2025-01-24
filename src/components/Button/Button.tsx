import { ButtonContainer, PrimaryButton, SecondaryButton } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  sx?: CSSInterpolation;
  variant?: 'primary' | 'secondary';
};
export function Button({ children, onClick, sx, variant = 'primary' }: Props) {
  const variantMap = {
    primary: PrimaryButton,
    secondary: SecondaryButton
  };
  const Button = variantMap[variant];

  return (
    <ButtonContainer>
      <Button onClick={onClick} css={sx}>
        {children}
      </Button>
    </ButtonContainer>
  );
}
