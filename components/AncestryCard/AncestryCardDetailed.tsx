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
import { useGetAncestryDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetAncestryDetails($ancestryId: ID!) {
    ancestry(id: $ancestryId) {
      id
      name
      description
      icon {
        id
      }
      bloodline {
        id
        name
      }
    }
  }
`;

interface Props {
  ancestryId: string;
}

const AncestryCardDetailed = ({ ancestryId }: Props) => {
  const { data, loading, error } = useGetAncestryDetailsQuery({
    variables: { ancestryId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.ancestry.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.ancestry.id}
            </Text>
          </Group>
          <Spoiler maxHeight={120} hideLabel="Show less" showLabel="Show more">
            <Skeleton visible={loading}>
              <Text
                size="xs"
                mt="xs"
                dangerouslySetInnerHTML={{
                  __html: data?.ancestry.description ?? "",
                }}
              />
            </Skeleton>
          </Spoiler>
          <Text>
            Bloodline:{" "}
            <Anchor
              component={Link}
              href={"/bloodline/" + data.ancestry.bloodline.id}
            >
              {data.ancestry.bloodline.name}
            </Anchor>
          </Text>
        </Card.Section>
      </Group>
    </Card>
  );
};

export default AncestryCardDetailed;
