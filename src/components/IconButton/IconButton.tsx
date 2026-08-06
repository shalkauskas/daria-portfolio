import { ButtonBase, ButtonRound } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type Props = {
  className?: string;
  css?: CSSInterpolation;
  icon: string | React.ReactNode;
  onClick?: () => void;
  variant?: 'base' | 'round';
};
export function IconButton({
  className,
  css,
  icon,
  onClick,
  variant = 'base'
}: Props) {
  const variantMap = {
    base: ButtonBase,
    round: ButtonRound
  };

  const ButtonWrapper = variantMap[variant];

  return (
    <ButtonWrapper className={className} onClick={onClick} css={css}>
      {typeof icon === 'string' ? (
        <img src={icon} alt="icon" height="24" width="24" />
      ) : (
        icon
      )}
    </ButtonWrapper>
  );
}
