import { TableOfContentItem, TableOfContentList } from './styles';

const HEADER_OFFSET = 80; // Offset for sticky header on mobile

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
      const isMobile = window.innerWidth <= 1100;
      if (isMobile) {
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
