import { CSSInterpolation } from '@emotion/serialize';

import { Image } from '../styledComponents';
import { ButtonBase, ButtonRound } from './styles';

type Props = {
  css?: CSSInterpolation;
  icon: string;
  onClick?: () => void;
  variant?: 'base' | 'round';
};
export function IconButton({ css, icon, onClick, variant = 'base' }: Props) {
  const variantMap = {
    base: ButtonBase,
    round: ButtonRound
  };

  const ButtonWrapper = variantMap[variant];

  return (
    <ButtonWrapper onClick={onClick} css={css}>
      <Image src={icon} />
    </ButtonWrapper>
  );
}
