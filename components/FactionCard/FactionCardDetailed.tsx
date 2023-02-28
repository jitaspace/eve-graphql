import {
  Anchor,
  Card,
  Container,
  Group,
  Image,
  Loader,
  Progress,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetFactionDetailsQuery } from "@/generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetFactionDetails($factionId: ID!) {
    faction(id: $factionId) {
      id
      name
      description
      isUnique
      sizeFactor
      stationCount
      stationSystemCount
      solarSystem {
        id
        name
      }
      corporation {
        id
        name
      }
      militiaCorporation {
        id
        name
      }
      images {
        name
        url
      }
    }
  }
`;

interface Props {
  factionId: string;
}

const FactionCardDetailed = ({ factionId }: Props) => {
  const { data, loading, error } = useGetFactionDetailsQuery({
    variables: { factionId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group grow>
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.faction.name}
            </Text>
            <Text align="right" size="xs" color="dimmed">
              {data.faction.id}
            </Text>
            <Card.Section p="xl">
              {data.faction.corporation && (
                <Text>
                  Corporation:{" "}
                  <Anchor
                    component={Link}
                    href={{
                      pathname: "/corporation/[id]",
                      query: { id: data.faction.corporation.id },
                    }}
                  >
                    {data.faction.corporation.name}
                  </Anchor>
                </Text>
              )}
              {data.faction.militiaCorporation && (
                <Text>
                  Militia Corporation:{" "}
                  <Anchor
                    component={Link}
                    href={{
                      pathname: "/corporation/[id]",
                      query: { id: data.faction.militiaCorporation.id },
                    }}
                  >
                    {data.faction.militiaCorporation.name}
                  </Anchor>
                </Text>
              )}
              {data.faction.solarSystem && (
                <Text>
                  Solar System:{" "}
                  <Anchor
                    component={Link}
                    href={{
                      pathname: "/solarsystem/[id]",
                      query: { id: data.faction.solarSystem.id },
                    }}
                  >
                    {data.faction.solarSystem.name}
                  </Anchor>
                </Text>
              )}
            </Card.Section>
          </Group>
          <Container style={{ maxWidth: 128 }}>
            <Image src={data.faction.images[0].url} width={128} />
          </Container>
        </Group>
        <Text
          size="xs"
          mt="xs"
          dangerouslySetInnerHTML={{
            __html: data?.faction.description ?? "",
          }}
        />
      </Card.Section>

      <Card.Section p="xl">
        <Text>Is unique: {data.faction.isUnique ? "Yes" : "No"}</Text>
        <Group position="apart" grow>
          <Text>Size Factor</Text>
          <Progress
            style={{ minWidth: "350px" }}
            size="xl"
            value={data.faction.sizeFactor * 20}
            label={data.faction.sizeFactor.toString()}
            color="dark"
          />
        </Group>
        <Text>Station count: {data.faction.stationCount}</Text>
        <Text>Station system count: {data.faction.stationSystemCount}</Text>
      </Card.Section>
    </Card>
  );
};

export default FactionCardDetailed;
