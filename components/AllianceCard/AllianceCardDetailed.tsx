import { Anchor, Card, Group, Image, Loader, Space, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetAllianceDetailsQuery } from "@/generated/graphql";
import ActionsGrid from "../ActionsGrid";
import React from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import moment from "moment";
import { CorporationCard } from "../CorporationCard";

export const QUERY = gql`
  query GetAllianceDetails($allianceId: ID!) {
    alliance(id: $allianceId) {
      id
      name
      ticker
      dateFounded
      faction {
        id
        name
      }
      creatorCorporation {
        id
        name
      }
      executorCorporation {
        id
        name
      }
      creator {
        id
        name
      }
      corporations {
        id
        name
        images {
          url
        }
      }
      images {
        name
        url
      }
    }
  }
`;

interface Props {
  allianceId: string;
}

const AllianceCardDetailed = ({ allianceId }: Props) => {
  const { data, loading, error } = useGetAllianceDetailsQuery({
    variables: { allianceId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Card>
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              [{data.alliance.ticker}] {data?.alliance.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.alliance.id}
            </Text>
          </Group>
          <Text>
            Founded on{" "}
            {moment(Math.floor(Number(data.alliance.dateFounded)))
              .utc()
              .format("YYYY-MM-DD HH:mm")
              .toString()}
          </Text>
          {data.alliance.faction && (
            <Text>
              Faction:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/faction/[id]",
                  query: { id: data.alliance.faction.id },
                }}
              >
                {data.alliance.faction.name}
              </Anchor>
            </Text>
          )}
          <Text>
            Creator:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/character/[id]",
                query: { id: data.alliance.creator.id },
              }}
            >
              {data.alliance.creator.name}
            </Anchor>
          </Text>
          <Text>
            Creator Corporation:{" "}
            <Anchor
              component={Link}
              href={{
                pathname: "/corporation/[id]",
                query: { id: data.alliance.creatorCorporation.id },
              }}
            >
              {data.alliance.creatorCorporation.name}
            </Anchor>
          </Text>
          {data.alliance.executorCorporation && (
            <Text>
              Executor Corporation:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/corporation/[id]",
                  query: {
                    id: data.alliance.executorCorporation.id,
                  },
                }}
              >
                {data.alliance.executorCorporation.name}
              </Anchor>
            </Text>
          )}
        </Card.Section>
        <Card.Section p="xl">
          <Image
            src={data.alliance.images[0].url}
            alt={data.alliance.name ?? allianceId}
            width={128}
          />
        </Card.Section>
      </Group>
      <Card.Section p="xl">
        <Text size="md" weight={500}>
          Member Corporations ({data.alliance.corporations.length})
        </Text>
        <Space h="md" />
        <ActionsGrid cols={2}>
          {data.alliance.corporations.map((corporation) => (
            <Link
              key={corporation.id}
              //href={"/corporation/" + corporation.id}
              href={{
                pathname: "/corporation/[id]",
                query: { id: corporation.id },
              }}
            >
              <CorporationCard key={corporation.id} corporation={corporation} />
            </Link>
          )) ?? <p>loading</p>}
        </ActionsGrid>
      </Card.Section>
    </Card>
  );
};

export default AllianceCardDetailed;
