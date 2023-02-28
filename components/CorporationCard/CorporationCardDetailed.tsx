import { Anchor, Card, Group, Image, Loader, Text } from "@mantine/core";
import { gql } from "@apollo/client";
import { useGetCorporationDetailsQuery } from "../../generated/graphql";
import React, { useState } from "react";
import Link from "next/link";
import { GraphQLErrorAlert } from "../Alert";
import moment from "moment";

export const QUERY = gql`
  query GetCorporationDetails($corporationId: ID!) {
    corporation(id: $corporationId) {
      id
      name
      ticker
      dateFounded
      description
      url
      memberCount
      shares
      taxRate
      warEligible
      images {
        name
        url
      }
      faction {
        id
        name
      }
      alliance {
        id
        name
      }
      ceo {
        id
        name
      }
      creator {
        id
        name
      }
      homeStation {
        id
        name
      }
    }
  }
`;

interface Props {
  corporationId: string;
}

const CorporationCardDetailed = ({ corporationId }: Props) => {
  const [imgSrc, setImgSrc] = useState<string>();
  const { data, loading, error } = useGetCorporationDetailsQuery({
    variables: { corporationId },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  if (!imgSrc) {
    setImgSrc(data.corporation.images[0].url + "?size=128");
  }

  return (
    <Card>
      <Group position="apart">
        <Card.Section p="xl">
          <Group position="apart">
            <Text size="lg" weight={500}>
              [{data.corporation.ticker}] {data.corporation.name}
            </Text>
            <Text size="xs" color="dimmed">
              {data.corporation.id}
            </Text>
          </Group>
          <Text>
            Founded on{" "}
            {moment(Math.floor(Number(data.corporation.dateFounded)))
              .utc()
              .format("YYYY-MM-DD HH:mm")
              .toString()}
          </Text>
          <Text>Members: {data.corporation.memberCount}</Text>
          <Text>Shares: {data.corporation.shares}</Text>
          <Text>Tax Rate: {data.corporation.taxRate}</Text>
          <Text>
            War Eligible: {data.corporation.warEligible ? "yes" : "no"}
          </Text>
          {data.corporation.ceo && (
            <Text>
              CEO:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/character/[id]",
                  query: { id: data.corporation.ceo.id },
                }}
              >
                {data.corporation.ceo.name}
              </Anchor>
            </Text>
          )}
          {data.corporation.creator && (
            <Text>
              Creator:
              <Anchor
                component={Link}
                href={{
                  pathname: "/character/[id]",
                  query: { id: data.corporation.creator.id },
                }}
              >
                {data.corporation.creator.name}
              </Anchor>
            </Text>
          )}
          {data.corporation.faction && (
            <Text>
              Faction:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/faction/[id]",
                  query: { id: data.corporation.faction.id },
                }}
              >
                {data.corporation.faction.name}
              </Anchor>
            </Text>
          )}
          {data.corporation.alliance && (
            <Text>
              Alliance:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/alliance/[id]",
                  query: { id: data.corporation.alliance.id },
                }}
              >
                {data.corporation.alliance.name}
              </Anchor>
            </Text>
          )}
          {data.corporation.homeStation && (
            <Text>
              Home Station:{" "}
              <Anchor
                component={Link}
                href={{
                  pathname: "/station/[id]",
                  query: { id: data.corporation.homeStation.id },
                }}
              >
                {data.corporation.homeStation.name}
              </Anchor>
            </Text>
          )}
          {data.corporation.url && (
            <Text>
              URL:{" "}
              <Anchor href={data.corporation.url}>
                {data.corporation.url}
              </Anchor>
            </Text>
          )}
        </Card.Section>
        {data.corporation.images && (
          <Card.Section p="xl">
            <Image
              src={imgSrc}
              width={128}
              fit="contain"
              onError={() => {
                console.warn(
                  "Error loading detailed image of corporation",
                  data.corporation.id,
                  data.corporation.name
                );
                setImgSrc(
                  "https://images.evetech.net/corporations/1/logo?size=128"
                );
              }}
            />
          </Card.Section>
        )}
      </Group>

      <Text
        size="xs"
        mt="xs"
        dangerouslySetInnerHTML={{
          __html: data?.corporation.description ?? "",
        }}
      />
    </Card>
  );
};

export default CorporationCardDetailed;
