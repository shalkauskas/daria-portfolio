import styled from '@emotion/styled';

export const ProjectOverviewGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  columnGap: theme.utility.pxToRem(20),
  rowGap: theme.utility.pxToRem(8)
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
    border: $isActive
      ? `1px solid ${theme.colors.primary}`
      : '1px solid transparent',
    cursor: 'pointer',
    fontWeight: $isActive ? 600 : 400,

    '&:hover': {
      backgroundColor: $isActive ? '#F7EFFF' : theme.colors.white,
      border: `1px solid ${theme.colors.grey1}`,
      cursor: 'pointer'
    }
  })
);
