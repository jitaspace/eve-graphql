import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { StarCard } from '../components/StarCard';
import { useGetStarsQuery } from '../generated/graphql';

const QUERY = gql`
  query GetStars {
    solarSystems {
      star {
        id
        name
        type {
          id
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const StarsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetStarsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredStars = data.solarSystems
    .map((solarSystem) => solarSystem.star)
    .filter((star) => star && star!.name.toLowerCase().includes(searchString.toLowerCase()));

  const totalPages = Math.max(Math.ceil(filteredStars.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Stars ({filteredStars.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a star"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredStars
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((star) => (
            <StarCard key={star!.id} star={star!} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

StarsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StarsPage;
