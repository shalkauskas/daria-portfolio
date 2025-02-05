import { TabContainer } from './styles';

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  size?: 'medium' | 'small';
};
export function Tab({ children, isActive, size = 'medium' }: Props) {
  return (
    <TabContainer
      isActive={isActive}
      css={(t) => ({
        fontSize: size === 'medium' ? t.utility.pxToRem(24) : t.utility.pxToRem(18)
      })}>
      {children}
    </TabContainer>
  );
}
