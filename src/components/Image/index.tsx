import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, EnlargedImage, CloseButton } from './styles';

type Props = {
  containerStyle?: React.CSSProperties;
  src: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  alt?: string;
  canEnlarge?: boolean;
};

export function Image({
  containerStyle,
  src,
  style,
  width = 'auto',
  height = 'auto',
  alt = '',

  canEnlarge = false
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (canEnlarge) setIsOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <div style={containerStyle} css={{ height: height, width: width }}>
        <img
          src={src}
          style={{
            ...style,
            cursor: canEnlarge ? 'pointer' : 'default'
          }}
          alt={alt}
          height={'100%'}
          width={'100%'}
          onClick={handleClick}
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
