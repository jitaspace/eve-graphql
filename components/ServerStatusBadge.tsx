import { ReactElement, useEffect, useState } from 'react';
import { gql, useApolloClient } from '@apollo/client';
import { GetServerStatusDocument, useGetServerStatusQuery } from '../generated/graphql';
import {
  Anchor,
  Badge,
  Group,
  HoverCard,
  Loader,
  Paper,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { IconAlertCircle, IconCircleCheck, IconCircleX, IconClock } from '@tabler/icons';
import moment from 'moment';

export const QUERY = gql`
  query getServerStatus {
    serverStatus {
      id
      numPlayers
      startTime
      version
      vipMode
      lastUpdated
    }
  }
`;

const ServerStatusBadge = (): ReactElement => {
  const client = useApolloClient();
  const [lastUpdated, setLastUpdated] = useState('');
  const { data, loading, error } = useGetServerStatusQuery();

  const opts = client
    .watchQuery({
      query: GetServerStatusDocument,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-and-network',
      pollInterval: 1000,
    })
    .subscribe(() => {});

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        setLastUpdated(moment(data.serverStatus.lastUpdated).fromNow());
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      opts.unsubscribe();
    };
  });

  const icon = loading ? (
    <Loader size={50} />
  ) : error || !data ? (
    <IconCircleX color="red" size={50} />
  ) : data.serverStatus.vipMode ? (
    <IconAlertCircle color="orange" size={50} />
  ) : (
    <IconCircleCheck color="green" size={50} />
  );

  const serverBootTime = data ? moment(data.serverStatus.startTime).utc().format('HH:mm') : '';
  const eveTime = moment().utc().format('HH:mm');

  return (
    <Paper withBorder radius="md" p="xs" style={{ maxWidth: '400px' }}>
      <HoverCard width={250} shadow="md" withArrow openDelay={100} closeDelay={100}>
        <HoverCard.Target>
          <SimpleGrid cols={2}>
            <Group grow>
              <Group>
                {icon}
                <div>
                  <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                    Players Online
                  </Text>
                  <Skeleton visible={loading || !data}>
                    <Group>
                      <Text weight={700} size="xl">
                        {!loading && !error && data?.serverStatus?.numPlayers}
                      </Text>
                      {data?.serverStatus.vipMode && (
                        <Badge color="orange" variant="filled" size="xs">
                          VIP
                        </Badge>
                      )}
                    </Group>
                  </Skeleton>
                </div>
              </Group>
            </Group>
            <Group>
              <Group>
                <IconClock size={50} color="white" />
                <div>
                  <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                    EVE Time
                  </Text>
                  <Skeleton visible={loading || !data}>
                    <Text weight={700} size="xl">
                      {eveTime}
                    </Text>
                  </Skeleton>
                </div>
              </Group>
            </Group>
          </SimpleGrid>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Stack>
            {data?.serverStatus.vipMode && (
              <Text align="center" variant="gradient">
                Server is in VIP mode
              </Text>
            )}
            <SimpleGrid cols={2} spacing="md">
              <div>
                <Text align="center" size="sm">
                  Version
                </Text>
                <Text align="center" size="md">
                  <b>{data?.serverStatus.version}</b>
                </Text>
              </div>
              <div>
                <Text align="center" size="sm">
                  Started at
                </Text>
                <Text align="center" size="md">
                  <b>{serverBootTime}</b>
                </Text>
              </div>
            </SimpleGrid>
            <Text align="center" size="xs" color="dimmed">
              {loading && 'Loading...'} {!loading && 'Last updated ' + lastUpdated + '.'}
            </Text>
          </Stack>
        </HoverCard.Dropdown>
      </HoverCard>
    </Paper>
  );
};

export default ServerStatusBadge;
