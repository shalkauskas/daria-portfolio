import { Image, List, Stack, Tabs } from '@/components';
import webprob4 from '@/pages/Tete/assets/webprob4.png';

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
        <Tabs.ContentLayout>
          <List>
            <List.Item>
              Colored text in paragraphs creates poor readability.
            </List.Item>
            <List.Item>The size of text in paragraphs is too small.</List.Item>
          </List>
          <Image src={webprob4} />
        </Tabs.ContentLayout>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Tabs.ContentLayout>
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
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
