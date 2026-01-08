import { List, Stack } from '@/components';
import {
  PersonaContainer,
  PersonaBioGrid,
  PersonBioTitle,
  PersonBioValue,
  PersonScenarioBox,
  PersonaTopRow,
  PersonaBottomRow,
  PersonaBottomRowItem,
  PersonaListItemText,
  PersonaListItemTitle,
  PersonaBottomRowItemTitle,
  PersonaScenarioText
} from './styles';
import { Image } from '@/components';

type PersonaProps = {
  personaBio: { title: string; value: string }[];
  personaScenario: string;
  personaGoals: string[];
  personaPainPoints: string[];
  personaTasksAndResponsibilities: string[];
  personaNeeds: string[];
  personaImage: string;
};

export function Persona({
  personaBio,
  personaScenario,
  personaGoals,
  personaPainPoints,
  personaTasksAndResponsibilities,
  personaNeeds,
  personaImage
}: PersonaProps) {
  return (
    <PersonaContainer>
      <PersonaTopRow>
        <Stack gap="1rem" alignItems="center">
          <Image
            containerStyle={{ flexShrink: 0 }}
            src={personaImage}
            alt="Persona Image"
            height={'173px'}
            width={'173px'}
          />
          <PersonaBioGrid>
            {personaBio.map(({ title, value }) => (
              <>
                <PersonBioTitle>{title}</PersonBioTitle>
                <PersonBioValue>{value}</PersonBioValue>
              </>
            ))}
          </PersonaBioGrid>
        </Stack>
        <PersonScenarioBox>
          <PersonaBottomRowItemTitle>SCENARIO</PersonaBottomRowItemTitle>
          <PersonaScenarioText>{personaScenario}</PersonaScenarioText>
        </PersonScenarioBox>
      </PersonaTopRow>
      <PersonaBottomRow>
        <Stack gap="1rem" direction="column">
          <PersonaBottomRowItem>
            <PersonaListItemTitle>GOALS</PersonaListItemTitle>
            <List>
              {personaGoals.map((value) => (
                <PersonaListItemText key={value}>{value}</PersonaListItemText>
              ))}
            </List>
          </PersonaBottomRowItem>
          <PersonaBottomRowItem>
            <PersonaListItemTitle>PAIN POINTS</PersonaListItemTitle>
            <List>
              {personaPainPoints.map((value) => (
                <PersonaListItemText key={value}>{value}</PersonaListItemText>
              ))}
            </List>
          </PersonaBottomRowItem>
        </Stack>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>TASKS & RESPONSIBILITIES</PersonaListItemTitle>
          <List>
            {personaTasksAndResponsibilities.map((value) => (
              <PersonaListItemText key={value} css={{ margin: '0.5rem 0' }}>
                {value}
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>NEEDS</PersonaListItemTitle>
          <List>
            {personaNeeds.map((value) => (
              <PersonaListItemText key={value} css={{ margin: '0.5rem 0' }}>
                {value}
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
      </PersonaBottomRow>
    </PersonaContainer>
  );
}
