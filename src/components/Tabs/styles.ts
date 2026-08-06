import styled from '@emotion/styled';

export const TabsContainer = styled.div(({ theme }) => ({
  backgroundColor: '#F0EFF4',
  border: `1px solid ${theme.colors.grey1}`,
  boxShadow: `0px 1px 18px 0px #0000000F, 0px 6px 10px 0px #00000012, 0px 3px 5px -1px #0000001A`,
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem',

  '@media (max-width: 800px)': {
    padding: '1rem'
  }
}));

export const TabContentLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
});
