import { Anchor, Card, Group, Loader, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetStarDetailsQuery } from "@/generated/graphql";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraphQLErrorAlert } from "../Alert";

export const QUERY = gql`
  query GetStarDetails($starId: ID!) {
    star(id: $starId) {
      id
      age
      luminosity
      name
      radius
      spectralClass
      temperature
      solarSystem {
        id
        name
      }
      type {
        id
        name
        images {
          name
          url
        }
      }
    }
  }
`;

interface Props {
  starId: string;
}

const StarCardDetailed = ({ starId }: Props) => {
  const { data, loading, error } = useGetStarDetailsQuery({
    variables: { starId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.star.name}
            </Text>
            <Text align="right" size="xs" color="dimmed">
              {data.star.id}
            </Text>
          </Group>
          <Text>Luminosity: {data.star.luminosity}</Text>
          <Text>Radius: {data.star.radius}</Text>
          <Text>Temperature: {data.star.temperature}</Text>
          <Text>Age: {data.star.age}</Text>
          <Text>Spectral Class: {data.star.spectralClass}</Text>
          <Text>
            Type:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/type/[id]",
                query: { id: data.star.type.id },
              }}
            >
              {data.star.type.name}
            </Anchor>
          </Text>
          <Text>
            Solar System:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/solarsystem/[id]",
                query: { id: data.star.solarSystem.id },
              }}
            >
              {data.star.solarSystem.name}
            </Anchor>
          </Text>
        </Card.Section>
        <Image
          src={
            "https://images.evetech.net/types/" + data.star.type.id + "/render"
          }
          alt={data.star.type.name}
          width={256}
          height={256}
          style={{ borderRadius: "128px", overflow: "hidden" }}
        />
      </Group>
    </Card>
  );
};

export default StarCardDetailed;
