import { List, Stack, Tabs } from '@/components';

export function Tab1() {
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
            <List.Item>The home page that feels too cluttered. </List.Item>
            <List.Item>
              It is difficult to scan because of a bunch of text and a busy
              layout.
            </List.Item>
          </List>
          <img src="https://placehold.co/990x494" />
        </Stack>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Stack direction="column" gap="1.5rem">
          <List>
            <List.Item> Get rid of an unnecessary block of text.</List.Item>
            <List.Item>
              Make a button for Covid policy and move contact info to the page
              where it belongs.
            </List.Item>
            <List.Item>
              Funnel user’s attention in a logical way while answering the
              questions our user might have.
            </List.Item>
          </List>
          <img src="https://placehold.co/787x80" />
          <img src="https://placehold.co/990x663" />
        </Stack>
      </Tabs.Content>
    </Tabs>
  );
}
