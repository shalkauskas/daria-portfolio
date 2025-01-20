import styled from '@emotion/styled';

export const PageContainer = styled.div(({ theme }) => ({
  background: `linear-gradient(${theme.colors.purpleBg1},${theme.colors.purpleBg1});`,
  minHeight: '100vh'
}));

export const WorkList = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
});
