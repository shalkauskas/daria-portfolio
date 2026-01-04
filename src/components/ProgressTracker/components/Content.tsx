import { TableOfContentItem, TableOfContentList } from './styles';

type Props = {
  tableOfContent: {
    title: string;
    ref?: React.RefObject<HTMLElement>;
  }[];
  activeTitle: string;
  handleClose: () => void;
};
export function Content({ tableOfContent, activeTitle, handleClose }: Props) {
  const handleScroll = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <TableOfContentList>
      {tableOfContent.map((item) => (
        <TableOfContentItem
          key={item.title}
          as="li"
          $isActive={activeTitle === item.title}
          onClick={() => {
            handleScroll(item.ref);
            handleClose();
          }}>
          {item.title}
        </TableOfContentItem>
      ))}
    </TableOfContentList>
  );
}
