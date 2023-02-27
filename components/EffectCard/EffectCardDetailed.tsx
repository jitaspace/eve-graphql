import {
  Anchor,
  Badge,
  Card,
  Group,
  Loader,
  Skeleton,
  Text,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetEffectDetailsQuery } from "../../generated/graphql";
import React from "react";
import { GraphQLErrorAlert } from "../Alert";
import Link from "next/link";

export const QUERY = gql`
  query GetEffectDetails($effectId: ID!) {
    effect(id: $effectId) {
      # human-readable stuff
      id
      displayName
      name
      description

      # simple fields
      disallowAutoRepeat
      effectCategory # FIXME
      electronicChance
      isAssistance
      isOffensive
      isWarpSafe
      postExpression
      preExpression
      published
      rangeChance

      # composite but not too hard
      icon {
        id
        file
        description
      }

      # not sure yet
      effectCategory
      modifiers {
        func
        domain
        operator
        effect {
          id
          displayName
          name
        }
        modifiedAttribute {
          id
          displayName
          name
        }
        modifyingAttribute {
          id
          name
          displayName
        }
      }

      # attributes referenced
      dischargeAttribute {
        id
        displayName
        name
        defaultValue
        unit {
          id
          displayName
          name
        }
      }
      durationAttribute {
        id
        displayName
        name
        defaultValue
        unit {
          id
          displayName
          name
        }
      }
      falloffAttribute {
        id
        displayName
        name
        defaultValue
        unit {
          id
          displayName
          name
        }
      }
      rangeAttribute {
        id
        displayName
        name
        defaultValue
        unit {
          id
          displayName
          name
        }
      }
      trackingSpeedAttribute {
        id
        displayName
        name
        defaultValue
        unit {
          id
          displayName
          name
        }
      }
    }
  }
`;

interface Props {
  effectId: string;
}

const EffectCardDetailed = ({ effectId }: Props) => {
  const { data, loading, error } = useGetEffectDetailsQuery({
    variables: { effectId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const displayAttributeRow = (
    attributeType?: string,
    attribute?: {
      id: string;
      displayName?: string | null;
      name?: string | null;
    } | null
  ) =>
    attribute && (
      <Group position="apart">
        <Group spacing="xs">
          {attributeType}:{" "}
          <Anchor component={Link} href={"/attribute/" + attribute.id}>
            {attribute.displayName ?? attribute.name ?? "Unnamed Attribute"}
          </Anchor>
        </Group>
        <Text size="xs" color="dimmed">
          {attribute.id}
        </Text>
      </Group>
    );

  return (
    <Card>
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            <Skeleton visible={loading}>
              {data.effect.displayName ||
                data.effect.name ||
                "(nameless effect)"}
            </Skeleton>
          </Text>
          <Text size="xs" color="dimmed">
            <Skeleton visible={loading}>{data.effect.id}</Skeleton>
          </Text>
        </Group>
        <Text
          size="xs"
          mt="xs"
          dangerouslySetInnerHTML={{
            __html: data?.effect.description ?? "",
          }}
        />
        <Text>
          Disallow Auto Repeat: {data.effect.disallowAutoRepeat ? "Yes" : "No"}
        </Text>
        <Text>Effect Category ID: {data.effect.effectCategory}</Text>
        <Text>
          Electronic Chance: {data.effect.electronicChance ? "Yes" : "No"}
        </Text>
        <Text>Is Assistance: {data.effect.isAssistance ? "Yes" : "No"}</Text>
        <Text>Is Offensive: {data.effect.isOffensive ? "Yes" : "No"}</Text>
        <Text>Is Warp Safe: {data.effect.isWarpSafe ? "Yes" : "No"}</Text>
        <Text>Pre-Expression: {data.effect.preExpression}</Text>
        <Text>Post-Expression: {data.effect.postExpression}</Text>
        <Text>Published: {data.effect.published ? "Yes" : "No"}</Text>
        <Text>Range Chance: {data.effect.rangeChance ? "Yes" : "No"}</Text>
        <Text>
          Effect Category: {data.effect.effectCategory}{" "}
          <Badge color="red">WTF?!</Badge>
        </Text>
        {data.effect.icon && (
          <Group position="apart">
            <Text size="lg" weight={500}>
              Icon: {data.effect.icon.description}
            </Text>
            <Text size="xs" color="dimmed">
              {data.effect.icon.id}
            </Text>
          </Group>
        )}
        {displayAttributeRow(
          "Discharge Attribute",
          data.effect.dischargeAttribute
        )}
        {displayAttributeRow(
          "Duration Attribute",
          data.effect.durationAttribute
        )}
        {displayAttributeRow("Falloff Attribute", data.effect.falloffAttribute)}
        {displayAttributeRow("Range Attribute", data.effect.rangeAttribute)}
        {displayAttributeRow(
          "Tracking Speed Attribute",
          data.effect.trackingSpeedAttribute
        )}
      </Card.Section>
      <Card.Section p="xl">
        <Text>Modifiers ({data.effect.modifiers.length})</Text>
        {data.effect.modifiers.map((modifier: any) => (
          <>
            <Text>Func: {modifier.func}</Text>
            <Text>Domain: {modifier.domain}</Text>
            <Text>Operator: {modifier.operator}</Text>
            {modifier.effect && (
              <Group position="apart">
                <Group spacing="xs">
                  Effect:{" "}
                  <Anchor
                    component={Link}
                    href={"/attribute/" + modifier.effect.id}
                  >
                    {modifier.effect.displayName ||
                      modifier.effect.name ||
                      "Unnamed effect"}
                  </Anchor>
                </Group>
                <Text size="xs" color="dimmed">
                  {modifier.effect.id}
                </Text>
              </Group>
            )}
            {modifier.modifiedAttribute && (
              <Group position="apart">
                <Group spacing="xs">
                  Modified Attribute:{" "}
                  <Anchor
                    component={Link}
                    href={"/attribute/" + modifier.modifiedAttribute.id}
                  >
                    {modifier.modifiedAttribute.displayName ||
                      modifier.modifiedAttribute.name ||
                      "Unnamed attribute"}
                  </Anchor>
                </Group>
                <Text size="xs" color="dimmed">
                  {modifier.modifiedAttribute.id}
                </Text>
              </Group>
            )}
            {modifier.modifyingAttribute && (
              <Group position="apart">
                <Group spacing="xs">
                  Modifying Attribute:{" "}
                  <Anchor
                    component={Link}
                    href={"/attribute/" + modifier.modifyingAttribute.id}
                  >
                    {modifier.modifyingAttribute.displayName ||
                      modifier.modifyingAttribute.name ||
                      "Unnamed attribute"}
                  </Anchor>
                </Group>
                <Text size="xs" color="dimmed">
                  {modifier.modifyingAttribute.id}
                </Text>
              </Group>
            )}
          </>
        ))}
      </Card.Section>
    </Card>
  );
};

export default EffectCardDetailed;
