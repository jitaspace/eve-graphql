import React, { ReactElement, useState } from 'react';
import { gql } from '@apollo/client';
import { Autocomplete, Loader, Stack, Title } from '@mantine/core';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { useGetAncestriesQuery } from '../generated/graphql';
import { ActionsGrid } from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { AncestryCard } from '../components/AncestryCard';

export const QUERY = gql`
  query GetAncestries {
    ancestries {
      id
      name
    }
  }
`;

export const AncestriesPage = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading, error } = useGetAncestriesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredAncestries = data.ancestries.filter((ancestry) =>
    ancestry.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Stack spacing="xl">
      <Title>Ancestries ({filteredAncestries.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an ancestry"
      />
      <ActionsGrid>
        {filteredAncestries.map((ancestry) => (
          <AncestryCard key={ancestry.id} ancestry={ancestry} />
        ))}
      </ActionsGrid>
    </Stack>
  );
};

AncestriesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AncestriesPage;
