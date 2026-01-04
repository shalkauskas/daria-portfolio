import { Image, List, Tabs } from '@/components';

import tab1after from '@/pages/ReviewProcess/assets/tab1after.png';
import tab1before from '@/pages/ReviewProcess/assets/tab1before.png';

export function Tab1() {
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
              3-column layout made the page look too cluttered and hard to scan.{' '}
            </List.Item>
            <List.Item>
              Too many options surfaced in the page navigation. Such a long list
              makes it difficult for users to find what they need.
            </List.Item>
            <List.Item>
              The applicant summary does not provide enough information on the
              applicant’s experience and expertise.
            </List.Item>
            <List.Item>
              The page does not look visually appealing and lacks of colors.
            </List.Item>
          </List>
          <Image
            src={tab1before}
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
              One column layout allows users to focus on the applicant’s summary
              information and reduces extra noise. The inline panel with the
              review rubric can opened at any time once reviewer is ready to
              evaluate the applicant.
            </List.Item>
            <List.Item>
              The number of options provided in the app navigation was reduced
              to the top level items so users can easily scan the navigation and
              drive into the areas of their interest.
            </List.Item>
            <List.Item>
              One long page was broken down into separate views for each area of
              interest. This approach eliminated the need of scrolling that our
              users were frustrated about in the previous implementation.
            </List.Item>
            <List.Item>
              The timeline chart allows reviewers to see the most important
              events on the applicant’s journey. Alternative way of viewing the
              timeline in the list view makes the functionality user-friendly
              and accessible to everyone.
            </List.Item>
            <List.Item>
              Search and bookmarking functionality have been added to help users
              to find the relevant information more efficiently.
            </List.Item>
            <List.Item>
              Larger avatar, use of colors and iconography helped to make this
              page more visiually appealing.
            </List.Item>
          </List>
          <Image
            src={tab1after}
            style={{ maxWidth: '787px' }}
            canEnlarge
            containerStyle={{ textAlign: 'center' }}
          />
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
