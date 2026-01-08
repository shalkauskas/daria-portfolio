import { Image, List, Tabs } from '@/components';
import webprob3 from '@/pages/Tete/assets/webprob3.webp';
import sol3 from '@/pages/Tete/assets/sol3.webp';

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
          <Image src={webprob3} canEnlarge />
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
          <Image src={sol3} canEnlarge />
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
