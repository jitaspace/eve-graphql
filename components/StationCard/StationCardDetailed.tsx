import { Anchor, Card, Group, Loader, Skeleton, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetStationDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetStationDetails($stationId: ID!) {
    station(id: $stationId) {
      id
      name
      position {
        x
        z
      }
      solarSystem {
        id
        name
      }
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
      }
      race {
        id
        name
      }
      maxDockableShipVolume
      officeRentalCost
      reprocessingEfficiency
      reprocessingStationsTake
      services
    }
  }
`;

interface Props {
  stationId: string;
}

const StationCardDetailed = ({ stationId }: Props) => {
  const { data, loading, error } = useGetStationDetailsQuery({
    variables: { stationId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <Group position="apart" grow>
          <Group style={{ minWidth: "350px" }}>
            <Group position="apart">
              <Text size="lg" weight={500}>
                <Skeleton visible={loading}>{data.station.name}</Skeleton>
              </Text>
              <Text size="xs" color="dimmed">
                <Skeleton visible={loading}>{data.station.id}</Skeleton>
              </Text>
            </Group>
            {data.station.solarSystem && (
              <Skeleton visible={loading}>
                Solar System:{" "}
                <Anchor
                  component={Link}
                  href={{
                    pathname: "/solarsystem/[id]",
                    query: { id: data.station.solarSystem.id },
                  }}
                >
                  {data.station.solarSystem.name}
                </Anchor>
              </Skeleton>
            )}
            <Skeleton visible={loading}>
              Type:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/type/[id]",
                  query: { id: data.station.type.id },
                }}
              >
                {data.station.type.name ?? ""}
              </Anchor>
            </Skeleton>
            <Text>
              Max Dockable Ship Volume: {data.station.maxDockableShipVolume} m³
            </Text>
            <Text>Office Rental Cost: {data.station.officeRentalCost} ISK</Text>
            <Text>
              Reprocessing Efficiency:{" "}
              {data.station.reprocessingEfficiency * 100}%
            </Text>
            <Text>
              Reprocessing Stations Take:{" "}
              {data.station.reprocessingStationsTake * 100}%
            </Text>
          </Group>
          <Group style={{ maxWidth: "128px" }}>
            <Image
              src={data.station.type.images[0].url ?? ""}
              alt={data.station.type.name ?? ""}
              width={128}
              height={128}
            />
          </Group>
        </Group>
      </Card.Section>
      <Card.Section p="xl">
        Services:{" "}
        {data.station.services.map((name) => (
          <Text key={name} size="sm" transform="capitalize">
            {name.split("-").join(" ")}
          </Text>
        ))}
      </Card.Section>
    </Card>
  );
};

export default StationCardDetailed;
