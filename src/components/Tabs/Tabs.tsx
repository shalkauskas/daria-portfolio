import { cloneElement, isValidElement, useState } from 'react';
import { Tab } from '../Tab/Tab';
import { Typography } from '../Typography/Typography';
import { Stack } from '../styledComponents';
import { TabContentLayout, TabsContainer } from './styles';

type TabContentProps = {
  children: React.ReactNode;
  value: string;
};

type TabsProps = {
  children: React.ReactNode[];
  tabs: { label: string; value: string }[];
};
export function Tabs({ children, tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <TabsContainer>
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
          ? cloneElement(child, {
              ...child.props
            })
          : null
      )}
    </TabsContainer>
  );
}
Tabs.Content = TabContent;
Tabs.ContentLayout = TabContentLayout;

function TabContent({ children, value }: TabContentProps) {
  return <div aria-value={value}>{children}</div>;
}
