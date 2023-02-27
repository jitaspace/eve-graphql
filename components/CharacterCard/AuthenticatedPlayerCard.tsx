import {
  Anchor,
  Card,
  Group,
  Image,
  Loader,
  Space,
  Text,
  Timeline,
} from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetAuthenticatedPlayerDetailsQuery } from "../../generated/graphql";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import moment from "moment";
import { JsonCard } from "../PreformattedCard";

export const QUERY = gql`
  query GetAuthenticatedPlayerDetails {
    me {
      id
      name
      birthday
      description
      gender
      securityStatus
      title
      bloodline {
        id
        name
      }
      race {
        id
        name
      }
      faction {
        id
        name
      }
      images {
        url
      }
      corporation {
        id
        name
      }
      alliance {
        id
        name
      }
      corporationHistory {
        corporation {
          id
          name
          images {
            url
          }
        }
        startDate
        isDeleted
        recordId
      }
      location {
        solarSystem {
          id
          name
        }
        station {
          id
          name
        }
        structure {
          id
          name
        }
      }
    }
  }
`;

interface Props {}

const AuthenticatedPlayerCard = (props: Props) => {
  const { data, loading, error } = useGetAuthenticatedPlayerDetailsQuery({});

  console.log("error", error);
  console.log("data", data);

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {data.me.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.id}
            </Text>
          </Group>
          <Group position="apart">
            <Text>
              Corporation:{" "}
              <Anchor
                component={Link}
                href={"/corporation/" + data.me.corporation.id}
              >
                {data.me.corporation.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.corporation.id}
            </Text>
          </Group>
          {data.me.title && <Text>Title: {data.me.title}</Text>}
          <Text>Gender: {data.me.gender}</Text>
          <Text>Security Status: {data.me.securityStatus}</Text>
          {data.me.alliance && (
            <Group position="apart">
              <Text>
                Alliance:{" "}
                <Anchor
                  component={Link}
                  href={"/alliance/" + data.me.alliance.id}
                >
                  {data.me.alliance.name}
                </Anchor>
              </Text>
              <Text size="xs" color="dimmed">
                {data.me.alliance.id}
              </Text>
            </Group>
          )}
          <Text>
            Birthdate:{" "}
            {moment(Math.floor(Number(data.me.birthday)))
              .utc()
              .format("YYYY-MM-DD HH:mm")
              .toString()}
          </Text>
          <Group position="apart">
            <Text>
              Bloodline:{" "}
              <Anchor
                component={Link}
                href={"/bloodline/" + data.me.bloodline.id}
              >
                {data.me.bloodline.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.bloodline.id}
            </Text>
          </Group>
          <Group position="apart">
            <Text>
              Race:{" "}
              <Anchor component={Link} href={"/race/" + data.me.race.id}>
                {data.me.race.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.race.id}
            </Text>
          </Group>
          {data.me.faction && (
            <Group position="apart">
              <Text>
                Faction Warfare:{" "}
                <Anchor
                  component={Link}
                  href={"/faction/" + data.me.faction.id}
                >
                  {data.me.faction.name}
                </Anchor>
              </Text>
              <Text size="xs" color="dimmed">
                {data.me.faction.id}
              </Text>
            </Group>
          )}
        </Card.Section>
        <Card.Section p="xl">
          <Image src={data.me.images[0].url} width={128} />
        </Card.Section>
      </Group>
      <Card.Section p="xl">
        {data.me.location.solarSystem && (
          <Group position="apart">
            <Text>
              Current location:{" "}
              <Anchor
                component={Link}
                href={"/solarsystem/" + data.me.location.solarSystem.id}
              >
                {data.me.location.solarSystem.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.location.solarSystem.id}
            </Text>
          </Group>
        )}
        {data.me.location.station && (
          <Group position="apart">
            <Text>
              Station:{" "}
              <Anchor
                component={Link}
                href={"/station/" + data.me.location.station.id}
              >
                {data.me.location.station.name}
              </Anchor>
            </Text>
            <Text size="xs" color="dimmed">
              {data.me.location.station.id}
            </Text>
          </Group>
        )}
      </Card.Section>
      {data.me.corporationHistory.length > 0 && (
        <Card.Section p="xl">
          <Text size="md" weight={500}>
            Corporation History ({data.me.corporationHistory.length})
          </Text>
          <Space h="md" />
          <Timeline active={1} bulletSize={32} lineWidth={2}>
            {data.me.corporationHistory.map((corporationMembership) => (
              <Timeline.Item
                key={corporationMembership.recordId}
                bullet={
                  <Image
                    src={
                      corporationMembership.corporation.images[0].url +
                      "?size=32"
                    }
                    width={32}
                  />
                }
              >
                <Anchor
                  component={Link}
                  href={"/corporation/" + corporationMembership.corporation.id}
                >
                  {corporationMembership.corporation.name} since{" "}
                  {moment(corporationMembership.startDate)
                    .utc()
                    .format("YYYY-MM-DD HH:mm")}
                </Anchor>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card.Section>
      )}

      {data.me.description && (
        <Card.Section p="xl">
          <Text
            size="xs"
            mt="xs"
            dangerouslySetInnerHTML={{
              __html: data.me.description ?? "",
            }}
          />
        </Card.Section>
      )}
      <Card.Section p="xl">
        <JsonCard json={data} />
      </Card.Section>
    </Card>
  );
};

export default AuthenticatedPlayerCard;
