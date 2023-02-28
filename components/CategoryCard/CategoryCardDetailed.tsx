import { Anchor, Card, Group, Loader, SimpleGrid, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetCategoryDetailsQuery } from "@/generated/graphql";
import React from "react";
import { GraphQLErrorAlert } from "../Alert";
import Link from "next/link";

export const QUERY = gql`
  query GetCategoryDetails($categoryId: ID!) {
    category(id: $categoryId) {
      id
      name
      published
      groups {
        id
        name
      }
    }
  }
`;

interface Props {
  categoryId: string;
}

const CategoryCardDetailed = ({ categoryId }: Props) => {
  const { data, loading, error } = useGetCategoryDetailsQuery({
    variables: { categoryId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {data.category.name}
          </Text>
          <Text size="xs" color="dimmed">
            {data.category.id}
          </Text>
        </Group>
        <Text>Published: {data.category.published ? "Yes" : "No"}</Text>
      </Card.Section>
      <Card.Section p="xl">
        <Text color="dimmed">Groups</Text>
        <SimpleGrid cols={2}>
          {data.category.groups.map(({ id, name }) => (
            <Anchor
              key={id}
              component={Link}
              href={{
                pathname: "/group/[id]",
                query: { id: id },
              }}
            >
              {name}
            </Anchor>
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
};

export default CategoryCardDetailed;
