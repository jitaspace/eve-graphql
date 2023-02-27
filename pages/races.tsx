import { Loader, Stack, Title } from '@mantine/core';
import React, { ReactElement } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetRacesQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { RaceCard } from '../components/RaceCard';

const QUERY = gql`
  query GetRaces {
    races {
      id
      name
    }
  }
`;

export const RacesPage = () => {
  const { data, loading, error } = useGetRacesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Stack spacing="xl">
      <Title>Races</Title>
      <ActionsGrid>
        {data.races.map((race) => (
          <RaceCard key={race.id} race={race} />
        ))}
      </ActionsGrid>
    </Stack>
  );
};

RacesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default RacesPage;
