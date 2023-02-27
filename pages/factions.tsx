import { Autocomplete, Loader, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetFactionsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { FactionCard } from '../components/FactionCard';

const QUERY = gql`
  query GetFactions {
    factions {
      id
      name
    }
  }
`;

export const FactionsPage = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading, error } = useGetFactionsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Stack spacing="xl">
      <Title>Factions</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a faction"
      />
      <ActionsGrid>
        {data.factions
          .filter((faction) => faction.name.toLowerCase().includes(searchString.toLowerCase()))
          .map((faction) => (
            <FactionCard key={faction.id} faction={faction} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

FactionsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default FactionsPage;
