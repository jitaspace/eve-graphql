import { Card, Group, Loader, Skeleton, Text } from '@mantine/core';
import { gql } from '@apollo/client';
import { GetAttributeDetailsDocument, useGetAttributeDetailsQuery } from '../../generated/graphql';
import React from 'react';
import { GraphQLErrorAlert } from '../Alert';
import { GraphQLDocumentCard, JsonCard } from '../PreformattedCard';
import { print } from 'graphql';

export const QUERY = gql`
  query GetAttributeDetails($attributeId: ID!) {
    attribute(id: $attributeId) {
      id
      defaultValue
      description
      displayName
      highIsGood
      icon {
        id
        file
        description
      }
      name
      published
      stackable
      unit {
        id
        name
        displayName
        description
      }
    }
  }
`;

interface Props {
  attributeId: string;
  displayQuery?: boolean;
}

const AttributeCardDetailed = ({ attributeId, displayQuery }: Props) => {
  const { data, loading, error } = useGetAttributeDetailsQuery({
    variables: { attributeId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Card.Section p="xl">
        <Group position="apart">
          <Text size="lg" weight={500}>
            <Skeleton visible={loading}>
              {data.attribute.displayName ?? data.attribute.name ?? '(nameless attribute)'}
            </Skeleton>
          </Text>
          <Text size="xs" color="dimmed">
            <Skeleton visible={loading}>{data.attribute.id}</Skeleton>
          </Text>
        </Group>
        <Text>Default Value: {data.attribute.defaultValue}</Text>
        <Text>High is Good: {data.attribute.highIsGood ? 'Yes' : 'No'}</Text>
        {data.attribute.icon && (
          <Group position="apart">
            <Text>Icon: {data.attribute.icon.description}</Text>
            <Text size="xs" color="dimmed">
              {data.attribute.icon.id}
            </Text>
          </Group>
        )}
        <Text>Published: {data.attribute.published ? 'Yes' : 'No'}</Text>
        <Text>Stackable: {data.attribute.stackable ? 'Yes' : 'No'}</Text>
        {data.attribute.unit && (
          <Group position="apart">
            <Text>
              Unit: {data.attribute.unit.name} {data.attribute.unit.displayName}
            </Text>
            <Text size="xs" color="dimmed">
              {data.attribute.unit.id}
            </Text>
          </Group>
        )}
        <Text
          size="xs"
          mt="xs"
          dangerouslySetInnerHTML={{
            __html: data?.attribute.description ?? '',
          }}
        />
      </Card.Section>
      {displayQuery && (
        <Card.Section>
          <GraphQLDocumentCard query={GetAttributeDetailsDocument} />
          <JsonCard json={data} />
        </Card.Section>
      )}
    </Card>
  );
};

export default AttributeCardDetailed;
