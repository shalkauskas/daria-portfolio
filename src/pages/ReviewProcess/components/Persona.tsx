import { FormattedText, List, Stack } from '@/components';
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
  PersonaScenarioText,
  PersonaImageAndBioContainer
} from './styles';
import { Image } from '@/components';
import { Fragment } from 'react';

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
        <PersonaImageAndBioContainer>
          <Image
            containerStyle={{ flexShrink: 0 }}
            src={personaImage}
            alt="Persona Image"
            height={'173px'}
            width={'173px'}
          />
          <PersonaBioGrid>
            {personaBio.map(({ title, value }) => (
              <Fragment key={title}>
                <PersonBioTitle>{title}</PersonBioTitle>
                <PersonBioValue>{value}</PersonBioValue>
              </Fragment>
            ))}
          </PersonaBioGrid>
        </PersonaImageAndBioContainer>
        <PersonScenarioBox>
          <PersonaBottomRowItemTitle>SCENARIO</PersonaBottomRowItemTitle>
          <PersonaScenarioText>{personaScenario}</PersonaScenarioText>
        </PersonScenarioBox>
      </PersonaTopRow>
      <PersonaBottomRow>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>GOALS</PersonaListItemTitle>
          <List>
            {personaGoals.map((value) => (
              <PersonaListItemText key={value}>
                <FormattedText>{value}</FormattedText>
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>PAIN POINTS</PersonaListItemTitle>
          <List>
            {personaPainPoints.map((value) => (
              <PersonaListItemText key={value}>
                <FormattedText>{value}</FormattedText>
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>TASKS & RESPONSIBILITIES</PersonaListItemTitle>
          <List>
            {personaTasksAndResponsibilities.map((value) => (
              <PersonaListItemText key={value} css={{ margin: '0.5rem 0' }}>
                <FormattedText>{value}</FormattedText>
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
        <PersonaBottomRowItem>
          <PersonaListItemTitle>NEEDS</PersonaListItemTitle>
          <List>
            {personaNeeds.map((value) => (
              <PersonaListItemText key={value} css={{ margin: '0.5rem 0' }}>
                <FormattedText>{value}</FormattedText>
              </PersonaListItemText>
            ))}
          </List>
        </PersonaBottomRowItem>
      </PersonaBottomRow>
    </PersonaContainer>
  );
}
