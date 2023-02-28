import { Anchor, Badge, Card, Group, Progress, Text } from "@mantine/core";
import React from "react";
import Link from "next/link";

interface Props {
  type: string;
  state: string;
  influence: number;
  hasBoss: boolean;
  constellation: {
    id: string;
    name: string;
  };
  faction: {
    id: string;
    name: string;
  };
  stagingSolarSystem: {
    id: string;
    name: string;
  };
  infestedSolarSystems: {
    id: string;
    name: string;
  }[];
}

const IncursionCardDetailed = ({
  type,
  state,
  influence,
  hasBoss,
  constellation,
  faction,
  infestedSolarSystems,
  stagingSolarSystem,
}: Props) => {
  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group position="apart">
          <Anchor
            component={Link}
            href={{
              pathname: "/faction/[id]",
              query: { id: faction.id },
            }}
            size="lg"
            weight={500}
          >
            {faction.name}
          </Anchor>
          <Text align="right" size="xs" color="dimmed">
            {faction.id}
          </Text>
        </Group>
        <Text>Type: {type}</Text>
        <Text transform="capitalize">
          State: {state.toLowerCase()}{" "}
          {hasBoss && <Badge color="red">Boss</Badge>}
        </Text>
        <Group position="apart">
          <Text>Influence: {influence * 100}%</Text>
          <Progress
            style={{ minWidth: "150px" }}
            size="lg"
            value={influence * 100}
            label={influence * 100 + "%"}
            color="dark"
          />
        </Group>
        <Group position="apart">
          <Text>
            Staging Solar System:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/solarsystem/[id]",
                query: { id: stagingSolarSystem.id },
              }}
            >
              {stagingSolarSystem.name}
            </Anchor>
          </Text>
          <Text align="right" size="xs" color="dimmed">
            {stagingSolarSystem.id}
          </Text>
        </Group>
        <Group position="apart">
          <Text>
            Constellation:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/constellation/[id]",
                query: { id: constellation.id },
              }}
            >
              {constellation.name}
            </Anchor>
          </Text>
          <Text align="right" size="xs" color="dimmed">
            {constellation.id}
          </Text>
        </Group>
        <Card.Section p="xl">
          <Text size="lg" weight={500}>
            Staging Systems
          </Text>
          {infestedSolarSystems.map((solarSystem) => (
            <Group key={solarSystem.id} position="apart">
              <Anchor
                component={Link}
                href={{
                  pathname: "/solarsystem/[id]",
                  query: { id: solarSystem.id },
                }}
              >
                {solarSystem.name}
              </Anchor>
              <Text align="right" size="xs" color="dimmed">
                {solarSystem.id}
              </Text>
            </Group>
          ))}
        </Card.Section>
      </Card.Section>
    </Card>
  );
};

export default IncursionCardDetailed;
