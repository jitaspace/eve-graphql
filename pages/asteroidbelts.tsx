import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetAsteroidBeltsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { AsteroidBeltCard } from '../components/AsteroidBeltCard';

const QUERY = gql`
  query GetAsteroidBelts {
    solarSystems {
      planets {
        asteroidBelts {
          id
          name
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const AsteroidBeltsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetAsteroidBeltsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredAsteroidBelts = data.solarSystems
    .flatMap((solarSystem) => solarSystem.planets)
    .flatMap((planet) => planet.asteroidBelts)
    .filter((asteroidBelt) => asteroidBelt.name.toLowerCase().includes(searchString.toLowerCase()));

  const totalPages = Math.max(Math.ceil(filteredAsteroidBelts.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Asteroid Belts ({filteredAsteroidBelts.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an asteroid belt"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredAsteroidBelts
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((asteroidBelt) => (
            <AsteroidBeltCard key={asteroidBelt.id} asteroidBelt={asteroidBelt} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

AsteroidBeltsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AsteroidBeltsPage;
