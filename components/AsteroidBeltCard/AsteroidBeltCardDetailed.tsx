import {
  Anchor,
  Card,
  Group,
  Loader,
  Skeleton,
  Table,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetAsteroidBeltDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetAsteroidBeltDetails($asteroidBeltId: ID!) {
    asteroidBelt(id: $asteroidBeltId) {
      id
      name
      solarSystem {
        id
        name
      }
      position {
        x
        y
        z
      }
    }
  }
`;

interface Props {
  asteroidBeltId: string;
}

const AsteroidBeltCardDetailed = ({ asteroidBeltId }: Props) => {
  const { data, loading, error } = useGetAsteroidBeltDetailsQuery({
    variables: { asteroidBeltId },
  });

  if (loading) return <Loader />;
  if (error) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <Table width="100%" horizontalSpacing="xl">
          <tr>
            <td>
              <Group position="apart" mr="xl">
                <Text size="lg" weight={500}>
                  <Skeleton visible={loading}>
                    {data?.asteroidBelt.name}
                  </Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>{data?.asteroidBelt.id}</Skeleton>
                </Text>
              </Group>
              <Group position="apart" mr="xl">
                <Text>
                  <Skeleton visible={loading}>
                    Solar System:{" "}
                    <Anchor
                      component={Link}
                      href={"/solarsystem/" + data?.asteroidBelt.solarSystem.id}
                    >
                      {data?.asteroidBelt.solarSystem.name}
                    </Anchor>
                  </Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>
                    {data?.asteroidBelt.solarSystem.id}
                  </Skeleton>
                </Text>
              </Group>
              <Text size="sm" mt="xs">
                Position: ({data?.asteroidBelt.position.x},{" "}
                {data?.asteroidBelt.position.y}, {data?.asteroidBelt.position.z}
                )
              </Text>
            </td>
            <td style={{ width: "128px" }}>
              <Image
                src="https://images.evetech.net/types/15/icon"
                width={128}
                height={128}
              />
            </td>
          </tr>
        </Table>
      </Card.Section>
    </Card>
  );
};

export default AsteroidBeltCardDetailed;
