import { Image } from '../styledComponents';
import { ButtonWrapper } from './styles';

type Props = {
  icon: string;
  onClick?: () => void;
};
export function IconButton({ icon, onClick }: Props) {
  return (
    <ButtonWrapper onClick={onClick}>
      <Image src={icon} />
    </ButtonWrapper>
  );
}
