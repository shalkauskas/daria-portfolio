import styled from '@emotion/styled';

export const CardWrapper = styled.div({
  border: '1px solid #C6C6C9',
  borderRadius: '1rem',
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  maxWidth: '80rem' //1280px
});

export const ImageContainer = styled.div({});
export const Image = styled.img({
  height: '100%',
  width: '100%'
});

export const InfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem'
});

export const ListItem = styled.li({
  fontSize: '1.25rem',
  lineHeight: '2rem'
});

export const Title = styled.h6({
  fontSize: '1.625rem',
  lineHeight: '2.25rem'
});
