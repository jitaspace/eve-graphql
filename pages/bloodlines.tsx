import { Autocomplete, Loader, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetBloodlinesQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { BloodlineCard } from '../components/BloodlineCard';

const QUERY = gql`
  query GetBloodlines {
    bloodlines {
      id
      name
    }
  }
`;

export const BloodlinesPage = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading, error } = useGetBloodlinesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Stack spacing="xl">
      <Title>Bloodlines</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a bloodline"
      />
      <ActionsGrid>
        {data.bloodlines
          .filter((bloodline) => bloodline.name.toLowerCase().includes(searchString.toLowerCase()))
          .map((bloodline) => (
            <BloodlineCard key={bloodline.id} bloodline={bloodline} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

BloodlinesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default BloodlinesPage;
