import { Anchor, Card, Group, Loader, SimpleGrid, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetGroupDetailsQuery } from "@/generated/graphql";
import React from "react";
import { GraphQLErrorAlert } from "../Alert";
import Link from "next/link";

export const QUERY = gql`
  query GetGroupDetails($groupId: ID!) {
    group(id: $groupId) {
      id
      name
      published
      category {
        id
        name
      }
      types {
        id
        name
      }
    }
  }
`;

interface Props {
  groupId: string;
}

const GroupCardDetailed = ({ groupId }: Props) => {
  const { data, loading, error } = useGetGroupDetailsQuery({
    variables: { groupId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {data.group.name}
          </Text>
          <Text size="xs" color="dimmed">
            {data.group.id}
          </Text>
        </Group>
        <Text>
          Category:{" "}
          <Anchor
            component={Link}
            href={{
              pathname: "/category/[id]",
              query: { id: data.group.category.id },
            }}
          >
            {data.group.category.name}
          </Anchor>
        </Text>

        <Text>Published: {data.group.published ? "Yes" : "No"}</Text>
      </Card.Section>
      <Card.Section p="xl">
        <Text color="dimmed">Types</Text>
        <SimpleGrid cols={2}>
          {data.group.types.map(({ id, name }) => (
            <Text key={id}>
              <Anchor
                component={Link}
                href={{
                  pathname: "/type/[id]",
                  query: { id },
                }}
              >
                {name}
              </Anchor>
            </Text>
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
};

export default GroupCardDetailed;
