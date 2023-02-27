import {
  Anchor,
  Card,
  Group,
  Image,
  Loader,
  Space,
  Text,
  Timeline,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetCharacterDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import moment from "moment";

export const QUERY = gql`
  query GetCharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      __typename
      id
      name
      birthday
      description
      gender
      securityStatus
      title
      bloodline {
        id
        name
      }
      race {
        id
        name
      }
      faction {
        id
        name
      }
      images {
        url
      }
      corporation {
        id
        name
      }
      alliance {
        id
        name
      }
      corporationHistory {
        corporation {
          id
          name
          images {
            url
          }
        }
        startDate
        isDeleted
        recordId
      }

      ... on Agent {
        division {
          id
          name
        }
        location {
          id
          name
        }
        level
        agentType {
          id
          name
        }
        isLocator
      }

      ... on RegularAgent {
        division {
          id
          name
        }
        location {
          id
          name
        }
        level
        agentType {
          id
          name
        }
        isLocator
      }

      ... on ResearchAgent {
        division {
          id
          name
        }
        location {
          id
          name
        }
        level
        agentType {
          id
          name
        }
        isLocator
        researchSkills {
          id
          name
        }
      }

      ... on AgentInSpace {
        division {
          id
          name
        }
        location {
          id
          name
        }
        level
        agentType {
          id
          name
        }
        isLocator
        dungeon {
          id
        }
        solarSystem {
          id
          name
        }
        spawnPoint {
          id
        }
        type {
          id
          name
        }
      }
    }
  }
`;

interface Props {
  characterId: string;
}

const CharacterCardDetailed = ({ characterId }: Props) => {
  const { data, loading, error } = useGetCharacterDetailsQuery({
    variables: { characterId },
  });

  console.log("error", error);
  console.log("data", data);

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const characterType = {
    AuthenticatedPlayer: "Player (you!)",
    Player: "Player",
    RegularAgent: "Agent",
    ResearchAgent: "Research Agent",
    AgentInSpace: "Agent in Space",
  }[data.character.__typename];

  return (
    <Card>
      <Group position="apart">
        <Card.Section p="xl">
          <Text size="sm" color="dimmed">
            {characterType}
          </Text>
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.character.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.character.id}
            </Text>
          </Group>
          <Group position="apart">
            <Text>
              Corporation:{" "}
              <Anchor
                component
                href={"/corporation/" + data.character.corporation.id}
              >
                {data.character.corporation.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.character.corporation.id}
            </Text>
          </Group>
          {data.character.title && <Text>Title: {data.character.title}</Text>}
          <Text>Gender: {data.character.gender}</Text>
          <Text>Security Status: {data.character.securityStatus}</Text>
          {data.character.alliance && (
            <Group position="apart">
              <Text>
                Alliance:{" "}
                <Anchor
                  component={Link}
                  href={"/alliance/" + data.character.alliance.id}
                >
                  {data.character.alliance.name}
                </Anchor>
              </Text>
              <Text size="xs" color="dimmed">
                {data.character.alliance.id}
              </Text>
            </Group>
          )}
          <Text>
            Birthdate:{" "}
            {moment(Math.floor(Number(data.character.birthday)))
              .utc()
              .format("YYYY-MM-DD HH:mm")
              .toString()}
          </Text>
          <Group position="apart">
            <Text>
              Bloodline:{" "}
              <Anchor
                component={Link}
                href={"/bloodline/" + data.character.bloodline.id}
              >
                {data.character.bloodline.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.character.bloodline.id}
            </Text>
          </Group>
          <Group position="apart">
            <Text>
              Race:{" "}
              <Anchor component={Link} href={"/race/" + data.character.race.id}>
                {data.character.race.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.character.race.id}
            </Text>
          </Group>
          {data.character.faction && (
            <Group position="apart">
              <Text>
                Faction Warfare:{" "}
                <Anchor
                  component={Link}
                  href={"/faction/" + data.character.faction.id}
                >
                  {data.character.faction.name}
                </Anchor>
              </Text>
              <Text size="xs" color="dimmed">
                {data.character.faction.id}
              </Text>
            </Group>
          )}
        </Card.Section>
        <Card.Section p="xl">
          <Image src={data.character.images[0].url} width={128} />
        </Card.Section>
      </Group>
      {/* Agent-only section */}
      {data.character.__typename != "Player" &&
        data.character.__typename != "AuthenticatedPlayer" && (
          <Card.Section p="xl">
            <Text size="md" weight={500}>
              Location:{" "}
              <Anchor
                component={Link}
                href={"/station/" + data.character.location.id}
              >
                {data.character.location.name}
              </Anchor>
            </Text>
            <Text size="md" weight={500}>
              Level: {data.character.level}
            </Text>
            <Text size="md" weight={500}>
              Division: {data.character.division?.name}
            </Text>
            <Text size="md" weight={500}>
              Agent Type: {data.character.agentType?.name}
            </Text>
            <Text size="md" weight={500}>
              Locator agent: {data.character.isLocator ? "Yes" : "No"}
            </Text>
          </Card.Section>
        )}
      {/* Agent-in-space section */}
      {data.character.__typename == "AgentInSpace" && (
        <Card.Section p="xl">
          <Text size="md" weight={500}>
            Solar System:{" "}
            <Anchor
              component={Link}
              href={"/solarsystem/" + data.character.solarSystem.id}
            >
              {data.character.solarSystem.name}
            </Anchor>
          </Text>
          <Text size="md" weight={500}>
            Type:{" "}
            <Anchor component={Link} href={"/type/" + data.character.type.id}>
              {data.character.type.name}
            </Anchor>
          </Text>
          <Text size="md" weight={500}>
            Dungeon: {data.character.dungeon.id}
          </Text>
          <Text size="md" weight={500}>
            Spawn Point: {data.character.spawnPoint.id}
          </Text>
        </Card.Section>
      )}
      {/* Research Agent section */}
      {data.character.__typename == "ResearchAgent" && (
        <Card.Section p="xl">
          Research Skills:{" "}
          {data.character.researchSkills.map((researchSkill) => (
            <Text key={researchSkill.id} size="md" weight={500}>
              <Anchor component={Link} href={"/type/" + researchSkill.id}>
                {researchSkill.name}
              </Anchor>
            </Text>
          ))}
        </Card.Section>
      )}
      {data.character.corporationHistory.length > 0 && (
        <Card.Section p="xl">
          <Text size="md" weight={500}>
            Corporation History ({data.character.corporationHistory.length})
          </Text>
          <Space h="md" />
          <Timeline active={1} bulletSize={32} lineWidth={2}>
            {data.character.corporationHistory.map((corporationMembership) => (
              <Timeline.Item
                key={corporationMembership.recordId}
                bullet={
                  <Image
                    src={
                      corporationMembership.corporation.images[0].url +
                      "?size=32"
                    }
                    width={32}
                  />
                }
              >
                <Anchor
                  component={Link}
                  href={"/corporation/" + corporationMembership.corporation.id}
                >
                  {corporationMembership.corporation.name} since{" "}
                  {moment(corporationMembership.startDate)
                    .utc()
                    .format("YYYY-MM-DD HH:mm")}
                </Anchor>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card.Section>
      )}

      {data.character.description && (
        <Card.Section p="xl">
          <Text
            size="xs"
            mt="xs"
            dangerouslySetInnerHTML={{
              __html: data.character.description ?? "",
            }}
          />
        </Card.Section>
      )}
    </Card>
  );
};

export default CharacterCardDetailed;
