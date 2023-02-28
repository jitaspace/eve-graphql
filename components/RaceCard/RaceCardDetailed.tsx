import {
  Anchor,
  Card,
  Group,
  Loader,
  Skeleton,
  Spoiler,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import { useGetRaceDetailsQuery } from "@/generated/graphql";

export const QUERY = gql`
  query GetRaceDetails($raceId: ID!) {
    race(id: $raceId) {
      id
      name
      description
      faction {
        id
        name
      }
    }
  }
`;

interface Props {
  raceId: string;
}

const RaceCardDetailed = ({ raceId }: Props) => {
  const { data, loading, error } = useGetRaceDetailsQuery({
    variables: { raceId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {data.race.name}
          </Text>
          <Text size="xs" color="dimmed">
            {data.race.id}
          </Text>
        </Group>
        <Spoiler maxHeight={120} hideLabel="Show less" showLabel="Show more">
          <Skeleton visible={loading}>
            <Text
              size="xs"
              mt="xs"
              dangerouslySetInnerHTML={{
                __html: data?.race.description ?? "",
              }}
            />
          </Skeleton>
        </Spoiler>
      </Card.Section>
      <Card.Section p="xl">
        {data.race.faction && (
          <Text>
            Faction:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/faction/[id]",
                query: { id: data.race.faction.id },
              }}
            >
              {data.race.faction.name}
            </Anchor>
          </Text>
        )}
      </Card.Section>
    </Card>
  );
};

export default RaceCardDetailed;
