import { TabContainer } from './styles';

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  size?: 'medium' | 'small';
};
export function Tab({ children, isActive, onClick, size = 'medium' }: Props) {
  return (
    <TabContainer
      onClick={onClick}
      isActive={isActive}
      css={(t) => ({
        fontSize:
          size === 'medium' ? t.utility.pxToRem(24) : t.utility.pxToRem(18)
      })}>
      {children}
    </TabContainer>
  );
}
