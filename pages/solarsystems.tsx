import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetSolarSystemsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { SolarSystemCard } from '../components/SolarSystemCard';
import { GraphQLErrorAlert } from '../components/Alert';

const GET_SOLAR_SYSTEMS_QUERY = gql`
  query GetSolarSystems {
    solarSystems {
      id
      name
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const SolarSystemsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetSolarSystemsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredSolarSystems = data.solarSystems.filter((solarSystem) =>
    solarSystem.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredSolarSystems.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Solar Systems ({filteredSolarSystems.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a solar system"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredSolarSystems
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((solarSystem) => (
            <SolarSystemCard key={solarSystem.id} solarSystem={solarSystem} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

SolarSystemsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default SolarSystemsPage;
