import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, EnlargedImage, CloseButton } from './styles';

type Props = {
  className?: string;
  containerStyle?: React.CSSProperties;
  src?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  alt?: string;
  canEnlarge?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
};

export function Image({
  className,
  containerStyle,
  src,
  style,
  width = 'auto',
  height = 'auto',
  alt = '',
  objectFit = 'fill',
  canEnlarge = false
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    if (canEnlarge) setIsOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (!src) return null;

  return (
    <>
      <div
        className={className}
        style={containerStyle}
        css={{
          height: height,
          width: width,
          backgroundColor: isLoaded ? 'transparent' : '#f0f0f0',
          transition: 'background-color 0.3s ease'
        }}>
        <img
          src={src}
          style={{
            cursor: canEnlarge ? 'pointer' : 'default',
            objectFit: objectFit,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            ...style
          }}
          alt={alt}
          height={'100%'}
          width={'100%'}
          onClick={handleClick}
          onLoad={handleLoad}
        />
      </div>
      {isOpen &&
        createPortal(
          <Overlay onClick={handleClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
              <EnlargedImage src={src} alt={alt} />
            </ModalContent>
          </Overlay>,
          document.body
        )}
    </>
  );
}
