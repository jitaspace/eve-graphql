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
import { useGetMoonDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import Image from "next/image";

export const QUERY = gql`
  query GetMoonDetails($moonId: ID!) {
    moon(id: $moonId) {
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
  moonId: string;
}

const MoonCardDetailed = ({ moonId }: Props) => {
  const { data, loading, error } = useGetMoonDetailsQuery({
    variables: { moonId },
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
                  <Skeleton visible={loading}>{data?.moon.name}</Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>{data?.moon.id}</Skeleton>
                </Text>
              </Group>
              <Group position="apart" mr="xl">
                <Text>
                  <Skeleton visible={loading}>
                    Solar System:{" "}
                    <Anchor
                      component={Link}
                      href={"/solarsystem/" + data?.moon.solarSystem.id}
                    >
                      {data?.moon.solarSystem.name}
                    </Anchor>
                  </Skeleton>
                </Text>
                <Text size="xs" color="dimmed">
                  <Skeleton visible={loading}>
                    {data?.moon.solarSystem.id}
                  </Skeleton>
                </Text>
              </Group>
              <Text size="sm" mt="xs">
                Position: ({data?.moon.position.x}, {data?.moon.position.y},{" "}
                {data?.moon.position.z})
              </Text>
            </td>
            <td style={{ width: "128px" }}>
              <Image
                src="https://images.evetech.net/types/14/icon"
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

export default MoonCardDetailed;
