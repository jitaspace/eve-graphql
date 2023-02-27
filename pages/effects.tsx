import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetEffectsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { EffectCard } from '../components/EffectCard';

export const GET_EFFECTS_QUERY = gql`
  query GetEffects {
    effects {
      id
      displayName
      name
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const EffectsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetEffectsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredEffects = data.effects.filter(
    (effect) =>
      effect.displayName?.toLowerCase().includes(searchString.toLowerCase()) ||
      effect.name?.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredEffects.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Effects ({filteredEffects.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an effect"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredEffects
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((effect) => (
            <EffectCard key={effect.id} effect={effect} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

EffectsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default EffectsPage;
