import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetNpcCorporationsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { CorporationCard } from '../components/CorporationCard';

const QUERY = gql`
  query GetNpcCorporations {
    npcCorporations {
      id
      name
      images {
        name
        url
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const NpcCorporationsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetNpcCorporationsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredNpcCorporations = data.npcCorporations.filter((corporation) =>
    corporation.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredNpcCorporations.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>NPC Corporations ({filteredNpcCorporations.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an NPC Corporation"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredNpcCorporations
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((corporation) => (
            <CorporationCard key={corporation.id} corporation={corporation} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

NpcCorporationsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default NpcCorporationsPage;
