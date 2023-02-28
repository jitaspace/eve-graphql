import {
  Anchor,
  Card,
  Group,
  Loader,
  Progress,
  Skeleton,
  Spoiler,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetBloodlineDetailsQuery } from "@/generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetBloodlineDetails($bloodlineId: ID!) {
    bloodline(id: $bloodlineId) {
      id
      name
      description
      corporation {
        id
        name
      }
      race {
        id
        name
      }
      shipType {
        id
        name
      }
      charisma
      intelligence
      memory
      perception
      willpower
    }
  }
`;

interface Props {
  bloodlineId: string;
}

const BloodlineCardDetailed = ({ bloodlineId }: Props) => {
  const { data, loading, error } = useGetBloodlineDetailsQuery({
    variables: { bloodlineId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {data.bloodline.name}
          </Text>
          <Text size="xs" color="dimmed">
            {data.bloodline.id}
          </Text>
        </Group>
        <Spoiler maxHeight={120} hideLabel="Show less" showLabel="Show more">
          <Skeleton visible={loading}>
            <Text
              size="xs"
              mt="xs"
              dangerouslySetInnerHTML={{
                __html: data?.bloodline.description ?? "",
              }}
            />
          </Skeleton>
        </Spoiler>
      </Card.Section>
      <Card.Section p="xl">
        {data.bloodline.race.name && (
          <Text>
            Race:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/race/[id]",
                query: {
                  id: data.bloodline.race.id,
                },
              }}
            >
              {data.bloodline.race.name}
            </Anchor>
          </Text>
        )}
        <Text>
          Corporation:{" "}
          <Anchor
            component={Link}
            href={{
              pathname: "/corporation/[id]",
              query: {
                id: data.bloodline.corporation.id,
              },
            }}
          >
            {data.bloodline.corporation.name}
          </Anchor>
        </Text>
        {data.bloodline.shipType && (
          <Text>
            Corvette:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/type/[id]",
                query: {
                  id: data.bloodline.shipType.id,
                },
              }}
            >
              {data.bloodline.shipType.name}
            </Anchor>
          </Text>
        )}
      </Card.Section>
      <Card.Section p="xl">
        <Text color="dimmed">Attributes</Text>
        {["Charisma", "Intelligence", "Memory", "Perception", "Willpower"].map(
          (attributeName) => {
            // @ts-ignore
            const value = Number(data.bloodline[attributeName.toLowerCase()]);
            return (
              <Group key={attributeName} position="apart" grow>
                <Text>{attributeName}</Text>
                <Progress
                  style={{ minWidth: "350px" }}
                  size="xl"
                  value={value * 10}
                  label={value.toString()}
                  color="dark"
                />
              </Group>
            );
          }
        )}
      </Card.Section>
    </Card>
  );
};

export default BloodlineCardDetailed;
