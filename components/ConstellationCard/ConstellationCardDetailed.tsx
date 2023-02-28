import {
  Anchor,
  Card,
  Group,
  Loader,
  Skeleton,
  Space,
  Spoiler,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetConstellationDetailsQuery } from "../../generated/graphql";
import ActionsGrid from "../ActionsGrid";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetConstellationDetails($constellationId: ID!) {
    constellation(id: $constellationId) {
      id
      name
      region {
        id
        name
      }
      solarSystems {
        id
        name
      }
    }
  }
`;

interface Props {
  constellationId: string;
}

const ConstellationCardDetailed = ({ constellationId }: Props) => {
  const { data, loading, error } = useGetConstellationDetailsQuery({
    variables: { constellationId },
  });

  if (loading) return <Loader />;
  if (!data || error) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <>
          <Group position="apart">
            <Text size="lg" weight={500}>
              <Skeleton visible={loading}>{data?.constellation.name}</Skeleton>
            </Text>
            <Text size="xs" color="dimmed">
              <Skeleton visible={loading}>{data?.constellation.id}</Skeleton>
            </Text>
          </Group>
          <Spoiler maxHeight={120} hideLabel="Show less" showLabel="Show more">
            <Skeleton visible={loading}>
              <Anchor
                component={Link}
                href={{
                  pathname: "/region/[id]",
                  query: { id: data.constellation.region.id },
                }}
                size="sm"
                mt="xs"
              >
                {data?.constellation.region.name ?? ""}
              </Anchor>
            </Skeleton>
          </Spoiler>
        </>
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Solar Systems
        </Text>
        <Space h="md" />
        <ActionsGrid cols={3}>
          {data?.constellation.solarSystems.map((solarSystem) => (
            <UnstyledButton
              component={Link}
              href={{
                pathname: "/solarsystem/[id]",
                query: { id: solarSystem.id },
              }}
              key={solarSystem.id}
            >
              <Title align="center" order={5}>
                {solarSystem.name}
              </Title>
            </UnstyledButton>
          )) ?? <p>loading</p>}
        </ActionsGrid>
      </Card.Section>
    </Card>
  );
};

export default ConstellationCardDetailed;
