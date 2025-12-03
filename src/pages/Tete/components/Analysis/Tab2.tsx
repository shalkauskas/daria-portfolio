import { List, Stack, Tabs } from '@/components';

export function Tab2() {
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
              The navigation bar has way too many menu items (8) while all they
              want is just to get a service.
            </List.Item>
            <List.Item>
              The wording “raving clients” is not clear enough and does not
              fully explain what this page is about.
            </List.Item>
          </List>
          <img src="https://placehold.co/990x320" />
        </Stack>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Stack direction="column" gap="1.5rem">
          <List>
            <List.Item>
              Cut down the menu items of low significance and keep only the most
              important ones.
            </List.Item>
            <List.Item>Use simple and clear words for navigation.</List.Item>
          </List>
          <Stack gap="2rem">
            <img src="https://placehold.co/479x392" />
            <img src="https://placehold.co/479x349" />
          </Stack>
        </Stack>
      </Tabs.Content>
    </Tabs>
  );
}
