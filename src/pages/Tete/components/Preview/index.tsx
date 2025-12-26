import { Image, Tabs } from '@/components';
import desktop from '@/pages/Tete/assets/tete-a-tete.webp';
import mobile from '@/pages/Tete/assets/mobile.png';
import { PreviewContainer } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

export function Preview() {
  return (
    <Tabs
      sx={{ ...PreviewContainer } as CSSInterpolation}
      tabs={[
        { label: 'Desktop', value: 'desktop' },
        { label: 'Mobile', value: 'mobile' }
      ]}
      variant="unstyled">
      <Tabs.Content value="desktop">
        <Image src={desktop} />
      </Tabs.Content>
      <Tabs.Content value="mobile">
        <Image src={mobile} height="312px" width="200px" />
      </Tabs.Content>
    </Tabs>
  );
}
