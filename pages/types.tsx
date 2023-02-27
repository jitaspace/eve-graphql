import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { useGetTypesQuery } from '../generated/graphql';
import { TypeCard } from '../components/TypeCard';

const QUERY = gql`
  query GetTypes {
    types {
      id
      name
      images {
        url
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const TypesPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetTypesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const matchingTypes = data.types.filter((type) =>
    type.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(matchingTypes.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Types ({matchingTypes.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a type"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {matchingTypes
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((type) => (
            <TypeCard key={type.id} type={type} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

TypesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default TypesPage;
