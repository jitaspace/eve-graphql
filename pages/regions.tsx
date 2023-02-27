import { Autocomplete, Loader, Stack, Text, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetRegionsQuery } from '../generated/graphql';
import RegionCard from '../components/RegionCard/RegionCard';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';

const GET_REGIONS_QUERY = gql`
  query GetRegions {
    regions {
      id
      name
    }
  }
`;

export const RegionsPage = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading, error } = useGetRegionsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const matchingRegions = data.regions.filter(({ name }) =>
    name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Stack spacing="xl">
      <Title>Regions ({matchingRegions.length})</Title>
      <Autocomplete
        value={searchString}
        data={[] /*matchingRegions.map((region) => region.name)*/}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        label="Search for a region"
        placeholder="Region name"
      />
      <ActionsGrid>
        {data.regions
          .filter((region) => region.name.toLowerCase().includes(searchString.toLowerCase()))
          .map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

RegionsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default RegionsPage;
