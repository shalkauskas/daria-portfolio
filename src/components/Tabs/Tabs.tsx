import { cloneElement, isValidElement, useState } from 'react';
import { Tab } from '../Tab/Tab';
import { Typography } from '../Typography/Typography';
import { Stack } from '../styledComponents';
import { TabContentLayout, TabsContainer } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

type TabContentProps = {
  children: React.ReactNode;
  value: string;
};

type TabsProps = {
  children: React.ReactNode[];
  tabs: { label: string; value: string }[];
  variant?: 'default' | 'unstyled';
  sx?: CSSInterpolation;
};

const variantMap = {
  default: TabsContainer,
  unstyled: Stack
};
export function Tabs({ children, tabs, variant = 'default', sx }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const Container = variantMap[variant];

  return (
    <Container css={sx}>
      <Stack gap="1rem" css={{ justifyContent: 'center' }}>
        {tabs.map(({ label, value }) => (
          <Tab
            size="small"
            key={value}
            isActive={value === activeTab}
            onClick={() => setActiveTab(value)}>
            <Typography>{label}</Typography>
          </Tab>
        ))}
      </Stack>
      {children.map((child) =>
        isValidElement(child) && child.props.value === activeTab
          ? cloneElement(child, { key: child.props.value, ...child.props })
          : null
      )}
    </Container>
  );
}
Tabs.Content = TabContent;
Tabs.ContentLayout = TabContentLayout;

function TabContent({ children, value }: TabContentProps) {
  return <div data-value={value}>{children}</div>;
}
