import { Autocomplete, Loader, NavLink, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetMarketGroupsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { GroupCard } from '../components/GroupCard';

interface MarketGroup {
  id: string;
  name?: string;
  parentGroup?: MarketGroup | null;
  children?: MarketGroup[];
}

const QUERY = gql`
  query GetMarketGroups {
    marketGroups {
      id
      name
      parentGroup {
        id
      }
    }
  }
`;

export const MarketGroupsPage = () => {
  const { data, loading, error } = useGetMarketGroupsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const getGroupsWithParent = (parent: string | null): MarketGroup[] =>
    data.marketGroups
      .filter((group) => group.parentGroup?.id == parent)
      .map((group) => ({
        ...group,
        children: getGroupsWithParent(group.id),
      }));

  const renderGroup = (group: any) => {
    //console.log('render group', group.id, 'with children', group);
    return (
      <NavLink label={group.name}>{group.children.map((group: any) => renderGroup(group))}</NavLink>
    );
  };

  const rootGroups = getGroupsWithParent(null);

  console.log('GROUPS:', rootGroups);

  return (
    <Stack spacing="xl">
      <Title>Market Groups</Title>
      {rootGroups.map((group) => renderGroup(group))}
    </Stack>
  );
};

MarketGroupsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default MarketGroupsPage;
