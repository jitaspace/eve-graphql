import {
  Anchor,
  Card,
  Group,
  Loader,
  Skeleton,
  Space,
  Table,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetSolarSystemDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetSolarSystemDetails($solarSystemId: ID!) {
    solarSystem(id: $solarSystemId) {
      id
      name
      constellation {
        id
        name
        region {
          id
          name
        }
      }
      stations {
        id
        name
        type {
          id
          name
          images {
            url
          }
        }
        owner {
          id
          name
          images {
            url
          }
        }
      }
      planets {
        id
        name
        type {
          id
          name
          images {
            url
          }
        }
        moons {
          id
        }
        asteroidBelts {
          id
        }
      }
      securityStatus
      securityClass
      star {
        id
        name
        type {
          name
        }
      }
      stargates {
        id
        name
        type {
          id
          name
          images {
            url
          }
        }
        destination {
          id
          name
          solarSystem {
            id
            name
            star {
              type {
                images {
                  url
                }
              }
            }
          }
        }
      }
      shipJumps
      shipKills
      podKills
      npcKills
      position {
        x
        y
        z
      }
    }
  }
`;

interface Props {
  solarSystemId: string;
}

const SolarSystemCardDetailed = ({ solarSystemId }: Props) => {
  const { data, loading, error } = useGetSolarSystemDetailsQuery({
    variables: { solarSystemId },
  });

  if (loading) return <Loader />;
  if (error) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <>
          <Group position="apart">
            <Text size="lg" weight={500}>
              <Skeleton visible={loading}>{data?.solarSystem.name}</Skeleton>
            </Text>
            <Text size="xs" color="dimmed">
              <Skeleton visible={loading}>{data?.solarSystem.id}</Skeleton>
            </Text>
          </Group>
          <Skeleton visible={loading}>
            Constellation:{" "}
            <Anchor
              component={Link}
              href={"/constellation/" + data?.solarSystem.constellation.id}
              size="sm"
              mt="xs"
            >
              {data?.solarSystem.constellation.name ?? ""}
            </Anchor>
          </Skeleton>
          <Skeleton visible={loading}>
            Region:{" "}
            <Anchor
              component={Link}
              href={"/region/" + data?.solarSystem.constellation.id}
              size="sm"
              mt="xs"
            >
              {data?.solarSystem.constellation.region.name ?? ""}
            </Anchor>
          </Skeleton>
          <Text size="sm" mt="xs">
            Security Status: {data?.solarSystem.securityStatus}
          </Text>
          <Text size="sm" mt="xs">
            Security Class: {data?.solarSystem.securityClass}
          </Text>
          <Text size="sm" mt="xs">
            Jumps in the last hour: {data?.solarSystem.shipJumps}
          </Text>
          <Text size="sm" mt="xs">
            Ship kills in the last hour: {data?.solarSystem.shipKills}
          </Text>
          <Text size="sm" mt="xs">
            Pod kills in the last hour: {data?.solarSystem.podKills}
          </Text>
          <Text size="sm" mt="xs">
            NPC kills in the last hour: {data?.solarSystem.npcKills}
          </Text>
          <Text size="sm" mt="xs">
            Position: ({data?.solarSystem.position.x},{" "}
            {data?.solarSystem.position.y}, {data?.solarSystem.position.z})
          </Text>
          {data?.solarSystem.star && (
            <>
              Star:{" "}
              <Anchor
                component={Link}
                href={"/star/" + data?.solarSystem.star.id}
                size="sm"
                mt="xs"
              >
                {data?.solarSystem.star?.name} -{" "}
                {data?.solarSystem.star?.type.name}
              </Anchor>
            </>
          )}
        </>
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Stations ({data?.solarSystem.stations.length})
        </Text>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {data?.solarSystem.stations.map((station) => (
              <tr key={station.id}>
                <td>
                  <Anchor
                    component={Link}
                    href={"/station/" + station.id}
                    size="sm"
                    weight={500}
                  >
                    {station.name.slice(0, station.name.lastIndexOf("-"))}
                    <br />
                    {station.name.slice(station.name.lastIndexOf("-") + 1)}
                  </Anchor>
                  <Text color="dimmed" size="xs">
                    {station.id}
                  </Text>
                </td>
                <td>
                  <Group spacing="sm">
                    <Image
                      width={40}
                      height={40}
                      src={station.type.images[0].url}
                    />
                    <div>
                      <Anchor
                        component={Link}
                        href={"/type/" + station.type.id}
                        size="sm"
                        weight={500}
                      >
                        {station.type.name}
                      </Anchor>
                      <Text color="dimmed" size="xs">
                        {station.type.id}
                      </Text>
                    </div>
                  </Group>
                </td>
                <td>
                  <Group spacing="sm">
                    <Image
                      width={40}
                      height={40}
                      src={station.owner.images[0].url}
                    />
                    <div>
                      <Anchor
                        component={Link}
                        href={"/corporation/" + station.owner.id}
                        size="sm"
                        weight={500}
                      >
                        {station.owner.name}
                      </Anchor>
                      <Text color="dimmed" size="xs">
                        {station.owner.id}
                      </Text>
                    </div>
                  </Group>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Section>
      {data?.solarSystem.stargates && (
        <Card.Section p="xl">
          <Text size="md" weight={500}>
            Stargates ({data?.solarSystem.stargates.length})
          </Text>
          <Table sx={{ minWidth: 800 }} verticalSpacing="md">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              {data?.solarSystem.stargates.map((stargate) => (
                <tr key={stargate.id}>
                  <td>
                    <Group spacing="sm">
                      <div>
                        <Anchor
                          component={Link}
                          href={"/stargate/" + stargate.id}
                          size="sm"
                          weight={500}
                        >
                          {stargate.name}
                        </Anchor>
                        <Text color="dimmed" size="xs">
                          {stargate.id}
                        </Text>
                      </div>
                    </Group>
                  </td>
                  <td>
                    <Group spacing="sm">
                      <Image
                        width={40}
                        height={40}
                        src={stargate.type.images[0].url}
                      />
                      <div>
                        <Anchor
                          component={Link}
                          href={"/type/" + stargate.type.id}
                          size="sm"
                        >
                          {stargate.type.name}
                        </Anchor>
                        <Text size="xs" color="dimmed">
                          {stargate.type.id}
                        </Text>
                      </div>
                    </Group>
                  </td>
                  <td>
                    <Group spacing="sm">
                      {stargate.destination.solarSystem.star && (
                        <Image
                          width={40}
                          height={40}
                          src={
                            stargate.destination.solarSystem.star.type.images[0]
                              .url
                          }
                        />
                      )}
                      <div>
                        <Anchor
                          component={Link}
                          href={
                            "/solarsystem/" +
                            stargate.destination.solarSystem.id
                          }
                          size="sm"
                        >
                          {stargate.destination.solarSystem.name}
                        </Anchor>
                        <Group position="apart">
                          <Text size="xs" color="dimmed">
                            {stargate.destination.solarSystem.id}
                          </Text>
                        </Group>
                      </div>
                    </Group>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Space h="md" />
        </Card.Section>
      )}
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Planets ({data?.solarSystem.planets.length})
        </Text>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Moons</th>
              <th>Asteroid Belts</th>
            </tr>
          </thead>
          <tbody>
            {data?.solarSystem.planets.map((planet) => (
              <tr key={planet.id}>
                <td>
                  <Group spacing="sm">
                    <div>
                      <Anchor
                        component={Link}
                        href={"/planet/" + planet.id}
                        size="sm"
                        weight={500}
                      >
                        {planet.name}
                      </Anchor>
                      <Text color="dimmed" size="xs">
                        {planet.id}
                      </Text>
                    </div>
                  </Group>
                </td>
                <td>
                  <Group spacing="sm">
                    <Image
                      width={40}
                      height={40}
                      src={planet.type.images[0].url}
                    />
                    <div>
                      <Anchor
                        component={Link}
                        href={"/type/" + planet.type.id}
                        size="sm"
                      >
                        {planet.type.name}
                      </Anchor>
                      <Text size="xs" color="dimmed">
                        {planet.type.id}
                      </Text>
                    </div>
                  </Group>
                </td>
                <td>
                  <Text>{planet.moons.length}</Text>
                </td>
                <td>
                  <Text>{planet.asteroidBelts.length}</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Section>
    </Card>
  );
};

export default SolarSystemCardDetailed;
