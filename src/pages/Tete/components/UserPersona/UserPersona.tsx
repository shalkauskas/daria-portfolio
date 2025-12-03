import { List, Stack, Typography } from '@/components';
import {
  PersonaCard,
  PersonaContainer,
  PersonaFooter,
  PersonaGrid,
  Row
} from './styles';
import { personaBio, personaCards } from '@/data/tete';
import { theme } from '@/shared/theme';
import { GradientContainer } from '../../styles';

export function UserPersona({ title }: { title: string }) {
  return (
    <Stack gap="2rem" direction="column" css={{ alignItems: 'center' }}>
      <Typography variant="h1">{title}</Typography>
      <PersonaContainer>
        <GradientContainer>
          <Typography
            variant="h1"
            sx={{
              color: 'white'
            }}>
            Tina Jones
          </Typography>
        </GradientContainer>
        <PersonaGrid>
          <img src="https://placehold.co/487x325" />
          <Stack direction="column" gap="1.5rem">
            <Typography variant="h4">
              “Picking a new stylist is a very intimate process”.
            </Typography>
            <PersonaCard>
              <div>
                {personaBio.map(({ title, description }) => (
                  <Row key={title}>
                    <Typography
                      variant="body16"
                      sx={{
                        color: theme.colors.secondaryText
                      }}>
                      {title}
                    </Typography>
                    <Typography
                      variant="body16"
                      sx={{
                        fontWeight: 600
                      }}>
                      {description}
                    </Typography>
                  </Row>
                ))}
              </div>
            </PersonaCard>
          </Stack>
          {personaCards.map(({ title, items }) => (
            <PersonaCard key={title}>
              <Typography
                sx={{
                  fontWeight: 700
                }}>
                {title.toUpperCase()}
              </Typography>
              <List>
                {items.map((i) => (
                  <List.Item key={i}>{i}</List.Item>
                ))}
              </List>
            </PersonaCard>
          ))}
        </PersonaGrid>
        <PersonaFooter>
          <Typography
            sx={{
              fontWeight: 600
            }}>
            Scenario
          </Typography>
          <Typography>
            Tina, 45, a project manager for a software developing company. She
            works from home and hasn’t been out for four months now since the
            quarantine started. She feels like it is time to put herself in
            order and decides to get a haircut and have her grown out roots
            colored. During the lunch break, Tina searches for nearby salons on
            her mobile device and finds the Tete-A-Tete website. She wants to
            assure herself that the place is safe and she can get there the
            services she is looking for. Moreover, she is allergic to sulfates
            and it is important for her to know if the salon carries
            sulfate-free color line. Her hair is curly and difficult to manage
            so she wants to find the stylist who is experienced enough and who
            she can trust.
          </Typography>
        </PersonaFooter>
      </PersonaContainer>
    </Stack>
  );
}
