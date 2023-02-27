import React, { ReactElement } from 'react';
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Anchor,
  Loader,
  ColorSwatch,
  Group,
  Stack,
  Badge,
} from '@mantine/core';
import NavbarLayout from '../layouts/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetGraphQlApiStatusQuery } from '../generated/graphql';
import { ESIStatusPanel } from '../components/ESIStatus';

export const QUERY = gql`
  query GetGraphQLApiStatus {
    __typename
  }
`;

const AboutPage = () => {
  const { data, loading, error } = useGetGraphQlApiStatusQuery();

  const apiBadge = loading ? (
    <Loader />
  ) : error ? (
    <ColorSwatch color="red" />
  ) : (
    <ColorSwatch color="green" />
  );

  return (
    <div>
      <h1>Status</h1>
      <Text>
        This page shall provide (<i>soon</i>) you with some more information about the service
        offered, namely number of users, error rates, service load, as well as data freshness.
      </Text>
      <Title order={4} mt="xl" mb="sm">
        JitaSpace Status <Badge color="red">1 error</Badge>
      </Title>
      <Stack spacing="xs">
        <Group position="apart">
          <Text>GraphQL API</Text> {apiBadge}
        </Group>
        <Group position="apart">
          <Text>Static Data</Text> <ColorSwatch color="green" />
        </Group>
        <Group position="apart">
          <Text>EVE Client Data</Text> <ColorSwatch color="yellow" />
        </Group>
      </Stack>
      {data && <ESIStatusPanel />}
    </div>
  );
};

AboutPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AboutPage;
