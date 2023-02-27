import { ReactElement, useEffect, useState } from 'react';
import { gql, useApolloClient } from '@apollo/client';
import { GetSystemStatusDocument, useGetSystemStatusQuery } from '../generated/graphql';
import { Group, HoverCard, Loader, Paper, SimpleGrid, Skeleton, Text } from '@mantine/core';
import { IconAlertCircle, IconCircleCheck, IconCircleX } from '@tabler/icons';
import moment from 'moment';

export const QUERY = gql`
  query GetSystemStatus($regionId: ID!) {
    serverStatus {
      id
      lastUpdated
      numPlayers
      startTime
      version
      vipMode
    }
  }
`;

const ServerStatusBadge = (): ReactElement => {
  const client = useApolloClient();
  const { data, loading, error } = useGetSystemStatusQuery({});
  const [lastUpdated, setLastUpdated] = useState('');

  const opts = client
    .watchQuery({
      query: GetSystemStatusDocument,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-and-network',
      pollInterval: 1000,
    })
    .subscribe((value) => {
      console.log('got new value for system status:', value);
    });

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        setLastUpdated(moment(data.serverStatus.lastUpdated).fromNow());
      }
    });
    return () => {
      clearInterval(interval);
      opts.unsubscribe();
    };
  });

  const icon = loading ? (
    <Loader size={40} />
  ) : error || !data ? (
    <IconCircleX color="red" size={40} />
  ) : data.serverStatus.vipMode ? (
    <IconAlertCircle color="orange" size={40} />
  ) : (
    <IconCircleCheck color="green" size={40} />
  );

  return (
    <SimpleGrid cols={3}>
      <Paper withBorder radius="md" p="xs">
        <HoverCard>
          <HoverCard.Target>
            <Group>
              {icon}
              <div>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                  Players Online
                </Text>
                <Skeleton visible={loading || !data}>
                  <Text weight={700} size="xl">
                    {!loading && !error && data?.serverStatus?.numPlayers}
                  </Text>
                </Skeleton>
              </div>
            </Group>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="xs">Last updated {lastUpdated}</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Paper>
      {lastUpdated}
    </SimpleGrid>
  );
};

export default ServerStatusBadge;
