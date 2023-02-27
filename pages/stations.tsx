import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetStationsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { StationCard } from '../components/StationCard';

const GET_STATIONS_QUERY = gql`
  query GetStations {
    solarSystems {
      stations {
        id
        name
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const StationsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetStationsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const matchingStations = data.solarSystems
    .map(({ stations }) => stations)
    .flat()
    .filter(({ name }) => name.toLowerCase().includes(searchString.toLowerCase()));

  const totalPages = Math.max(Math.ceil(matchingStations.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Stations ({matchingStations.length})</Title>
      <Autocomplete
        value={searchString}
        data={[] /*matchingStations.map(({ name }) => name)*/}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        label="Search for a station"
        placeholder="Station name"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {matchingStations
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

StationsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StationsPage;
