import React, { ReactElement, useState } from 'react';
import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import { gql } from '@apollo/client';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { useGetAlliancesQuery } from '../generated/graphql';
import { ActionsGrid } from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { AllianceCard } from '../components/AllianceCard';

export const GET_ALLIANCES_QUERY = gql`
  query GetAlliances {
    alliances {
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

export const AlliancesPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetAlliancesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredAlliances = data.alliances.filter((alliance) =>
    alliance.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredAlliances.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Alliances ({filteredAlliances.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an alliance"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredAlliances
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((alliance) => (
            <AllianceCard key={alliance.id} alliance={alliance} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

AlliancesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AlliancesPage;
