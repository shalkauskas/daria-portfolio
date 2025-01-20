import { theme } from '@/shared/theme';
import { ButtonContainer, SecondaryButton } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type Props = {
  children?: React.ReactNode;
  color?: string;
  css?: CSSInterpolation;
  variant?: 'primary' | 'secondary';
};
export function Button({ children, color = theme.colors.grey7, css, variant = 'primary' }: Props) {
  const variantMap = {
    primary: SecondaryButton,
    secondary: SecondaryButton
  };
  const Button = variantMap[variant];

  return (
    <ButtonContainer
      css={{
        color,
        css
      }}>
      <Button>{children}</Button>
    </ButtonContainer>
  );
}
