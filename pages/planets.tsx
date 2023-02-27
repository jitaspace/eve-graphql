import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetPlanetsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { PlanetCard } from '../components/PlanetCard';

const QUERY = gql`
  query GetPlanets {
    solarSystems {
      planets {
        id
        name
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const PlanetsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetPlanetsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredPlanets = data.solarSystems
    .flatMap((solarSystem) => solarSystem.planets)
    .filter((planet) => planet.name.toLowerCase().includes(searchString.toLowerCase()));

  const totalPages = Math.max(Math.ceil(filteredPlanets.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Planets ({filteredPlanets.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a planet"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredPlanets
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

PlanetsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default PlanetsPage;
