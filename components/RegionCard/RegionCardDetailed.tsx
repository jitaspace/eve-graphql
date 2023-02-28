import {
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
import { useGetRegionConstellationsQuery } from "@/generated/graphql";
import ActionsGrid from "../ActionsGrid";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetRegionConstellations($regionId: ID!) {
    region(id: $regionId) {
      id
      name
      description
      constellations {
        id
        name
      }
    }
  }
`;

interface Props {
  regionId: string;
}

const RegionCardDetailed = ({ regionId }: Props) => {
  const { data, loading, error } = useGetRegionConstellationsQuery({
    variables: { regionId },
  });

  if (loading) return <Loader />;
  if (error) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <>
          <Group position="apart">
            <Text size="lg" weight={500}>
              <Skeleton visible={loading}>{data?.region.name}</Skeleton>
            </Text>
            <Text size="xs" color="dimmed">
              <Skeleton visible={loading}>{data?.region.id}</Skeleton>
            </Text>
          </Group>
          <Spoiler maxHeight={120} hideLabel="Show less" showLabel="Show more">
            <Skeleton visible={loading}>
              <Text
                size="xs"
                mt="xs"
                dangerouslySetInnerHTML={{
                  __html: data?.region.description ?? "",
                }}
              />
            </Skeleton>
          </Spoiler>
        </>
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Constellations
        </Text>
        <Space h="md" />
        <ActionsGrid cols={3}>
          {data?.region.constellations.map((constellation) => (
            <Link
              key={constellation.id}
              href={{
                pathname: "/constellation/[id]",
                query: { id: constellation.id },
              }}
            >
              <UnstyledButton key={constellation.id}>
                <Title align="center" order={5}>
                  {constellation.name}
                </Title>
              </UnstyledButton>
            </Link>
          )) ?? <p>loading</p>}
        </ActionsGrid>
      </Card.Section>
    </Card>
  );
};

export default RegionCardDetailed;
