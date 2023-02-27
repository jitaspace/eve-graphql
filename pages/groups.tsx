import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetGroupsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { GroupCard } from '../components/GroupCard';

const QUERY = gql`
  query GetGroups {
    groups {
      id
      name
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const GroupsPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetGroupsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredGroups = data.groups.filter((group) =>
    group.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(filteredGroups.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Groups ({filteredGroups.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a group"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {filteredGroups
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

GroupsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default GroupsPage;
