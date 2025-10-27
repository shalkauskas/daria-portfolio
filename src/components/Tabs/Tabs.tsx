import { cloneElement, isValidElement, useState } from 'react';
import { Tab } from '../Tab/Tab';
import { Typography } from '../Typography/Typography';
import { Stack } from '../styledComponents';

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
  console.log('activeTab', activeTab);
  console.log(children);
  return (
    <div>
      <Stack gap="1rem">
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
    </div>
  );
}
Tabs.Content = TabContent;

function TabContent({ children, value }: TabContentProps) {
  return <div aria-value={value}>{children}</div>;
}
