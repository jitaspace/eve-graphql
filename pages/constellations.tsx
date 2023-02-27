import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetConstellationsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { ConstellationCard } from '../components/ConstellationCard';
import { GraphQLErrorAlert } from '../components/Alert';
import { usePagination } from '@mantine/hooks';

const GET_CONSTELLATIONS_QUERY = gql`
  query GetConstellations {
    constellations {
      id
      name
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const ConstellationsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetConstellationsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredConstellations = data.constellations.filter((constellation) =>
    constellation.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredConstellations.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Constellations ({filteredConstellations.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a constellation"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredConstellations
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((constellation) => (
            <ConstellationCard key={constellation.id} constellation={constellation} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

ConstellationsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default ConstellationsPage;
