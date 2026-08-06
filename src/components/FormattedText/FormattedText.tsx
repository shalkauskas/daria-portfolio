import { Fragment } from 'react';

type Props = {
  children: string;
  className?: string;
};

/**
 * Parses text with **bold** syntax and renders bold spans.
 * Example: "Hello **world**!" renders as "Hello <strong>world</strong>!"
 */
export function FormattedText({ children, className }: Props) {
  const parts = children.split(/(\*\*.*?\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return <strong key={index}>{boldText}</strong>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </span>
  );
}
