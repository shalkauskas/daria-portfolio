import { Header, Layout } from '@/components';
import { likertScaleData } from '@/data/likertScale';

export function LikertScale() {
  return (
    <Layout>
      <Header.Feature title={likertScaleData.title} />
    </Layout>
  );
}
