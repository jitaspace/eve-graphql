import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { useGetStargatesQuery } from '../generated/graphql';
import { StargateCard } from '../components/StargateCard';

const QUERY = gql`
  query GetStargates {
    solarSystems {
      stargates {
        id
        name
        type {
          id
          name
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const StargatesPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetStargatesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredStargates = data.solarSystems
    .map((solarSystem) => solarSystem.stargates)
    .flat()
    .filter(
      (stargate) => stargate && stargate!.name.toLowerCase().includes(searchString.toLowerCase())
    );

  const totalPages = Math.max(Math.ceil(filteredStargates.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Stargates ({filteredStargates.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a stargate"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredStargates
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((stargate) => (
            <StargateCard key={stargate!.id} stargate={stargate!} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

StargatesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StargatesPage;
