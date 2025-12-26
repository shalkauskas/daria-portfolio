import { Image } from '../Image';
import { ButtonBase, ButtonRound } from './styles';

type Props = {
  className?: string;
  css?: React.CSSProperties;
  icon: string;
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
    <ButtonWrapper className={className} onClick={onClick} style={css}>
      <Image src={icon} />
    </ButtonWrapper>
  );
}
