import { Autocomplete, Center, Loader, Pagination, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetMoonsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { MoonCard } from '../components/MoonCard';

const QUERY = gql`
  query GetMoons {
    solarSystems {
      planets {
        moons {
          id
          name
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const MoonsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetMoonsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredMoons = data.solarSystems
    .flatMap((solarSystem) => solarSystem.planets)
    .flatMap((planet) => planet.moons)
    .filter((moon) => moon.name.toLowerCase().includes(searchString.toLowerCase()));

  const totalPages = Math.max(Math.ceil(filteredMoons.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Moons ({filteredMoons.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a moon"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredMoons
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((moon) => (
            <MoonCard key={moon.id} moon={moon} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

MoonsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default MoonsPage;
