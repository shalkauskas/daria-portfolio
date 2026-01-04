import { Image, List, Tabs } from '@/components';

import tab2after from '@/pages/ReviewProcess/assets/tab2after.png';
import tab2before from '@/pages/ReviewProcess/assets/tab2before.png';

export function Tab2() {
  return (
    <Tabs
      tabs={[
        { label: 'Before', value: 'before' },
        {
          label: 'After',
          value: 'after'
        }
      ]}>
      <Tabs.Content value="before">
        <Tabs.ContentLayout>
          <List>
            <List.Item>
              Form responses were presented via disabled inputs that took up
              lots of vertical space.
            </List.Item>
            <List.Item>Too much white space.</List.Item>
            <List.Item>
              Form questions were missing the identifiers of the disabled state.
            </List.Item>
            <List.Item>
              Reviewing information required lots of scrolling that was a main
              complaint from our clients.
            </List.Item>
          </List>
          <Image
            src={tab2before}
            canEnlarge
            style={{ maxWidth: '787px' }}
            containerStyle={{ textAlign: 'center' }}
          />
        </Tabs.ContentLayout>
      </Tabs.Content>
      <Tabs.Content value="after">
        <Tabs.ContentLayout>
          <List>
            <List.Item>
              The more condensed view of the form fields helped to reduce
              vertical spacing.
            </List.Item>
            <List.Item>
              Horizontal layout of the form fields with responses of up to 500
              characters reduced the white space.
            </List.Item>
            <List.Item>
              Accordions on a form level and “Collapse/Expand All” button on a
              section level allowed users to hide the least useful information
              and focus on what’s important.
            </List.Item>
            <List.Item>
              Reviewers received an ability to create shortcuts to the
              information of their interest by bookmarking the forms. Thus,
              after reviewing first application users can make their review
              process much more efficient and save time on locating similar data
              on the rest of the applications.
            </List.Item>
          </List>
          <Image
            src={tab2after}
            style={{ maxWidth: '787px' }}
            canEnlarge
            containerStyle={{ textAlign: 'center' }}
          />
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
