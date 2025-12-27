import { Image, List, Tabs, Typography } from '@/components';
import webprob2 from '@/pages/Tete/assets/webprob2.png';
import sitemap from '@/pages/Tete/assets/sitemap.png';
import sol2 from '@/pages/Tete/assets/sol2.png';
import { ImageGrid } from './styles';

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
        <Tabs.ContentLayout>
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
          <Image src={webprob2} canEnlarge />
        </Tabs.ContentLayout>
      </Tabs.Content>
      <Tabs.Content value="solutions">
        <Tabs.ContentLayout>
          <List>
            <List.Item>
              Cut down the menu items of low significance and keep only the most
              important ones.
            </List.Item>
            <List.Item>Use simple and clear words for navigation.</List.Item>
          </List>
          <ImageGrid>
            <Image
              canEnlarge
              src={sitemap}
              height="257px"
              width="479px"
              containerStyle={{ margin: 'auto' }}
            />
            <Image src={sol2} canEnlarge />
            <Typography sx={{ fontStyle: 'italic' }}>
              Click to enlarge
            </Typography>
            <Typography sx={{ fontStyle: 'italic' }}>
              Click to enlarge
            </Typography>
          </ImageGrid>
        </Tabs.ContentLayout>
      </Tabs.Content>
    </Tabs>
  );
}
