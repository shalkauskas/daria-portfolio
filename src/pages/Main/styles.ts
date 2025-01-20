import styled from '@emotion/styled';

export const PageContainer = styled.div(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.colors.purpleBg2} 0%,${theme.colors.purpleBg1} 100%)`,
  minHeight: '100vh'
}));

export const WorkList = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
});
