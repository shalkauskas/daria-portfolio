import { TableOfContentItem, TableOfContentList } from './styles';

const MOBILE_HEADER_OFFSET = 100;
const DESKTOP_HEADER_OFFSET = 20;

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
        const offsetPosition =
          elementPosition + window.scrollY - MOBILE_HEADER_OFFSET;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        // On desktop, scrolling happens inside the CaseContainer, not the window
        const scrollableContainer = ref.current.closest(
          '[data-scroll-container]'
        );
        if (scrollableContainer) {
          const containerRect = scrollableContainer.getBoundingClientRect();
          const elementRect = ref.current.getBoundingClientRect();
          const offsetPosition =
            elementRect.top -
            containerRect.top +
            scrollableContainer.scrollTop -
            DESKTOP_HEADER_OFFSET;
          scrollableContainer.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
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
