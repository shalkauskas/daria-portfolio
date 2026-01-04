import styled from '@emotion/styled';

export const ProgressTrackerWrapper = styled.div(({ theme }) => ({
  backgroundColor: '#EBEFF6',
  padding: theme.utility.pxToRem(24),
  boxShadow: `0 0.25rem ${theme.utility.pxToRem(10)} 0.5rem ${theme.colors.black1} inset`,
  borderRight: `1px solid ${theme.colors.grey1}`,
  minWidth: theme.utility.pxToRem(300),
  maxWidth: theme.utility.pxToRem(400),

  '@media (max-width: 1100px)': {
    display: 'none'
  }
}));

export const ProjectOverviewTitle = styled.p(({ theme }) => ({
  color: theme.colors.secondaryText,
  fontSize: theme.utility.pxToRem(14),
  fontWeight: 700,
  lineHeight: theme.utility.pxToRem(24)
}));

export const ProjectOverviewValue = styled.p(({ theme }) => ({
  color: theme.colors.primaryText,
  fontFamily: '"Open Sans", serif;',
  fontSize: theme.utility.pxToRem(16),
  fontWeight: 600,
  lineHeight: theme.utility.pxToRem(24)
}));

export const ProjectOverviewGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  columnGap: theme.utility.pxToRem(20),
  rowGap: theme.utility.pxToRem(8)
}));

export const TableOfContentList = styled.ul(() => ({
  listStyle: 'none',
  padding: 0,
  margin: 0
}));

export const TableOfContentItem = styled.li<{ $isActive?: boolean }>(
  ({ theme, $isActive }) => ({
    borderRadius: theme.utility.pxToRem(8),
    color: theme.colors.primaryText,
    fontSize: theme.utility.pxToRem(18),
    lineHeight: theme.utility.pxToRem(24),
    padding: `${theme.utility.pxToRem(8)} ${theme.utility.pxToRem(16)}`,

    backgroundColor: $isActive ? '#F7EFFF' : 'transparent',
    border: $isActive ? `1px solid ${theme.colors.primary}` : 'none',
    cursor: 'pointer',
    fontWeight: $isActive ? 600 : 400
  })
);

export const ProgressTrackerContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  height: `calc(100vh - ${theme.utility.pxToRem(68)})`
}));
