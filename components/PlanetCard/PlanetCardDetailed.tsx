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
import { useGetPlanetDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetPlanetDetails($planetId: ID!) {
    planet(id: $planetId) {
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
      type {
        id
        name
        images {
          url
        }
      }
      moons {
        id
        name
        position {
          x
          y
          z
        }
      }
      asteroidBelts {
        id
        name
        position {
          x
          y
          z
        }
      }
    }
  }
`;

interface Props {
  planetId: string;
}

const PlanetCardDetailed = ({ planetId }: Props) => {
  const { data, loading, error } = useGetPlanetDetailsQuery({
    variables: { planetId },
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
                  <Skeleton visible={loading}>{data?.planet.name}</Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>{data?.planet.id}</Skeleton>
                </Text>
              </Group>
              <Group position="apart" mr="xl">
                <Text>
                  <Skeleton visible={loading}>
                    Solar System:{" "}
                    <Anchor
                      component={Link}
                      href={"/solarsystem/" + data?.planet.solarSystem.id}
                    >
                      {data?.planet.solarSystem.name}
                    </Anchor>
                  </Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>
                    {data?.planet.solarSystem.id}
                  </Skeleton>
                </Text>
              </Group>
              <Group position="apart" mr="xl">
                <Text>
                  <Skeleton visible={loading}>
                    Type:{" "}
                    <Anchor
                      component={Link}
                      href={"/type/" + data?.planet.type.id}
                    >
                      {data?.planet.type.name}
                    </Anchor>
                  </Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>{data?.planet.type.id}</Skeleton>
                </Text>
              </Group>
              <Text size="sm" mt="xs">
                Position: ({data?.planet.position.x}, {data?.planet.position.y},{" "}
                {data?.planet.position.z})
              </Text>
            </td>
            <td style={{ width: "128px" }}>
              <Image
                src={data?.planet.type.images[0].url ?? ""}
                width={128}
                height={128}
              />
            </td>
          </tr>
        </Table>
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Moons ({data?.planet.moons.length})
        </Text>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data?.planet.moons.map((moon) => (
              <tr key={moon.id}>
                <td>
                  <Anchor
                    component={Link}
                    href={"/moon/" + moon.id}
                    size="sm"
                    weight={500}
                  >
                    {moon.name}
                  </Anchor>
                  <Text color="dimmed" size="xs">
                    {moon.id}
                  </Text>
                </td>
                <td>
                  ({moon.position.x}, {moon.position.y}, {moon.position.z})
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Asteroid Belts ({data?.planet.asteroidBelts.length})
        </Text>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data?.planet.asteroidBelts.map((asteroidBelt) => (
              <tr key={asteroidBelt.id}>
                <td>
                  <Anchor
                    component={Link}
                    href={"/asteroidbelt/" + asteroidBelt.id}
                    size="sm"
                    weight={500}
                  >
                    {asteroidBelt.name}
                  </Anchor>

                  <Text color="dimmed" size="xs">
                    {asteroidBelt.id}
                  </Text>
                </td>
                <td>
                  ({asteroidBelt.position.x}, {asteroidBelt.position.y},{" "}
                  {asteroidBelt.position.z})
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Section>
    </Card>
  );
};

export default PlanetCardDetailed;
