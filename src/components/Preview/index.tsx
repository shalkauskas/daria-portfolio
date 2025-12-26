import { Tabs } from '@/components';

import { PreviewContainer } from './styles';
import { CSSInterpolation } from '@emotion/serialize';

export function Preview({
  desktop,
  mobile
}: {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
}) {
  return (
    <Tabs
      sx={{ ...PreviewContainer } as CSSInterpolation}
      tabs={[
        { label: 'Desktop', value: 'desktop' },
        { label: 'Mobile', value: 'mobile' }
      ]}
      variant="unstyled">
      <Tabs.Content value="desktop">{desktop}</Tabs.Content>
      <Tabs.Content value="mobile">{mobile}</Tabs.Content>
    </Tabs>
  );
}
