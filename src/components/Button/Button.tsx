import { ButtonContainer, PrimaryButton, SecondaryButton } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  sx?: CSSInterpolation;
  variant?: 'primary' | 'secondary';
};
export function Button({ children, onClick, sx, size = 'medium', variant = 'primary' }: Props) {
  const sizeMap = {
    small: 12,
    medium: 16,
    large: 20
  }[size];
  const variantMap = {
    primary: PrimaryButton,
    secondary: SecondaryButton
  };
  const Button = variantMap[variant];

  return (
    <ButtonContainer>
      <Button onClick={onClick} css={(t) => ({ fontSize: t.utility.pxToRem(sizeMap), sx })}>
        {children}
      </Button>
    </ButtonContainer>
  );
}
