import { Anchor, Card, Group, Loader, Skeleton, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetStargateDetailsQuery } from "@/generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetStargateDetails($stargateId: ID!) {
    stargate(id: $stargateId) {
      id
      name
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
      solarSystem {
        id
        name
        star {
          id
          type {
            images {
              url
            }
          }
        }
      }
      destination {
        id
        name
        type {
          id
          name
          images {
            url
          }
        }
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
  }
`;

interface Props {
  stargateId: string;
}

const StargateCardDetailed = ({ stargateId }: Props) => {
  const { data, loading, error } = useGetStargateDetailsQuery({
    variables: { stargateId },
  });

  if (loading) return <Loader />;
  if (!data || error) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <Group position="apart" grow>
          <Group style={{ minWidth: "350px" }}>
            <Group position="apart">
              <Text size="lg" weight={500}>
                <Skeleton visible={loading}>{data.stargate.name}</Skeleton>
              </Text>
              <Text size="xs" color="dimmed">
                <Skeleton visible={loading}>{data.stargate.id}</Skeleton>
              </Text>
            </Group>
            {data.stargate.solarSystem && (
              <Skeleton visible={loading}>
                Solar System:{" "}
                <Anchor
                  component={Link}
                  href={{
                    pathname: "/solarsystem/[id]",
                    query: { id: data.stargate.solarSystem.id },
                  }}
                >
                  {data.stargate.solarSystem.name}
                </Anchor>
              </Skeleton>
            )}
            Position:
            <Group position="center" spacing="xs">
              {Object.entries(data.stargate.position)
                .filter(([key]) => key.length == 1)
                .map(([key, value]) => (
                  <div key={"x"}>
                    <Text align="center" size="lg" color="dimmed">
                      {key}
                    </Text>
                    <Text align="center" size="sm">
                      {value}
                    </Text>
                  </div>
                ))}
            </Group>
            <Skeleton visible={loading}>
              Type:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/type/[id]",
                  query: { id: data.stargate.type.id },
                }}
              >
                {data.stargate.type.name ?? ""}
              </Anchor>
            </Skeleton>
            <Skeleton visible={loading}>
              Destination:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/stargate/[id]",
                  query: { id: data.stargate.destination.id },
                }}
              >
                {data.stargate.destination.name ?? ""}
              </Anchor>{" "}
              in{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/solarsystem/[id]",
                  query: { id: data.stargate.destination.solarSystem.id },
                }}
              >
                {data.stargate.destination.solarSystem.name ?? ""}
              </Anchor>
            </Skeleton>
          </Group>
          <Group style={{ maxWidth: "128px" }}>
            <Image
              src={data.stargate.type.images[0].url ?? ""}
              alt={data.stargate.type.name ?? ""}
              width={128}
              height={128}
            />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default StargateCardDetailed;
