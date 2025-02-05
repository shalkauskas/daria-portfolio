import React from 'react';

export function useElementOnScreen({
  options,
  enabled = false,
  initialState = false
}: {
  options?: IntersectionObserverInit;
  enabled?: boolean;
  initialState?: boolean; // isVisible initial state, helps prevent UI flickering
} = {}) {
  const elementRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(initialState);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (elementRef.current && enabled) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, enabled, options]);

  return { elementRef, isVisible };
}
