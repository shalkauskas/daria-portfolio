import styled from '@emotion/styled';

export const CardWrapper = styled.div({
  border: '1px solid black',
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
  padding: '1.5rem'
});

export const ListItem = styled.li({});
