import { List, Stack, Tabs } from '@/components';

export function Tab4() {
  return (
    <Tabs
      tabs={[
        { label: 'Problems', value: 'problems' },
        {
          label: 'Solutions',
          value: 'solutions'
        }
      ]}>
      <Tabs.Content value="problems">
        <Stack direction="column" gap="1.5rem">
          <List>
            <List.Item>
              Colored text in paragraphs creates poor readability.
            </List.Item>
            <List.Item>The size of text in paragraphs is too small.</List.Item>
          </List>
          <img src="https://placehold.co/990x464" />
        </Stack>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Stack direction="column" gap="1.5rem">
          <List>
            <List.Item>
              Use colored text only for links and headers and make paragraphs
              black.
            </List.Item>
            <List.Item>
              Put description of a service in a pop-up window and make the size
              of paragraph bigger.
            </List.Item>
          </List>
          <img src="https://placehold.co/990x715" />
        </Stack>
      </Tabs.Content>
    </Tabs>
  );
}
