import { Image, List, Stack, Tabs } from '@/components';
import sol1 from '@/pages/Tete/assets/sol1.png';
import userflow from '@/pages/Tete/assets/userflow.png';
import webprob1 from '@/pages/Tete/assets/webprob1.png';

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
        <Tabs.ContentLayout>
          <List>
            <List.Item>The home page that feels too cluttered. </List.Item>
            <List.Item>
              It is difficult to scan because of a bunch of text and a busy
              layout.
            </List.Item>
          </List>
          <Image src={webprob1} />
        </Tabs.ContentLayout>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Tabs.ContentLayout>
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
          <Stack direction="column" gap="1.5rem" alignItems="center">
            <Image src={userflow} style={{ maxWidth: '787px' }} />
            <Image src={sol1} />
          </Stack>
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
