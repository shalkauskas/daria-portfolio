import { Stack, Tabs, Typography } from '@/components';

export function Analysis({ title }: { title: string }) {
  return (
    <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
      <Typography variant="h1">{title}</Typography>
      <Tabs
        tabs={[
          { label: 'Problems', value: 'problems' },
          {
            label: 'Solutions',
            value: 'solutions'
          }
        ]}>
        <Tabs.Content value="problems">problems</Tabs.Content>
        <Tabs.Content value="solutions">solutions</Tabs.Content>
      </Tabs>
    </Stack>
  );
}
