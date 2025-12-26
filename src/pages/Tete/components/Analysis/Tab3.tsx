import { Image, List, Stack, Tabs } from '@/components';
import webprob3 from '@/pages/Tete/assets/webprob3.png';

export function Tab3() {
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
            <List.Item>The price list looks visually overwhelming.</List.Item>
            <List.Item>
              Half of the services don’t give you any idea of how much they can
              cost and just marked as “Prices vary”.
            </List.Item>
            <List.Item>
              Small pictures look funny on a desktop version.
            </List.Item>
          </List>
          <Image src={webprob3} />
        </Tabs.ContentLayout>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Tabs.ContentLayout>
          <List>
            <List.Item>
              Chunk the extensive price lists into smaller and visually divided
              tables.
            </List.Item>
            <List.Item>Use price ranges whenever it is possible.</List.Item>
            <List.Item>Make pictures responsive.</List.Item>
          </List>
          <img src="https://placehold.co/990x751" />
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
