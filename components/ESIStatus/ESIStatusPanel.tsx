import { gql } from '@apollo/client';
import {
  createStyles,
  Badge,
  Container,
  Title,
  Text,
  Button,
  Anchor,
  Loader,
  ColorSwatch,
  Group,
  Stack,
} from '@mantine/core';
import { useGetEsiStatusQuery } from '../../generated/graphql';
import React from 'react';

export const QUERY = gql`
  query GetEsiStatus {
    status {
      endpoint
      method
      route
      status
      tags
    }
  }
`;

const ESIStatusPanel = () => {
  const { data, loading, error } = useGetEsiStatusQuery();
  if (loading) {
    return <Loader />;
  }

  if (!data || error) {
    console.log(data);
    console.log(error);
    return <Text>Error</Text>;
  }

  const tags = [...new Set(data.status.flatMap((s) => s.tags))];
  tags.sort();

  const erroredEndpoints = data.status.filter((s) => s.status !== 'green');

  return (
    <>
      <Title order={4} mt="xl" mb="sm">
        ESI Status{' '}
        {erroredEndpoints.length > 0 && (
          <Badge color="red">
            {erroredEndpoints.length} {erroredEndpoints.length > 1 ? 'errors' : 'error'}
          </Badge>
        )}
      </Title>
      <Stack>
        {tags.map((tag) => (
          <>
            <Title key={tag} order={5} mt="md">
              {tag}
            </Title>
            <Stack spacing="xs">
              {data.status
                .filter((s) => s.tags.includes(tag))
                .map((s) => (
                  <Group position="apart" key={s.route}>
                    <Group spacing="xl">
                      <Text>
                        {s.method.toUpperCase()} {s.route}
                      </Text>

                      <Text color="dimmed">({s.endpoint})</Text>
                    </Group>
                    <ColorSwatch color={s.status} />
                  </Group>
                ))}
            </Stack>
          </>
        ))}
      </Stack>
    </>
  );
};

export default ESIStatusPanel;
