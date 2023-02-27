import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import { gql } from '@apollo/client';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { useGetAgentsQuery } from '../generated/graphql';
import { ActionsGrid } from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { CharacterCard } from '../components/CharacterCard';

export const GET_AGENTS_QUERY = gql`
  query GetAgents {
    agents {
      id
      name
      images {
        url
      }
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const AgentsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetAgentsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredAgents = data.agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredAgents.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Agents ({filteredAgents.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an agent"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredAgents
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((agent) => (
            <CharacterCard key={agent.id} character={agent} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

AgentsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AgentsPage;
