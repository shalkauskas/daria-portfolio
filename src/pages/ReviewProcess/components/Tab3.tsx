import { Image, List, Stack, Tabs } from '@/components';

import tab3after1 from '@/pages/ReviewProcess/assets/tab3after1.webp';
import tab3after2 from '@/pages/ReviewProcess/assets/tab3after2.webp';
import tab3before from '@/pages/ReviewProcess/assets/tab3before.webp';

export function Tab3() {
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
              The letter of recommendation starts with some metadata that
              provides the valuable context. The layout of the metadata requires
              a clean-up.
            </List.Item>
            <List.Item>
              The most important part of the recommendation is the attachment.
              In the previous implementation (please see the screenshot below),
              attachment was hidden all the way below the recommendation form
              and required scrolling.
            </List.Item>
            <List.Item>
              The attachment was represented via the link that opened the file
              in the overlay. According to the feedback that we received from
              our clients, reviewers would prefer to have their rubric open as
              they are reading the recommendation letters as well as other
              attachments.
            </List.Item>
          </List>
          <Image
            src={tab3before}
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
              The metadata of the recommendation letter is enclosed in a card
              which makes it look more balanced.
            </List.Item>
            <List.Item>
              The card for each recommendation letters is an accordion that is
              closed by default and provides only high level information –
              metadata and the button with the number of files attached to the
              selected recommendation letter.
            </List.Item>
            <List.Item>
              User can view attachments either by clicking on the Attachments
              button or by opening the accordion and navigating to the
              attachments view.
            </List.Item>
            <List.Item>
              Attachments are shown in line with the rubric and have a
              pagination for the case when there are multiple files attached to
              the single letter.
            </List.Item>
            <List.Item>
              The condensed view of the form makes it easier to read.
            </List.Item>
          </List>
          <Stack
            gap="1rem"
            css={{
              '@media (max-width: 1024px)': {
                flexDirection: 'column'
              }
            }}>
            <Image
              src={tab3after1}
              style={{ maxWidth: '787px' }}
              canEnlarge
              containerStyle={{ textAlign: 'center' }}
            />
            <Image
              src={tab3after2}
              style={{ maxWidth: '787px' }}
              canEnlarge
              containerStyle={{ textAlign: 'center' }}
            />
          </Stack>
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
