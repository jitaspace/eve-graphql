import {
  Anchor,
  Badge,
  Card,
  Group,
  Image,
  Loader,
  Text,
  Tooltip,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetTypeDetailsQuery } from "@/generated/graphql";
import React from "react";
import { GraphQLErrorAlert } from "../Alert";
import Link from "next/link";

export const QUERY = gql`
  query GetTypeDetails($typeId: ID!) {
    type(id: $typeId) {
      id
      name
      capacity
      description
      attributes {
        attribute {
          id
          name
          displayName
          description
          unit {
            id
            displayName
          }
        }
        value
      }
      effects {
        effect {
          id
          name
          displayName
          description
        }
        isDefault
      }
      graphic {
        id
      }
      group {
        id
        name
        category {
          id
          name
        }
      }
      icon {
        id
        file
      }
      images {
        url
      }
      marketGroup {
        id
        name
      }
      mass
      packagedVolume
      portionSize
      published
      radius
      volume
    }
  }
`;

interface Props {
  typeId: string;
}

const TypeCardDetailed = ({ typeId }: Props) => {
  const { data, loading, error } = useGetTypeDetailsQuery({
    variables: { typeId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card p="xl">
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.type.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.type.id}
            </Text>
          </Group>
          <Text>
            Group:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/group/[id]",
                query: { id: data.type.group.id },
              }}
            >
              {data.type.group.name}
            </Anchor>
          </Text>
          <Text>Published: {data.type.published ? "Yes" : "No"}</Text>
          {data.type.capacity != null && (
            <Text>Capacity: {data.type.capacity} m³</Text>
          )}
          {data.type.mass != null && <Text>Mass: {data.type.mass} kg</Text>}
          {data.type.radius != null && (
            <Text>Radius: {data.type.radius} m</Text>
          )}
          {data.type.volume != null && (
            <Text>Volume: {data.type.volume} m³</Text>
          )}
          {data.type.portionSize != null && (
            <Text>Portion Size: {data.type.portionSize}</Text>
          )}
          {data.type.packagedVolume != null && (
            <Text>Packaged Volume: {data.type.packagedVolume} m³</Text>
          )}
          {data.type.graphic && <Text>Graphic: {data.type.graphic.id}</Text>}
          {data.type.marketGroup && (
            <Group position="apart">
              <Text>
                Market Group:{" "}
                <Anchor
                  component={Link}
                  href={{
                    pathname: "/marketgroup/[id]",
                    query: { id: data.type.marketGroup.id },
                  }}
                >
                  {data.type.marketGroup.name}
                </Anchor>
              </Text>
              <Text size="xs" color="dimmed">
                {data.type.marketGroup.id}
              </Text>
            </Group>
          )}
          {data.type.icon && (
            <Group position="apart">
              <Text>Icon: {data.type.icon.file}</Text>
              <Text size="xs" color="dimmed">
                {data.type.icon.id}
              </Text>
            </Group>
          )}
        </Card.Section>
        {data.type.images.length > 0 && (
          <Card.Section p="xl">
            <Image src={data.type.images[0].url + "?size=128"} width={128} />
          </Card.Section>
        )}
      </Group>
      <Card.Section p="xl">
        <Text
          dangerouslySetInnerHTML={{
            __html: data.type.description ?? "",
          }}
        />
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Attributes ({data.type.attributes.length})
        </Text>
        {data.type.attributes.map(({ attribute, value }) => (
          <Tooltip
            key={attribute.id}
            label={attribute.description}
            offset={20}
            multiline
            width={400}
          >
            <Group position="apart">
              <Anchor
                component={Link}
                href={{
                  pathname: "/attribute/[id]",
                  query: { id: attribute.id },
                }}
              >
                {attribute.displayName || attribute.name}: {value}{" "}
                {attribute.unit?.displayName}
              </Anchor>

              <Text size="xs" color="dimmed">
                {attribute.id}
              </Text>
            </Group>
          </Tooltip>
        ))}
      </Card.Section>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Effects ({data.type.effects.length})
        </Text>
        {data.type.effects.map(({ effect, isDefault }) => (
          <Tooltip
            key={effect.id}
            label={effect.description}
            offset={20}
            multiline
            width={400}
          >
            <Group position="apart">
              <Anchor
                component={Link}
                href={{
                  pathname: "/effect/[id]",
                  query: { id: effect.id },
                }}
              >
                {effect.displayName || effect.name}{" "}
                {isDefault && <Badge>default</Badge>}
              </Anchor>
              <Text size="xs" color="dimmed">
                {effect.id}
              </Text>
            </Group>
          </Tooltip>
        ))}
      </Card.Section>
    </Card>
  );
};

export default TypeCardDetailed;
